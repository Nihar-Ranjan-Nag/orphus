import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronDown, Clock3, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { GovernanceArticleExtras } from "@/components/blog/GovernanceArticleExtras";

type Props = { post: BlogPost };

const chapters = [
  { title: "The story & the essentials", subtitle: "Why even well-built companies drift", from: 0, to: 2 },
  { title: "Structuring vs. governance", subtitle: "How they work together", from: 2, to: 5 },
  { title: "Where structures break", subtitle: "Filing years, bank reviews and life changes", from: 5, to: 9 },
  { title: "Build it right. Run it right.", subtitle: "Group structure, UAE calendar and cross-border oversight", from: 9, to: 12 },
  { title: "Family governance & your next steps", subtitle: "Succession, Karim’s outcome and the self-check", from: 12, to: 16 },
];

export default function GovernanceCompactPage({ post }: Props) {
  const [openChapter, setOpenChapter] = useState<number | null>(0);
  const summary = post.body.find((section) => section.heading === "In short");
  const disclaimer = post.body.find((section) => section.heading === "Disclaimer");
  const faqs = post.body.find((section) => section.heading === "Frequently asked questions");
  const help = post.body.find((section) => section.heading === "How Orpheus helps");

  return (
    <main className="min-h-screen bg-[#FBFAF6] pt-[80px] text-[#17342B]">
      <section className="border-b border-[#E3E7DF] bg-[#F3F4ED]">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-6 sm:px-8 lg:pb-11">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#17644F] hover:text-[#B09049]">
            <ArrowLeft size={15}/> Back to Insights
          </Link>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <span className="text-xs font-bold uppercase tracking-[.18em] text-[#0D6651]">{post.category}</span>
              <h1 className="mt-3 max-w-2xl font-serif text-[clamp(2.15rem,4vw,3.75rem)] leading-[1.1] tracking-tight text-[#15392F]">Built right.<br/><span className="text-[#B28D42]">Run right.</span></h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#5D6B62]">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#66746A]">
                <span className="inline-flex items-center gap-2"><CalendarDays size={15}/>{post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={15}/>{post.readTime}</span>
                <span>By {post.author.name}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#D6DCD5] bg-[#14221C] shadow-sm">
              <img src="/images/Orpheus_Blog_Header_Governance.jpg" alt="Architectural tower model in gold lighting representing corporate structuring and governance" className="aspect-[16/9] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-9 sm:px-8 lg:py-12">
        {summary && (
          <section aria-label="Article highlights" className="rounded-2xl border border-[#D9E3DB] bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-serif text-2xl text-[#173C31]">The essentials</h2>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#9B8247]">At a glance</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {summary.paragraphs.map((line, index) => (
                <div key={index} className="flex gap-3 text-sm leading-6 text-[#53655B]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#0D7358]" size={17}/><p>{line}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_245px] lg:gap-10">
          <div className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#9F8549]">Explore the article</p>
                <h2 className="mt-2 font-serif text-2xl text-[#15392F] sm:text-3xl">Five focused chapters</h2>
              </div>
              <span className="hidden text-xs text-[#78867A] sm:block">Select a chapter to read</span>
            </div>
            <div className="space-y-3">
              {chapters.map((chapter, index) => {
                const expanded = openChapter === index;
                return (
                  <section key={chapter.title} className="overflow-hidden rounded-2xl border border-[#DDE5DC] bg-white shadow-[0_4px_22px_rgba(15,50,36,.035)]">
                    <button type="button" className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-[#F6F8F3] sm:px-6" aria-expanded={expanded} onClick={() => setOpenChapter(expanded ? null : index)}>
                      <span className="shrink-0 font-serif text-xl text-[#B49552]">0{index + 1}</span>
                      <span className="min-w-0 flex-1"><span className="block text-base font-semibold text-[#173C31]">{chapter.title}</span><span className="mt-1 block text-xs text-[#768277]">{chapter.subtitle}</span></span>
                      <ChevronDown size={19} className={`shrink-0 text-[#48685A] transition-transform ${expanded ? "rotate-180" : ""}`}/>
                    </button>
                    {expanded && (
                      <div className="border-t border-[#EDF0EA] px-5 pb-7 pt-5 sm:px-7">
                        {post.body.slice(chapter.from, chapter.to).filter(s => s.heading !== "In short").map((section) => (
                          <article key={section.heading} className="mb-7 last:mb-0">
                            <h3 className="mb-3 font-serif text-xl leading-snug text-[#17392D]">{section.heading}</h3>
                            {section.paragraphs.map((paragraph, i) => <p key={i} className="mb-3 text-[14px] leading-[1.85] text-[#55665D] last:mb-0">{paragraph}</p>)}
                            <GovernanceArticleExtras heading={section.heading}/>
                          </article>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
            {faqs && <section className="mt-9 rounded-2xl border border-[#DDE5DC] bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl text-[#173C31]">Frequently asked questions</h2><p className="mt-2 text-sm text-[#6F7E73]">Answers to common structuring and governance questions.</p><GovernanceArticleExtras heading={faqs.heading}/></section>}
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-[#103C30] p-6 text-white">
              <ShieldCheck size={25} className="text-[#D4B767]"/>
              <h2 className="mt-4 font-serif text-xl">One owner.<br/>One calendar.</h2>
              <p className="mt-3 text-sm leading-6 text-[#D3E4D8]">Corporate governance should stay aligned with the structure it supports.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D5B76B] px-5 py-3 text-sm font-semibold text-[#18392B] hover:bg-[#E6C983]">Request a private review <ArrowRight size={16}/></Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#748077]">Information reflects the supplied October 2026 article and may require jurisdiction-specific verification.</p>
          </aside>
        </div>

        {help && <section className="mt-11 rounded-2xl bg-[#EDF3EC] px-6 py-7 sm:px-9"><p className="text-xs font-bold uppercase tracking-[.15em] text-[#8C7443]">How Orpheus helps</p><h2 className="mt-2 font-serif text-2xl text-[#123E31]">Structuring that stays credible.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-[#52665B]">{help.paragraphs[0]}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#0B6450] hover:underline">Discuss your structure <ArrowRight size={17}/></Link></section>}
        {disclaimer && <p className="mt-8 border-t border-[#E3E8DF] pt-5 text-xs leading-6 text-[#718077]"><strong>Disclaimer:</strong> {disclaimer.paragraphs.join(" ")}</p>}
      </div>
    </main>
  );
}