import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CONTACT, PHONE_HREF, buildEmailHref } from "@/data/contact";
import { jurisdictions, serviceBuckets } from "@/data/siteArchitecture";

const NAV_LOGO = "/brands/orpheus-client-logo.png";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  showContact?: boolean;
};

type Suggestion = {
  label: string;
  text: string;
};

const DEFAULT_SUGGESTIONS: Suggestion[] = [
  {
    label: "Entity setup",
    text: "I need help choosing and setting up the right company structure.",
  },
  {
    label: "Banking",
    text: "I need help with corporate banking and treasury setup.",
  },
  {
    label: "Capital",
    text: "I want to discuss debt raising or corporate finance options.",
  },
];

function getPageContext(pathname: string) {
  const service = serviceBuckets.find((item) => pathname === `/services/${item.slug}`);
  if (service) {
    return {
      title: service.title,
      suggestions: [
        {
          label: `About ${service.short}`,
          text: `I would like to understand how Orpheus can help with ${service.title}.`,
        },
        {
          label: "Requirements",
          text: `What information would you need from me to assess a ${service.title} requirement?`,
        },
        {
          label: "Speak to advisor",
          text: `I would like to speak with an advisor about ${service.title}.`,
        },
      ] satisfies Suggestion[],
    };
  }

  const jurisdiction = jurisdictions.find(
    (item) => pathname === `/jurisdictions/${item.slug}`
  );
  if (jurisdiction) {
    return {
      title: jurisdiction.title,
      suggestions: [
        {
          label: `${jurisdiction.title} setup`,
          text: `I am considering a ${jurisdiction.title} structure. What should I evaluate first?`,
        },
        {
          label: "Banking impact",
          text: `How would a ${jurisdiction.title} structure affect banking and compliance?`,
        },
        {
          label: "Speak to advisor",
          text: `I would like to speak with an advisor about ${jurisdiction.title}.`,
        },
      ] satisfies Suggestion[],
    };
  }

  if (pathname === "/contact") {
    return {
      title: "Contact",
      suggestions: [
        { label: "Call team", text: "Please share the best number to call your advisory team." },
        { label: "Email team", text: "Please share the best email address for an enquiry." },
        { label: "Response time", text: "How quickly can the advisory team respond?" },
      ] satisfies Suggestion[],
    };
  }

  if (pathname.startsWith("/blog")) {
    return {
      title: "Insights",
      suggestions: [
        { label: "Discuss topic", text: "I would like to discuss this topic with an advisor." },
        { label: "Entity advice", text: "I have a question about cross-border entity structuring." },
        { label: "Banking advice", text: "I have a question about corporate banking access." },
      ] satisfies Suggestion[],
    };
  }

  return { title: "General enquiry", suggestions: DEFAULT_SUGGESTIONS };
}

function getReply(input: string, pathname: string) {
  const value = input.toLowerCase();
  const pageContext = getPageContext(pathname);

  if (/phone|number|call|telephone/.test(value)) {
    return `You can call our Dubai advisory team on ${CONTACT.phoneDisplay}. For a written enquiry, you can also email ${CONTACT.email}.`;
  }

  if (/email|mail/.test(value)) {
    return `You can email the Orpheus advisory team at ${CONTACT.email}. If you include your objective, preferred jurisdiction and timeline, the team can route the enquiry more efficiently.`;
  }

  if (/entity|company|incorporat|formation|holding|spv|offshore|structure/.test(value)) {
    return "For an entity or holding structure, we would normally start with the intended activity, ownership, target markets, banking needs and preferred jurisdiction. From there, the team can compare suitable structures and outline the practical setup steps.";
  }

  if (/bank|treasury|account|kyc|ubo|currency/.test(value)) {
    return "For banking and treasury, the key points are the entity profile, business model, UBO background, expected transaction flows, currencies and target banking markets. Orpheus can help prepare the banking dossier and coordinate the onboarding approach.";
  }

  if (/debt|loan|credit|raise|capital|finance|funding|refinanc/.test(value)) {
    return "For a financing requirement, the team would usually review the amount required, use of funds, preferred tenor, existing debt, financial performance and available security. That helps determine whether bank lending, private credit or another structure is the better fit.";
  }

  if (/wealth|succession|family|asset protection|inherit/.test(value)) {
    return "For private wealth structuring, the discussion normally starts with ownership, family objectives, asset locations, succession priorities and the jurisdictions involved. The goal is to build a structure that remains practical for governance, banking and long-term continuity.";
  }

  if (/compliance|risk|aml|regulat|governance/.test(value)) {
    return "For compliance and risk support, Orpheus would first map the entity, regulated activities, ownership and current documentation. The team can then identify gaps across AML/KYC, UBO records, governance and ongoing regulatory obligations.";
  }

  if (/uae|difc|adgm|bvi|seychelles|jurisdiction/.test(value)) {
    return "Jurisdiction choice should follow the commercial objective rather than incorporation cost alone. The team typically compares operating needs, ownership, regulation, tax position, banking acceptance and counterparties before recommending a route.";
  }

  if (/time|quick|response|how long/.test(value)) {
    return "For an initial enquiry, the team normally aims to respond within one business day. More complex structuring or financing work may require an initial fact-find before a detailed recommendation is given.";
  }

  if (pageContext.title !== "General enquiry") {
    return `For ${pageContext.title}, the most useful starting point is a short summary of your objective, current structure, jurisdictions involved and target timeline. The advisory team can then identify the right next step and any information required.`;
  }

  return "Thanks for the context. The best next step is to share your commercial objective, the jurisdictions involved, any current entity or banking setup, and your target timeline. An Orpheus advisor can then route the enquiry to the right specialist.";
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  text: "Welcome to Orpheus. Tell me what you are trying to achieve and I can give you a quick first-step answer before showing you the best way to contact the advisory team.",
};

