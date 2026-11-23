import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  CalendarDays,
  Clock3,
  List,
  Linkedin,
  UserRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "@/data/blogPosts";
import { SmartImage } from "@/components/ui/SmartImage";
import { GovernanceArticleExtras } from "@/components/blog/GovernanceArticleExtras";
import NotFound from "./NotFound";
/**
 * ORPHEUS FINANCIAL — Inline Numbered Article Timeline
 * All content is rendered on one page. Jump navigation uses real anchors,
 * there are no accordions, nested scrollbars, or duplicated article text.
 * Only existing blog data is used; nothing is shortened or removed.
 */

const blogImages: Record<string, string> = {
  "private-banking-for-founders-in-uae": "/images/Blog_PB_Hero_Threshold.png",

  "mena-startup-funding-october-2026": "/images/Blog_Hero_TwoNumbers.png",
  "corporate-structuring-and-governance": "/images/Orpheus_Blog_Header_Governance.jpg",
  "bvi-vs-seychelles-which-offshore-jurisdiction-is-best": "/images/bvi.jpg",
  "documents-required-for-business-loan-in-uae": "/images/compliance.jpg",
  "why-your-uae-business-bank-account-application-got-rejected": "/images/bank-account-rejected.jpg",
  "why-dubai-companies-choose-vision-bank": "/images/vision-bank-corporate-accounts.jpg",
  "why-uae-banks-freeze-accounts-and-how-to-avoid-it": "/images/entity.jpg",
  "open-business-account-with-mashreq-bank-dubai": "/images/open-business-account-with-mashreq-bank-dubai.jpg",
  "private-debt-explained": "/images/private-debt-explained.jpg",
  "what-is-offshore-banking-and-how-does-it-work": "/images/what-is-offshore-banking-and-how-does-it-work.jpg",
  "best-financial-advisors-in-dubai": "/images/best-financial-advisors-in-dubai.jpg",
  "offshore-business-in-seychelles": "/images/offshore-business-in-seychelles.jpg",
  "how-to-start-your-business-in-dubai-for-under-aed-6000": "/images/how-to-start-your-business-in-dubai-for-under-aed-6000.jpg",
  "how-to-buy-a-home-in-dubai-or-abu-dhabi": "/images/buy-home-dubai-abu-dhabi.jpg",
};

