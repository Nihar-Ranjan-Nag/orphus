import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Mail,
  Quote,
  Linkedin,
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
import { SmartImage } from "@/components/ui/SmartImage";
import NotFound from "./NotFound";

/* =========================================================
   HELPERS
   Each blog slug maps to its own local image.
========================================================= */

const blogImages: Record<string, string> = {
  "bvi-vs-seychelles-which-offshore-jurisdiction-is-best":
    "/images/bvi.jpg",

  "documents-required-for-business-loan-in-uae":
    "/images/compliance.jpg",

  "why-your-uae-business-bank-account-application-got-rejected":
    "/images/bank-account-rejected.jpg",

  "why-dubai-companies-choose-vision-bank":
    "/images/vision-bank-corporate-accounts.jpg",

  "why-uae-banks-freeze-accounts-and-how-to-avoid-it":
    "/images/entity.jpg",

  "open-business-account-with-mashreq-bank-dubai":
    "/images/open-business-account-with-mashreq-bank-dubai.jpg",

  "private-debt-explained":
    "/images/private-debt-explained.jpg",

  "what-is-offshore-banking-and-how-does-it-work":
    "/images/what-is-offshore-banking-and-how-does-it-work.jpg",

  "best-financial-advisors-in-dubai":
    "/images/best-financial-advisors-in-dubai.jpg",

  "offshore-business-in-seychelles":
    "/images/offshore-business-in-seychelles.jpg",

  "how-to-start-your-business-in-dubai-for-under-aed-6000":
    "/images/how-to-start-your-business-in-dubai-for-under-aed-6000.jpg",

  "how-to-buy-a-home-in-dubai-or-abu-dhabi":
    "/images/buy-home-dubai-abu-dhabi.jpg",
};