export function AdvisoryChat() {
  const location = useLocation();
  const [loaderReady, setLoaderReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const idRef = useRef(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const replyTimerRef = useRef<number | null>(null);

  const pageContext = useMemo(
    () => getPageContext(location.pathname),
    [location.pathname]
  );

  useEffect(() => {
    const onLoaderComplete = () => {
      setLoaderReady(true);
      setShowTeaser(true);
    };

    if ((window as Window & { orpheusLoaderFinished?: boolean }).orpheusLoaderFinished) {
      onLoaderComplete();
      return;
    }

    window.addEventListener("orpheusLoaderComplete", onLoaderComplete, { once: true });
    return () => window.removeEventListener("orpheusLoaderComplete", onLoaderComplete);
  }, []);

  useEffect(() => {
    setMessages([INITIAL_MESSAGE]);
    setMessage("");
    setIsTyping(false);
    if (replyTimerRef.current) window.clearTimeout(replyTimerRef.current);
  }, [location.pathname]);

  useEffect(() => {
    const target = scrollRef.current;
    if (!target) return;
    target.scrollTo({ top: target.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  useEffect(
    () => () => {
      if (replyTimerRef.current) window.clearTimeout(replyTimerRef.current);
    },
    []
  );

  const dismissTeaser = () => {
    setShowTeaser(false);
    setTeaserDismissed(true);
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = {
      id: idRef.current++,
      role: "user",
      text: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setIsTyping(true);
    dismissTeaser();

    replyTimerRef.current = window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: idRef.current++,
        role: "assistant",
        text: getReply(trimmed, location.pathname),
        showContact: true,
      };
      setMessages((current) => [...current, assistantMessage]);
      setIsTyping(false);
    }, 650);
  };

  const emailHref = buildEmailHref(
    `Website enquiry${pageContext.title !== "General enquiry" ? ` — ${pageContext.title}` : ""}`,
    "Hello Orpheus Financial,\n\nI would like to discuss the following requirement:\n\n"
  );

  if (!loaderReady) return null;

  const teaserVisible = !isOpen && showTeaser && !teaserDismissed;

  return (
    <div className="fixed bottom-5 right-4 z-[9999] flex flex-col items-end sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {teaserVisible && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="mb-3 w-[min(330px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-[#D8B867]/25 bg-[#071A15] shadow-[0_18px_46px_rgba(0,0,0,0.38)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-[#D8B867]" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  Ask Orpheus
                </p>
              </div>
              <button
                type="button"
                onClick={dismissTeaser}
                className="rounded-full p-1 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Dismiss enquiry assistant"
              >
                <X size={14} />
              </button>
            </div>

            <div className="p-3">
              <p className="px-1 pb-3 font-body text-[12px] leading-5 text-white/65">
                Get a quick first-step answer, then call or email the advisory team.
              </p>
              <div className="space-y-2">
                {pageContext.suggestions.slice(0, 2).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setShowTeaser(false);
                      setIsOpen(true);
                      window.setTimeout(() => sendMessage(item.text), 120);
                    }}
                    className="group flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-left transition-all hover:border-[#D8B867]/45 hover:bg-white/[0.075]"
                  >
                    <span className="font-display text-[11px] font-bold uppercase tracking-wide text-white">
                      {item.label}
                    </span>
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-[#D8B867] transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowTeaser(false);
                  setIsOpen(true);
                }}
                className="mt-1 w-full py-2 font-body text-[11px] font-semibold text-white/60 transition-colors hover:text-white"
              >
                Type another question →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 flex h-[min(610px,calc(100vh-110px))] w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[22px] border border-[#D8B867]/20 bg-[#071A15] shadow-[0_24px_60px_rgba(0,0,0,0.48)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-[#061510] p-4 sm:p-5">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={NAV_LOGO}
                  alt="Orpheus"
                  className="h-7 w-auto max-w-[118px] shrink-0 object-contain object-left"
                />
                <div className="min-w-0 border-l border-white/10 pl-3">
                  <h4 className="truncate font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    Enquiry Assistant
                  </h4>
                  <p className="mt-0.5 truncate font-body text-[9px] text-white/48">
                    Instant guidance · direct contact details
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-2 rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close enquiry assistant"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="relative flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(216,184,103,1) 1px, transparent 1px), linear-gradient(90deg, rgba(216,184,103,1) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10 rounded-xl border border-[#D8B867]/15 bg-[#D8B867]/[0.06] px-3 py-2.5">
                <p className="font-body text-[10px] leading-4 text-white/55">
                  Viewing: <span className="font-semibold text-[#D8B867]">{pageContext.title}</span>. Suggestions below adapt to this page.
                </p>
              </div>

              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`relative z-10 flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[91%] gap-2 ${item.role === "user" ? "flex-row-reverse" : ""}`}>
                    <span
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                        item.role === "user"
                          ? "border-white/10 bg-white/[0.06] text-white/65"
                          : "border-[#D8B867]/25 bg-[#0B5345] text-[#E8D49C]"
                      }`}
                    >
                      {item.role === "user" ? <UserRound size={13} /> : <Bot size={13} />}
                    </span>
                    <div>
                      <div
                        className={`rounded-2xl px-4 py-3 font-body text-[12px] font-medium leading-[1.65] ${
                          item.role === "user"
                            ? "rounded-tr-sm bg-[#0B5345] text-white"
                            : "rounded-tl-sm border border-white/10 bg-white/[0.055] text-white/85"
                        }`}
                      >
                        {item.text}
                      </div>

                      {item.showContact && (
                        <div className="mt-2.5 overflow-hidden rounded-2xl border border-[#D8B867]/20 bg-[#061510]">
                          <div className="border-b border-white/10 px-4 py-3">
                            <p className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-[#D8B867]">
                              Speak with the advisory team
                            </p>
                          </div>
                          <a
                            href={PHONE_HREF}
                            className="flex items-center gap-3 border-b border-white/10 px-4 py-3 transition-colors hover:bg-white/[0.045]"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5345]/45 text-[#D8B867]">
                              <Phone size={14} />
                            </span>
                            <span>
                              <span className="block font-body text-[9px] uppercase tracking-[0.12em] text-white/40">Call</span>
                              <span className="mt-0.5 block font-body text-[12px] font-semibold text-white">{CONTACT.phoneDisplay}</span>
                            </span>
                          </a>
                          <a
                            href={emailHref}
                            className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.045]"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5345]/45 text-[#D8B867]">
                              <Mail size={14} />
                            </span>
                            <span className="min-w-0">
                              <span className="block font-body text-[9px] uppercase tracking-[0.12em] text-white/40">Email</span>
                              <span className="mt-0.5 block truncate font-body text-[11px] font-semibold text-white">{CONTACT.email}</span>
                            </span>
                          </a>
                          <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 border-t border-[#D8B867]/15 bg-[#D8B867]/[0.07] px-4 py-3 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-[#E7CF92] transition-colors hover:bg-[#D8B867]/[0.13]"
                          >
                            Open contact page <ArrowRight size={11} />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="relative z-10 flex items-start gap-2">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D8B867]/25 bg-[#0B5345] text-[#E8D49C]">
                    <Bot size={13} />
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.055] px-4 py-3">
                    {[0, 1, 2].map((index) => (
                      <motion.span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-white/45"
                        animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.12 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="relative z-10 space-y-2 pt-1">
                  <span className="ml-1 font-body text-[9px] uppercase tracking-[0.13em] text-white/40">
                    Suggested questions
                  </span>
                  {pageContext.suggestions.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => sendMessage(item.text)}
                      className="group flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left transition-all hover:border-[#D8B867]/35 hover:bg-white/[0.06]"
                    >
                      <div className="min-w-0">
                        <span className="block font-display text-[10px] font-bold uppercase tracking-wide text-white">
                          {item.label}
                        </span>
                        <span className="mt-1 line-clamp-1 block font-body text-[10px] text-white/48">
                          {item.text}
                        </span>
                      </div>
                      <ArrowRight size={14} className="shrink-0 text-[#D8B867] transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-white/10 bg-[#061510] p-3.5 sm:p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") sendMessage(message);
                  }}
                  placeholder="Ask about structure, banking, capital..."
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-2.5 font-body text-[11px] text-white outline-none transition-all placeholder:text-white/32 focus:border-[#D8B867]/35"
                />
                <button
                  type="button"
                  disabled={!message.trim() || isTyping}
                  onClick={() => sendMessage(message)}
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#D8B867] text-[#071A15] transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send enquiry question"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="mt-2.5 px-1 font-body text-[9px] leading-4 text-white/32">
                Quick guidance is illustrative. Final advice depends on your circumstances and is provided by the advisory team.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.05 }}
        onClick={() => {
          setIsOpen((previous) => !previous);
          if (!isOpen) setShowTeaser(false);
        }}
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#D8B867]/25 bg-[#0B5345] text-white shadow-[0_10px_34px_rgba(0,0,0,0.34)]"
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? "Close Orpheus enquiry assistant" : "Open Orpheus enquiry assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={23} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
