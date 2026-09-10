import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Mail,
  Quote,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  gsap,
  ScrollTrigger,
  setupGsap,
} from "@/lib/gsapSetup";

import { getPostBySlug } from "@/data/blogPosts";
import { insightCards } from "@/data/siteArchitecture";
import { SmartImage } from "@/components/ui/SmartImage";
import NotFound from "./NotFound";

/* =========================================================
   HELPERS
========================================================= */

const fallbackImages = [
  "/images/entity.jpg",
  "/images/compliance.jpg",
  "/images/banking.jpg",
  "/images/credit.jpg",
];

function getArticleImage(slug: string) {
  return (
    insightCards.find((item) => item.slug === slug)?.image ??
    fallbackImages[0]
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = slug
    ? getPostBySlug(slug)
    : undefined;

  const progressRef =
    useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] =
    useState(0);

  const sectionRefs =
    useRef<(HTMLElement | null)[]>([]);

  /* =====================================================
      READING PROGRESS
  ===================================================== */

  useEffect(() => {
    setupGsap();

    if (!progressRef.current) return;

    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left",
    });

    const tween = gsap.to(
      progressRef.current,
      {
        scaleX: 1,
        ease: "none",

        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [slug]);

  /* =====================================================
      ACTIVE ARTICLE SECTION
  ===================================================== */

  useEffect(() => {
    if (!post) return;

    const triggers: ScrollTrigger[] = [];

    sectionRefs.current.forEach(
      (element, index) => {
        if (!element) return;

        const trigger =
          ScrollTrigger.create({
            trigger: element,
            start: "top 30%",
            end: "bottom 30%",

            onToggle: (self) => {
              if (self.isActive) {
                setActiveIdx(index);
              }
            },
          });

        triggers.push(trigger);
      }
    );

    return () =>
      triggers.forEach((trigger) =>
        trigger.kill()
      );
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  const heroImage =
    getArticleImage(post.slug);

  return (
    <main
      className="
        bg-[#FFFEFA]
        pt-[76px]
        text-[#0A1714]
      "
    >
      {/* =====================================================
          READING PROGRESS
      ===================================================== */}

      <div
        ref={progressRef}
        className="
          fixed
          left-0
          right-0
          top-[76px]
          z-[999]
          h-[3px]
          origin-left
          bg-[#D8B867]
        "
      />

      {/* =====================================================
          ARTICLE HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#DDE2DD]
          bg-[#F7F4EC]
          py-14

          md:py-16
        "
      >
        <div className="absolute inset-0 grid-texture opacity-40" />

        <div
          className="
            section-shell
            relative
          "
        >
          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-bold
              uppercase
              tracking-[.14em]
              text-[#0B5345]
              transition
              hover:text-[#A7802D]
            "
          >
            <ArrowLeft size={13} />
            Back to Insights
          </Link>

          <div
            className="
              mt-8
              grid
              gap-10

              lg:grid-cols-[1.05fr_.95fr]
              lg:items-center
            "
          >
            {/* CONTENT */}
            <div>
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[.14em]
                "
              >
                <span className="text-[#0B5345]">
                  {post.category}
                </span>

                <span className="text-[#A9B1AE]">
                  •
                </span>

                <span className="text-[#788580]">
                  {post.date}
                </span>

                {post.readTime && (
                  <>
                    <span className="text-[#A9B1AE]">
                      •
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[#788580]
                      "
                    >
                      <Clock3 size={11} />
                      {post.readTime}
                    </span>
                  </>
                )}
              </div>

              <h1
                className="
                  mt-5
                  max-w-[800px]
                  font-serif
                  text-[clamp(42px,5.6vw,72px)]
                  font-normal
                  leading-[.99]
                  tracking-[-.045em]
                "
              >
                {post.title}
              </h1>

              <p
                className="
                  mt-6
                  max-w-[670px]
                  text-[18px]
                  leading-8
                  text-[#5F6D68]
                "
              >
                {post.excerpt}
              </p>

              {/* AUTHOR */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#D9DED9]
                  pt-6
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B5345]
                    text-[12px]
                    font-bold
                    text-white
                  "
                >
                  {post.author.initials}
                </div>

                <div>
                  <p
                    className="
                      text-[15px]
                      font-semibold
                    "
                  >
                    {post.author.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      uppercase
                      tracking-[.13em]
                      text-[#7B8883]
                    "
                  >
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>

            {/* ARTICLE IMAGE */}
            <div
              className="
                relative
                h-[340px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#D9DED9]
                bg-[#E5E8E3]

                md:h-[390px]
              "
            >
              <SmartImage
                src={heroImage}
                alt={post.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(
                    180deg,
                    transparent_58%,
                    rgba(4,24,19,.68)_100%
                  )]
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  bg-[#07251E]/90
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.14em]
                  text-[#E4C77D]
                "
              >
                Orpheus Financial Insight
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE BODY
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div
          className="
            section-shell
            grid
            gap-12

            lg:grid-cols-[240px_minmax(0,760px)]
            lg:justify-center
          "
        >
          {/* =================================================
              TABLE OF CONTENTS
          ================================================= */}

          <aside className="hidden lg:block">
            <div className="sticky top-[120px]">
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.17em]
                  text-[#A7802D]
                "
              >
                IN THIS ARTICLE
              </p>

              <ul
                className="
                  mt-5
                  space-y-1
                  border-l
                  border-[#DDE2DD]
                "
              >
                {post.body.map(
                  (section, index) => (
                    <li key={index}>
                      <a
                        href={`#section-${index}`}
                        className={`
                          block
                          -ml-px
                          border-l-2
                          py-2.5
                          pl-4

                          text-[13px]
                          leading-5

                          transition-all

                          ${
                            activeIdx === index
                              ? "border-[#0B5345] font-semibold text-[#0B5345]"
                              : "border-transparent text-[#6F7C77] hover:text-[#0B5345]"
                          }
                        `}
                      >
                        {section.heading}
                      </a>
                    </li>
                  )
                )}
              </ul>

              {/* ARTICLE SHARE / CTA */}
              <div
                className="
                  group/card
                  relative
                  mt-8
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#DDE2DD]
                  bg-[#F8F6F0]
                  p-5

                  transition-all
                  duration-300

                  md:hover:-translate-y-1
                  md:hover:border-[#0B5345]/25
                  md:hover:shadow-[0_14px_32px_rgba(7,40,33,.07)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0

                    hidden
                    h-[3px]
                    w-full

                    origin-left
                    scale-x-0

                    bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                    transition-transform
                    duration-300

                    md:block
                    md:group-hover/card:scale-x-100
                  "
                />
                <Mail
                  size={17}
                  className="text-[#0B5345]"
                />

                <p
                  className="
                    mt-4
                    font-serif
                    text-[18px]
                    leading-[1.12]
                  "
                >
                  Need advice on this topic?
                </p>

                <Link
                  to="/contact"
                  className="micro-link mt-4"
                >
                  Speak with Orpheus
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </aside>

          {/* =================================================
              BODY
          ================================================= */}

          <article className="w-full max-w-[760px]">
            {/* ARTICLE INTRO */}
            <div
              className="
                group/card
                relative
                mb-12
                overflow-hidden
                rounded-[22px]
                border
                border-[#DCE2DC]
                bg-[#F8F6F0]
                p-6

                transition-all
                duration-300

                md:p-7
                md:hover:-translate-y-1
                md:hover:border-[#0B5345]/25
                md:hover:shadow-[0_14px_32px_rgba(7,40,33,.06)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0

                  hidden
                  h-[3px]
                  w-full

                  origin-left
                  scale-x-0

                  bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                  transition-transform
                  duration-300

                  md:block
                  md:group-hover/card:scale-x-100
                "
              />
              <div className="flex gap-4">
                <Quote
                  size={22}
                  className="
                    mt-1
                    shrink-0
                    text-[#D8B867]
                  "
                />

                <p
                  className="
                    font-serif
                    text-[21px]
                    font-normal
                    leading-[1.35]
                    text-[#24342F]
                  "
                >
                  Good structuring starts with the commercial objective,
                  not the jurisdiction, bank or product.
                </p>
              </div>
            </div>

            {post.body.map(
              (section, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  ref={(element) => {
                    sectionRefs.current[index] =
                      element;
                  }}
                  className="
                    scroll-mt-[120px]
                    mb-14
                  "
                >
                  {/* SECTION NUMBER */}
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.16em]
                      text-[#A7802D]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2
                    className="
                      mt-3
                      max-w-[690px]
                      font-serif
                      text-[clamp(30px,3.5vw,42px)]
                      font-normal
                      leading-[1.05]
                      tracking-[-.03em]
                    "
                  >
                    {section.heading}
                  </h2>

                  <div
                    className="
                      mt-6
                      space-y-5
                    "
                  >
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="
                            text-[17px]
                            leading-[1.85]
                            text-[#4F5F59]

                            md:text-[18px]
                          "
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* SMALL DIVIDER */}
                  {index <
                    post.body.length - 1 && (
                    <div
                      className="
                        mt-12
                        h-px
                        bg-[#E2E6E2]
                      "
                    />
                  )}
                </section>
              )
            )}

            {/* AUTHOR END CARD */}
            <div
              className="
                mt-16
                rounded-[22px]
                bg-[#07251E]
                p-7
                text-white
              "
            >
              <p className="section-kicker-gold">
                ABOUT THE AUTHOR
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B5345]
                    text-[13px]
                    font-bold
                  "
                >
                  {post.author.initials}
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[23px]
                      font-normal
                    "
                  >
                    {post.author.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      uppercase
                      tracking-[.12em]
                      text-white/50
                    "
                  >
                    {post.author.role}
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-[560px]
                      text-[15px]
                      leading-6
                      text-white/62
                    "
                  >
                    Orpheus Financial provides cross-border advisory
                    across corporate structuring, banking, capital
                    solutions, private wealth and governance.
                  </p>
                </div>
              </div>
            </div>

            {/* BACK LINK */}
            <div
              className="
                mt-10
                border-t
                border-[#DDE2DD]
                pt-8
              "
            >
              <Link
                to="/blog"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.12em]
                  text-[#0B5345]
                "
              >
                <ArrowLeft size={12} />
                All insights
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          RELATED CTA
      ===================================================== */}

      <section className="bg-[#F7F4EC] py-14">
        <div
          className="
            section-shell
            flex
            flex-col
            justify-between
            gap-6

            md:flex-row
            md:items-center
          "
        >
          <div>
            <p className="section-kicker">
              CONTINUE THE CONVERSATION
            </p>

            <p
              className="
                mt-3
                max-w-[620px]
                font-serif
                text-[28px]
                font-normal
                leading-[1.08]
              "
            >
              Need to apply this thinking to a real structure,
              transaction or banking requirement?
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              min-h-[44px]
              items-center
              gap-2
              rounded-md
              bg-[#0B5345]
              px-5
              text-[12px]
              font-bold
              uppercase
              tracking-[.09em]
              text-white
            "
          >
            Speak With Our Team
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </main>
  );
}