function articleImage(slug: string) {
  return blogImages[slug] ?? "/images/entity.jpg";
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [lineLength, setLineLength] = useState(0);
  const [authorImageFailed, setAuthorImageFailed] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Reuse the author image already shipped with the Orpheus website.
  const hasRachitPhoto = Boolean(
    post?.author.name?.toLowerCase().includes("rachit")
  );

  useEffect(() => {
    setActiveSection(0);
    setLineProgress(0);
    setLineLength(0);
    setAuthorImageFailed(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  // Keep page metadata/canonical URL correct when navigating between articles.
  useEffect(() => {
    if (!post) return;
    const url = `https://orpheusfinancial.co/blog/${post.slug}`;
    const title = post.seoTitle || `${post.title} | Orpheus Financial`;
    const description = post.seoDescription || post.excerpt;
    const image = `https://orpheusfinancial.co${articleImage(post.slug)}`;
    const oldTitle = document.title;
    const undo: Array<() => void> = [];

    const updateMeta = (attribute: "name" | "property", key: string, value: string) => {
      let target = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      const created = !target;
      if (!target) {
        target = document.createElement("meta");
        target.setAttribute(attribute, key);
        document.head.appendChild(target);
      }
      const element = target;
      const previous = element.getAttribute("content");
      element.setAttribute("content", value);
      undo.push(() => {
        if (created) element.remove();
        else if (previous === null) element.removeAttribute("content");
        else element.setAttribute("content", previous);
      });
    };

    document.title = title;
    updateMeta("name", "description", description);
    updateMeta("property", "og:type", "article");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", url);
    updateMeta("property", "og:image", image);
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const canonicalEl = canonical;
    const oldHref = canonicalEl.getAttribute("href");
    canonicalEl.href = url;
    undo.push(() => {
      if (createdCanonical) canonicalEl.remove();
      else if (oldHref === null) canonicalEl.removeAttribute("href");
      else canonicalEl.setAttribute("href", oldHref);
    });

    return () => {
      document.title = oldTitle;
      undo.reverse().forEach((callback) => callback());
    };
  }, [post]);

  useEffect(() => {
    if (!post || !post.body.length) return;
    const elements = post.body
      .map((_, index) => document.getElementById(`article-section-${index}`))
      .filter((node): node is HTMLElement => Boolean(node));
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const index = Number(visible[0].target.id.replace("article-section-", ""));
          if (Number.isInteger(index)) setActiveSection(index);
        }
      },
      { rootMargin: "-160px 0px -55% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post]);

  // Fill the connecting line as the reader progresses past the numbered markers.
  // This tracks real page scroll, so it works for sections of different lengths.
  useEffect(() => {
    if (!post || post.body.length < 2) return;
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const timeline = timelineRef.current;
      const first = document.getElementById("article-section-0");
      const last = document.getElementById(
        `article-section-${post.body.length - 1}`
      );
      if (!timeline || !first || !last) return;

      const rootTop = timeline.getBoundingClientRect().top + window.scrollY;
      const firstY = first.getBoundingClientRect().top + window.scrollY - rootTop + 26;
      const lastY = last.getBoundingClientRect().top + window.scrollY - rootTop + 26;
      setLineLength(Math.max(0, lastY - firstY));
      const readingLine = window.scrollY + Math.min(window.innerHeight * 0.38, 300);
      const value = ((readingLine - (rootTop + firstY)) / Math.max(1, lastY - firstY)) * 100;
      setLineProgress(Math.min(100, Math.max(0, value)));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [post]);

  if (!post) return <NotFound />;

  const isGovernance = post.slug === "corporate-structuring-and-governance";
  const isFunding = post.slug === "mena-startup-funding-october-2026";

  const jumpTo = (index: number) => {
    setActiveSection(index);
    document.getElementById(`article-section-${index}`)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#FBFAF6] pt-[76px] text-[#173C31]">
      {/* COMPACT EDITORIAL HERO — SAME VISUAL SCALE AS OTHER PAGES */}
      <header className="relative border-b border-[#E0E8DD] bg-[#F5F7F1]">
        <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-6 sm:px-8 lg:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0B5345] hover:text-[#A48645]"
          >
            <ArrowLeft size={17} /> Back to all articles
          </Link>
          <div className="mt-5 grid items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-9">
            <div className="min-w-0">
              <span className="inline-flex items-center rounded-full border border-[#DECBA3] bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.12em] text-[#A48645]">
                {post.category}
              </span>
              <h1 className="mt-3 max-w-[630px] break-words font-serif text-[31px] leading-[1.14] tracking-[-.025em] text-[#123C30] sm:text-[38px] lg:text-[40px] xl:text-[43px]">
                {post.title}
              </h1>
              <p className="mt-3 max-w-[600px] text-[15px] leading-7 text-[#63776A] sm:text-[16px]">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#63766A]">
                <span className="inline-flex items-center gap-2 font-semibold text-[#173C31]">
                  {hasRachitPhoto && !authorImageFailed ? (
                    <img
                      src="/images/rachit.jpeg"
                      alt=""
                      className="h-8 w-8 rounded-full border border-[#D8B867]/50 bg-[#E8EFE7] object-cover"
                      onError={() => setAuthorImageFailed(true)}
                    />
                  ) : (
                    <UserRound size={16} className="text-[#A48645]" />
                  )}
                  {post.author.name}
                </span>
                <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} /> {post.date}</span>
                {post.readTime && (
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={15} /> {post.readTime}</span>
                )}
              </div>
            </div>
            <div className="min-w-0 overflow-hidden rounded-2xl border border-[#DCE6DC] bg-[#071C18] shadow-[0_10px_28px_rgba(8,45,37,.09)]">
              <SmartImage
                src={articleImage(post.slug)}
                alt={post.title}
                className={`h-[225px] w-full sm:h-[285px] lg:h-[300px] ${isFunding ? "bg-[#0B0B0B] object-contain" : "object-cover"}`}
              />
            </div>
          </div>
        </div>
      </header>

      {/* COMPACT JUMP NAVIGATION — NO SIDEBAR OR NESTED SCROLL */}
      {post.body.length > 0 && (
        <div className="mx-auto w-full max-w-[1200px] px-5 pt-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 rounded-xl border border-[#DFE7DD] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF2E9] text-[#0B5345]">
                <List size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-[#123C30]">In this article</p>
                <p className="text-[13px] text-[#718174]">{post.body.length} connected sections · All content below</p>
              </div>
            </div>
            <label className="flex w-full items-center gap-2 sm:w-auto">
              <span className="shrink-0 text-[14px] font-medium text-[#52665A]">Jump to</span>
              <select
                aria-label="Jump to an article section"
                value={activeSection}
                onChange={(event) => jumpTo(Number(event.target.value))}
                className="min-w-0 flex-1 rounded-lg border border-[#DCE6DC] bg-[#FBFCFA] px-3 py-2.5 text-[14px] font-medium text-[#0B5345] outline-none focus:border-[#0B5345] focus:ring-2 focus:ring-[#0B5345]/10 sm:w-[340px] sm:flex-none"
              >
                {post.body.map((section, index) => (
                  <option key={`${index}-${section.heading}`} value={index}>
                    {String(index + 1).padStart(2, "0")} — {section.heading}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      {/* FULL-WIDTH ARTICLE WITH A SINGLE CONNECTED NUMBER SPINE */}
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-12 pt-6 sm:px-8 lg:px-10">
        <article className="min-w-0 overflow-hidden rounded-2xl border border-[#E0E8DD] bg-white shadow-[0_8px_30px_rgba(8,45,37,.035)]">
          <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-11">
            {post.intro && post.intro.length > 0 && (
              <div className="mb-8 rounded-xl border border-[#E1E8DD] border-l-[4px] border-l-[#C6A357] bg-[#F7F9F5] px-5 py-5 sm:px-7">
                <h2 className="mb-3 inline-flex items-center gap-2 text-[18px] font-bold text-[#0B5345]">
                  <BookOpen size={20} aria-hidden="true" /> Introduction
                </h2>
                <div className="space-y-3">
                  {post.intro.map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line break-words text-[17px] leading-[1.85] text-[#52665A] sm:text-[18px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* One continuous vertical line connects all numbered steps. */}
            <div ref={timelineRef} className="relative">
              {post.body.length > 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[22px] top-[25px] z-0 w-[3px] overflow-hidden rounded-full bg-[#D6E5D8] sm:left-[27px]"
                  style={{ height: `${lineLength}px` }}
                >
                  <div
                    className="w-full rounded-full bg-gradient-to-b from-[#C7A358] via-[#0E8065] to-[#0B5345] shadow-[0_0_8px_rgba(11,83,69,.25)] transition-[height] duration-150 ease-out motion-reduce:transition-none"
                    style={{ height: `${lineProgress}%` }}
                  />
                </div>
              )}

              {post.body.map((section, index) => (
                <section
                  key={`${index}-${section.heading}`}
                  id={`article-section-${index}`}
                  aria-labelledby={`article-heading-${index}`}
                  className="relative z-10 grid min-w-0 scroll-mt-[110px] grid-cols-[46px_minmax(0,1fr)] gap-x-3 pb-8 last:pb-0 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-x-5 sm:pb-10"
                >
                  {/* LEFT NUMBER: CONNECTED TO ALL OTHER SECTION NUMBERS */}
                  <div className="flex items-start justify-center">
                    <span
                      className={`relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-white text-[14px] font-bold shadow-[0_1px_5px_rgba(10,50,35,.12)] transition-colors sm:h-[52px] sm:w-[52px] sm:text-[16px] ${
                        activeSection === index
                          ? "bg-[#0B5345] text-white ring-2 ring-[#B8D4C1] shadow-[0_0_0_5px_rgba(11,83,69,.10)]"
                          : index < activeSection
                            ? "bg-[#C7A358] text-[#092C24] ring-1 ring-[#D8B867]"
                            : "bg-[#EAF2E9] text-[#0B5345] ring-1 ring-[#D6E5D8]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* MAIN ARTICLE TEXT USES THE ENTIRE REMAINING WIDTH */}
                  <div className="min-w-0 pb-7 sm:pb-9">
                    <h2
                      id={`article-heading-${index}`}
                      className="mb-4 font-serif text-[25px] leading-[1.23] tracking-tight text-[#123C30] sm:text-[30px] lg:text-[33px]"
                    >
                      {section.heading}
                    </h2>

                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <div key={paragraphIndex} className="min-w-0">
                          <p className="whitespace-pre-line break-words text-[17px] leading-[1.9] text-[#52665B] sm:text-[18px]">
                            {paragraph}
                          </p>

                          {section.tables
                            ?.filter((table) => table.afterParagraph === paragraphIndex)
                            .map((table, tableIndex) => (
                              <figure key={`table-${paragraphIndex}-${tableIndex}`} className="my-5 min-w-0">
                                <div
                                  role="region"
                                  aria-label={table.caption || "Article data table"}
                                  tabIndex={0}
                                  className="max-w-full overflow-x-auto rounded-xl border border-[#DCE5DA]"
                                >
                                  <table className="w-full min-w-[390px] border-collapse text-left text-[14px] sm:text-[15px]">
                                    <thead className="bg-[#0B5345] text-white">
                                      <tr>
                                        {table.headers.map((header, i) => (
                                          <th key={`${header}-${i}`} scope="col" className="px-4 py-3 font-semibold">{header}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {table.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="border-t border-[#E5EAE2] even:bg-[#F7F9F5]">
                                          {row.map((cell, cellIndex) =>
                                            cellIndex === 0 ? (
                                              <th key={cellIndex} scope="row" className="px-4 py-3 font-semibold text-[#123C30]">{cell}</th>
                                            ) : (
                                              <td key={cellIndex} className="px-4 py-3 text-[#53665A]">{cell}</td>
                                            )
                                          )}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                                {table.caption && <figcaption className="mt-2 text-[14px] text-[#718073]">{table.caption}</figcaption>}
                              </figure>
                            ))}

                          {section.figures
                            ?.filter((figure) => figure.afterParagraph === paragraphIndex)
                            .map((figure, figureIndex) => (
                              <figure key={`figure-${paragraphIndex}-${figureIndex}`} className="my-5 min-w-0">
                                <img
                                  src={figure.src}
                                  alt={figure.alt}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-auto max-h-[580px] w-full rounded-xl bg-[#0B0B0B] object-contain"
                                />
                                {figure.caption && (
                                  <figcaption className="mt-2 text-[14px] leading-6 text-[#718073]">{figure.caption}</figcaption>
                                )}
                              </figure>
                            ))}
                        </div>
                      ))}
                    </div>

                    {isGovernance && (
                      <div className="mt-5 min-w-0">
                        <GovernanceArticleExtras heading={section.heading} />
                      </div>
                    )}

                    {index < post.body.length - 1 && (
                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EBF0E9] pt-4">
                        <span className="text-[13px] text-[#8A988D]">Section {index + 1} of {post.body.length}</span>
                        <button
                          type="button"
                          onClick={() => jumpTo(index + 1)}
                          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0B6450] hover:text-[#A48645]"
                        >
                          Next section <ArrowRight size={17} />
                        </button>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E1E8DD] bg-[#F6F8F3] px-5 py-5 sm:px-8 lg:px-11">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              {hasRachitPhoto && !authorImageFailed ? (
                <img
                  src="/images/rachit.jpeg"
                  alt={post.author.name}
                  loading="lazy"
                  onError={() => setAuthorImageFailed(true)}
                  className="h-[100px] w-[100px] shrink-0 rounded-xl border-2 border-[#D8B867] bg-[#E8EFE7] object-cover object-center shadow-[0_4px_14px_rgba(8,45,37,0.10)] sm:h-[110px] sm:w-[110px]"
                />
              ) : (
                <span className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-xl border-2 border-[#D8B867] bg-[#0B5345] text-[24px] font-bold text-[#E9D39A] sm:h-[110px] sm:w-[110px]">
                  {post.author.initials}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-[16px] font-bold text-[#173C31]">{post.author.name}</p>
                <p className="mt-0.5 text-[13px] text-[#6B7B6C]">{post.author.role}</p>

                {/* LinkedIn appears directly below the author's designation. */}
                {hasRachitPhoto && (
                  <a
                    href="https://ae.linkedin.com/in/rachit-yadav-96a3951b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Rachit Yadav's LinkedIn profile"
                    title="Rachit Yadav on LinkedIn"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#C9DCE8] bg-[#EFF6FB] px-3 py-1.5 text-[13px] font-semibold text-[#0A66C2] transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
                  >
                    <Linkedin size={16} aria-hidden="true" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            <Link to="/contact" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#0B5345] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#156B56]">
              Speak with Orpheus <ArrowRight size={16} />
            </Link>
          </footer>
        </article>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0B6450] hover:text-[#A48645]">
            <ArrowLeft size={17} /> All insights
          </Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-[#DDE6DB] bg-white px-4 py-2 text-[14px] font-semibold text-[#0B6450] hover:bg-[#F1F7F1]"
          >
            <ArrowUp size={17} /> Back to top
          </button>
        </div>
      </div>
    </main>
  );
}