function getArticleImage(slug: string) {
  return blogImages[slug] ?? "/images/entity.jpg";
}

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = slug
    ? getPostBySlug(slug)
    : undefined;

  const progressRef =
    useRef<HTMLDivElement>(null);

  const articleBodyRef =
    useRef<HTMLElement>(null);

  const sidebarProgressRef =
    useRef<HTMLSpanElement>(null);

  const [activeIdx, setActiveIdx] =
    useState(0);

  const sectionRefs =
    useRef<(HTMLElement | null)[]>([]);

  /* =====================================================
      TOP READING PROGRESS
  ===================================================== */

  useEffect(() => {
    setupGsap();

    if (!progressRef.current) return;

    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const tween = gsap.to(
      progressRef.current,
      {
        scaleX: 1,
        ease: "none",

        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
          invalidateOnRefresh: true,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [slug]);

  /* =====================================================
      SIDEBAR VERTICAL PROGRESS
  ===================================================== */

  useEffect(() => {
    setupGsap();

    if (
      !sidebarProgressRef.current ||
      !articleBodyRef.current
    ) {
      return;
    }

    gsap.set(sidebarProgressRef.current, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    const tween = gsap.to(
      sidebarProgressRef.current,
      {
        scaleY: 1,
        ease: "none",

        scrollTrigger: {
          trigger: articleBodyRef.current,
          start: "top 40%",
          end: "bottom 70%",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [slug, post]);

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
            start: "top 32%",
            end: "bottom 32%",

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
        w-full
        overflow-x-hidden
        bg-[#FFFEFA]
        pt-[72px]
        text-[#0A1714]

        lg:pt-[76px]
      "
    >
      {/* =====================================================
          READING PROGRESS
      ===================================================== */}

      <div
        className="
          fixed
          left-0
          right-0
          top-[72px]
          z-[999]

          h-[4px]
          overflow-visible

          bg-[#E8E3D7]/70

          lg:top-[76px]
        "
      >
        <div
          ref={progressRef}
          className="
            relative

            h-full
            w-full

            origin-left

            bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_45%,#D8B867_75%,#E9D59C_100%)]

            shadow-[0_0_14px_rgba(216,184,103,.45)]
          "
        >
          <span
            aria-hidden="true"
            className="
              absolute
              right-0
              top-1/2

              h-[10px]
              w-[10px]

              -translate-y-1/2
              translate-x-1/2

              rounded-full

              bg-[#D8B867]

              shadow-[0_0_0_3px_rgba(216,184,103,.18),0_0_16px_rgba(216,184,103,.75)]
            "
          />
        </div>
      </div>

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

          pt-3
          pb-7

          sm:pt-4
          sm:pb-8

          md:pt-4
          md:pb-9

          lg:pt-5
          lg:pb-10

          xl:pt-5
          xl:pb-11
        "
      >
        <div
          className="
            absolute
            inset-0

            grid-texture
            opacity-40
          "
        />

        <div
          className="
            section-shell

            relative

            w-full
            min-w-0
          "
        >
          {/* BACK LINK */}

          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-2

              text-[10px]
              font-bold
              uppercase
              tracking-[.14em]

              text-[#0B5345]

              transition

              hover:text-[#A7802D]

              sm:text-[11px]
            "
          >
            <ArrowLeft size={13} />

            Back to Insights
          </Link>

          {/* =================================================
              HERO GRID
          ================================================= */}

          <div
            className="
              mt-4

              grid
              min-w-0
              grid-cols-1

              gap-7

              sm:mt-5
              sm:gap-8

              lg:mt-6
              lg:grid-cols-[minmax(0,0.92fr)_minmax(430px,1.08fr)]
              lg:items-center
              lg:gap-12

              xl:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)]
              xl:gap-14
            "
          >
            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="min-w-0">

              {/* META */}

              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  items-center

                  gap-x-2
                  gap-y-1.5

                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.13em]

                  sm:text-[10px]

                  lg:text-[11px]
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

              {/* TITLE */}

              <h1
                className="
                  mt-4

                  w-full
                  min-w-0
                  max-w-[760px]

                  break-words

                  font-serif

                  text-[34px]
                  font-normal

                  leading-[1.01]

                  tracking-[-.038em]

                  sm:text-[42px]

                  md:text-[48px]

                  lg:text-[52px]
                  lg:leading-[.99]

                  xl:text-[60px]
                "
              >
                {post.title}
              </h1>

              {/* EXCERPT */}

              <p
                className="
                  mt-5

                  w-full
                  min-w-0
                  max-w-[650px]

                  break-words

                  text-[15px]

                  leading-[1.7]

                  text-[#5F6D68]

                  sm:text-[16px]
                  sm:leading-7

                  lg:text-[17px]
                "
              >
                {post.excerpt}
              </p>

              {/* AUTHOR */}

              <div
                className="
                  mt-5

                  flex
                  items-center
                  gap-3

                  border-t
                  border-[#D9DED9]

                  pt-4

                  sm:mt-6
                  sm:pt-5
                "
              >
                <div
                  className="
                    flex

                    h-9
                    w-9
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B5345]

                    text-[11px]
                    font-bold
                    text-white

                    sm:h-10
                    sm:w-10
                    sm:text-[12px]
                  "
                >
                  {post.author.initials}
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      truncate

                      text-[14px]
                      font-semibold

                      sm:text-[15px]
                    "
                  >
                    {post.author.name}
                  </p>

                  <p
                    className="
                      mt-0.5

                      text-[9px]
                      uppercase
                      tracking-[.12em]

                      text-[#7B8883]

                      sm:text-[10px]
                    "
                  >
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                HERO IMAGE
            ================================================= */}

            <div
              className="
                relative

                w-full
                min-w-0

                overflow-hidden

                rounded-[18px]

                border
                border-[#D9DED9]

                bg-[#E5E8E3]

                aspect-[16/10]

                sm:aspect-[16/9]
                sm:rounded-[22px]

                lg:h-[430px]
                lg:aspect-auto
                lg:rounded-[24px]

                xl:h-[470px]
              "
            >
              <SmartImage
                src={heroImage}
                alt={post.title}
                className="
                  h-full
                  w-full

                  object-cover
                  object-center
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-[linear-gradient(
                    180deg,
                    transparent_52%,
                    rgba(4,24,19,.70)_100%
                  )]
                "
              />

              <div
                className="
                  absolute

                  bottom-3
                  left-3

                  max-w-[calc(100%-24px)]

                  rounded-full

                  bg-[#07251E]/90

                  px-3
                  py-1.5

                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[.12em]

                  text-[#E4C77D]

                  sm:bottom-4
                  sm:left-4
                  sm:text-[9px]

                  lg:bottom-5
                  lg:left-5
                  lg:text-[10px]
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

      <section
        ref={articleBodyRef}
        className="
          w-full
          overflow-hidden

          bg-white

          py-9

          sm:py-12

          md:py-16

          lg:py-20
        "
      >
        <div
          className="
            section-shell

            grid

            w-full
            min-w-0

            grid-cols-1

            gap-8

            lg:grid-cols-[300px_minmax(0,760px)]
            lg:justify-center
            lg:gap-14
          "
        >
          {/* =================================================
              DESKTOP TABLE OF CONTENTS
          ================================================= */}

          <aside
            className="
              relative
              hidden

              lg:block
            "
          >
            {/* FULL HEIGHT RAIL */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute

                bottom-0
                right-0
                top-0

                w-px

                bg-[#E2E6E2]
              "
            />

            {/* ANIMATED PROGRESS LINE */}

            <span
              ref={sidebarProgressRef}
              aria-hidden="true"
              className="
                pointer-events-none

                absolute

                right-0
                top-0

                z-10

                h-full
                w-[3px]

                origin-top

                rounded-full

                bg-[linear-gradient(180deg,#D8B867_0%,#69B7A1_45%,#0B5345_100%)]

                shadow-[0_0_10px_rgba(105,183,161,.25)]
              "
            />

            <div
              className="
                sticky
                top-[118px]

                mr-7

                overflow-hidden

                rounded-[22px]

                border
                border-[#DDE2DD]

                bg-[#FBFAF6]

                p-6

                shadow-[0_12px_35px_rgba(7,40,33,.035)]
              "
            >
              <p
                className="
                  text-[12px]
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

                          py-3
                          pl-4
                          pr-2

                          text-[15px]

                          leading-[1.45]

                          transition-all
                          duration-300

                          ${
                            activeIdx === index
                              ? `
                                  border-[#0B5345]
                                  font-semibold
                                  text-[#0B5345]
                                `
                              : `
                                  border-transparent
                                  text-[#66736E]

                                  hover:border-[#C6D4CF]
                                  hover:text-[#0B5345]
                                `
                          }
                        `}
                      >
                        {section.heading}
                      </a>
                    </li>
                  )
                )}
              </ul>

              {/* CTA */}

              <div
                className="
                  group/card
                  relative

                  mt-7

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-[#DDE2DD]

                  bg-[#F8F6F0]

                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#0B5345]/25
                  hover:shadow-[0_14px_32px_rgba(7,40,33,.07)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute

                    left-0
                    top-0

                    h-[3px]
                    w-full

                    origin-left
                    scale-x-0

                    bg-[linear-gradient(
                      90deg,
                      #0B5345_0%,
                      #69B7A1_60%,
                      #D8B867_100%
                    )]

                    transition-transform
                    duration-300

                    group-hover/card:scale-x-100
                  "
                />

                <Mail
                  size={18}
                  className="text-[#0B5345]"
                />

                <p
                  className="
                    mt-4

                    font-serif

                    text-[20px]

                    leading-[1.18]
                  "
                >
                  Need advice on this topic?
                </p>

                <Link
                  to="/contact"
                  className="
                    mt-5

                    inline-flex
                    items-center
                    gap-2

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.12em]

                    text-[#0B5345]
                  "
                >
                  Speak with Orpheus

                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </aside>

          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <article
            className="
              w-full
              min-w-0
              max-w-[760px]

              overflow-hidden
            "
          >
            {/* =================================================
                MOBILE ARTICLE NAVIGATION
            ================================================= */}

            <div
              className="
                mb-8

                w-full
                min-w-0

                rounded-[18px]

                border
                border-[#DDE2DD]

                bg-[#F8F6F0]

                p-4

                lg:hidden
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[.16em]

                    text-[#A7802D]
                  "
                >
                  In this article
                </p>

                <span
                  className="
                    shrink-0

                    text-[10px]
                    font-bold

                    text-[#0B5345]
                  "
                >
                  {String(activeIdx + 1).padStart(2, "0")}
                  /
                  {String(post.body.length).padStart(2, "0")}
                </span>
              </div>

              <div
                className="
                  mt-4

                  flex

                  w-full
                  min-w-0

                  gap-2

                  overflow-x-auto
                  overscroll-x-contain

                  pb-1

                  [scrollbar-width:none]

                  [&::-webkit-scrollbar]:hidden
                "
              >
                {post.body.map(
                  (section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-2

                        rounded-full

                        border
                        border-[#0B5345]

                        bg-[#0B5345]

                        px-4
                        py-2.5

                        text-[12px]
                        font-semibold

                        leading-none

                        text-white

                        shadow-[0_8px_20px_rgba(7,40,33,.10)]

                        transition-all
                        duration-300

                        hover:bg-[#0E6554]
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-bold
                          text-[#E4C77D]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {section.heading}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* =================================================
                ARTICLE INTRO
            ================================================= */}

            <div
              className="
                group/card
                relative

                mb-9

                overflow-hidden

                rounded-[18px]

                border
                border-[#DCE2DC]

                bg-[#F8F6F0]

                p-5

                transition-all
                duration-300

                sm:mb-10
                sm:rounded-[22px]
                sm:p-6

                md:mb-12
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

                  bg-[linear-gradient(
                    90deg,
                    #0B5345_0%,
                    #69B7A1_60%,
                    #D8B867_100%
                  )]

                  transition-transform
                  duration-300

                  md:block
                  md:group-hover/card:scale-x-100
                "
              />

              <div className="flex gap-3 sm:gap-4">
                <Quote
                  size={21}
                  className="
                    mt-1
                    shrink-0

                    text-[#D8B867]

                    sm:h-[22px]
                    sm:w-[22px]
                  "
                />

                <p
                  className="
                    min-w-0

                    break-words

                    font-serif

                    text-[18px]
                    font-normal

                    leading-[1.4]

                    text-[#24342F]

                    sm:text-[20px]

                    md:text-[21px]
                  "
                >
                  Good structuring starts with the commercial objective,
                  not the jurisdiction, bank or product.
                </p>
              </div>
            </div>

            {/* =================================================
                ARTICLE SECTIONS
            ================================================= */}

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
                    mb-10

                    w-full
                    min-w-0

                    scroll-mt-[105px]

                    sm:mb-12

                    md:mb-14
                    md:scroll-mt-[120px]
                  "
                >
                  {/* SECTION NUMBER */}

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[.16em]

                      text-[#A7802D]

                      sm:text-[11px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  {/* SECTION HEADING */}

                  <h2
                    className="
                      mt-3

                      w-full
                      min-w-0
                      max-w-[690px]

                      break-words

                      font-serif

                      text-[29px]
                      font-normal

                      leading-[1.08]

                      tracking-[-.025em]

                      sm:text-[32px]

                      md:text-[36px]

                      lg:text-[40px]
                    "
                  >
                    {section.heading}
                  </h2>

                  {/* PARAGRAPHS */}

                  <div
                    className="
                      mt-5

                      w-full
                      min-w-0

                      space-y-4

                      sm:mt-6
                      sm:space-y-5
                    "
                  >
                    {section.paragraphs.map(
                      (
                        paragraph,
                        paragraphIndex
                      ) => (
                        <p
                          key={paragraphIndex}
                          className="
                            w-full
                            min-w-0

                            break-words

                            text-[16px]

                            leading-[1.8]

                            text-[#4F5F59]

                            sm:text-[17px]

                            md:text-[18px]
                            md:leading-[1.85]
                          "
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* DIVIDER */}

                  {index <
                    post.body.length - 1 && (
                    <div
                      className="
                        mt-9

                        h-px
                        w-full

                        bg-[#E2E6E2]

                        sm:mt-10

                        md:mt-12
                      "
                    />
                  )}
                </section>
              )
            )}

            {/* =================================================
                AUTHOR END CARD
                Simple realistic card using actual image
            ================================================= */}

            <div
              className="
                mt-12
                overflow-hidden
                rounded-[18px]
                border
                border-[#DDE2DD]
                bg-[#07251E]
                p-4
                text-white
                shadow-[0_14px_32px_rgba(7,40,33,.10)]

                sm:mt-14
                sm:rounded-[20px]
                sm:p-5

                md:mt-16
                md:p-6
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4

                  sm:gap-5
                "
              >
                {/* AUTHOR IMAGE - compact, no cutting */}
                <div
                  className="
                    relative
                    flex
                    h-[72px]
                    w-[72px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[#D8B867]/35
                    bg-[#092D25]
                    shadow-[0_10px_22px_rgba(0,0,0,.16)]

                    sm:h-[84px]
                    sm:w-[84px]
                  "
                >
                  <img
                    src="/images/rachit.jpeg"
                    alt="Rachit Yadav"
                    className="
                      h-full
                      w-full
                      object-contain
                      object-center
                    "
                    loading="lazy"
                  />
                </div>

                {/* AUTHOR CONTENT */}
                <div className="min-w-0 flex-1">
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-3
                    "
                  >
                    <div className="min-w-0">
                      <p className="section-kicker-gold">
                        ABOUT THE AUTHOR
                      </p>

                      <h3
                        className="
                          mt-1.5
                          break-words
                          font-serif
                          text-[23px]
                          font-normal
                          leading-tight

                          sm:text-[26px]
                          md:text-[28px]
                        "
                      >
                        Rachit Yadav
                      </h3>

                      <p
                        className="
                          mt-1
                          break-words
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[.1em]
                          text-[#D8B867]/85

                          sm:text-[11px]
                        "
                      >
                        CEO · Orpheus Financial
                      </p>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/rachit-yadav-96a3951b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Rachit Yadav LinkedIn profile"
                      title="LinkedIn"
                      className="
                        inline-flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8B867]/25
                        bg-[#D8B867]/10
                        text-[#E4C77D]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#D8B867]
                        hover:text-[#071813]

                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Linkedin size={17} />
                    </a>
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[620px]
                      break-words
                      text-[13.5px]
                      leading-6
                      text-white/70

                      sm:text-[14.5px]
                      sm:leading-7
                    "
                  >
                    Rachit Yadav is the CEO of Orpheus Financial, helping
                    business owners unlock offshore banking, global financial
                    access and cross-border growth.
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {[
                      "Dubai, UAE",
                      "Offshore banking",
                      "Cross-border growth",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[.045]
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-semibold
                          leading-none
                          text-white/70

                          sm:text-[11px]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                BACK LINK
            ================================================= */}

            <div
              className="
                mt-8

                border-t
                border-[#DDE2DD]

                pt-7

                sm:mt-10
                sm:pt-8
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
                  tracking-[.12em]

                  text-[#0B5345]

                  sm:text-[12px]
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

      <section
        className="
          bg-[#F7F4EC]

          py-10

          sm:py-12

          md:py-14
        "
      >
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
          <div className="min-w-0">
            <p className="section-kicker">
              CONTINUE THE CONVERSATION
            </p>

            <p
              className="
                mt-3

                max-w-[620px]

                break-words

                font-serif

                text-[24px]
                font-normal

                leading-[1.1]

                sm:text-[26px]

                md:text-[28px]
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
              w-fit
              shrink-0

              items-center
              gap-2

              rounded-md

              bg-[#0B5345]

              px-5

              text-[11px]
              font-bold
              uppercase
              tracking-[.09em]

              text-white

              sm:text-[12px]
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