import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import { capabilityServices } from "@/data/capabilityServices";

export default function CapabilityDetailPage() {
  const { slug } = useParams();

  const service = capabilityServices.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <main className="bg-[#FFFEFA] pt-[72px] text-[#0A1714] md:pt-[76px]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#061812] text-white">
        <div className="absolute inset-0 grid-texture-dark opacity-45" />

        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#0B5345]/35 blur-[110px]" />

        <div className="section-shell relative py-14 sm:py-16 md:py-20 lg:py-24">
          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-2

              text-[12px]
              font-extrabold
              uppercase
              tracking-[.12em]

              text-[#D8B867]

              transition-colors
              duration-300

              md:hover:text-white
            "
          >
            <ArrowLeft size={13} />
            All solutions
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-[820px]">
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#D8B867]/25

                    bg-[#0B5345]

                    text-[#E7CD88]

                    sm:h-12
                    sm:w-12
                  "
                >
                  <Icon size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#D8B867] sm:text-[12px]">
                    {service.eyebrow}
                  </p>

                  <p className="mt-1 text-[13px] font-semibold text-white/55 sm:text-[14px]">
                    {service.pillar}
                  </p>
                </div>
              </div>

              <h1
                className="
                  mt-6
                  max-w-[800px]

                  font-serif
                  text-[clamp(40px,6vw,72px)]
                  font-normal
                  leading-[.98]
                  tracking-[-.045em]
                "
              >
                {service.title}
              </h1>

              <p
                className="
                  mt-5
                  max-w-[760px]

                  text-[17px]
                  leading-7

                  text-white/78

                  sm:text-[18px]

                  md:text-[17px]
                  md:leading-8
                "
              >
                {service.summary}
              </p>
            </div>

            {/* DIRECT EXECUTION CARD */}
            <div
              className="
                group/card
                relative
                overflow-hidden

                rounded-2xl

                border
                border-white/10

                bg-white/[0.045]

                p-5

                backdrop-blur-sm

                transition-all
                duration-300

                sm:p-6

                md:hover:-translate-y-1
                md:hover:border-[#D8B867]/30
                md:hover:bg-white/[0.06]
                md:hover:shadow-[0_16px_40px_rgba(0,0,0,.14)]
              "
            >
              {/* DESKTOP/TABLET TOP LINE ONLY */}
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

              <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#D8B867]">
                Direct execution
              </p>

              <p className="mt-3 text-[15px] leading-6 text-white/70">
                Orpheus stays accountable for the mandate from architecture
                through coordination and implementation.
              </p>

              <Link
                to={`/contact?solution=${encodeURIComponent(
                  service.title,
                )}`}
                className="
                  mt-5

                  inline-flex
                  min-h-[44px]
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  bg-[#D8B867]

                  px-5

                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.09em]

                  text-[#071813]

                  transition-all
                  duration-300

                  sm:w-auto

                  md:hover:-translate-y-0.5
                  md:hover:bg-[#E5CB87]
                  md:hover:shadow-[0_8px_20px_rgba(216,184,103,.18)]
                "
              >
                Discuss this service
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE MANDATE
      ====================================================== */}
      <section className="bg-[#F7F4EC] py-14 sm:py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-kicker">
              THE MANDATE
            </p>

            <h2 className="section-title max-w-[560px]">
              Designed around the outcome, not a product list.
            </h2>

            <p className="section-copy max-w-[620px]">
              {service.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.outcomes.map((outcome, index) => (
              <article
                key={outcome}
                className="
                  group/card
                  relative
                  overflow-hidden

                  rounded-2xl

                  border
                  border-[#DCE2DC]

                  bg-white

                  p-5

                  shadow-[0_10px_30px_rgba(7,40,33,.035)]

                  transition-all
                  duration-300

                  sm:p-6

                  md:hover:-translate-y-1
                  md:hover:border-[#0B5345]/25
                  md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
                "
              >
                {/* DESKTOP/TABLET TOP LINE ONLY */}
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

                <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#B48D34]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-serif text-[24px] font-normal leading-[1.08] sm:text-[26px]">
                  {outcome}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}
      <section className="bg-white py-14 sm:py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-[720px]">
            <p className="section-kicker">
              HOW WE WORK
            </p>

            <h2 className="section-title">
              A clear route from objective to execution.
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, index) => (
              <article
                key={step}
                className="
                  group/card
                  relative
                  overflow-hidden

                  rounded-2xl

                  border
                  border-[#DCE2DC]

                  bg-[#FFFEFA]

                  p-5

                  transition-all
                  duration-300

                  sm:p-6

                  md:hover:-translate-y-1
                  md:hover:border-[#0B5345]/25
                  md:hover:bg-white
                  md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
                "
              >
                {/* DESKTOP/TABLET TOP LINE ONLY */}
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

                <span
                  className="
                    flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B5345]

                    text-[11px]
                    font-bold
                    text-white
                  "
                >
                  0{index + 1}
                </span>

                <div className="mt-5 flex items-start gap-2">
                  <CheckCircle2
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0

                      text-[#0B5345]
                    "
                  />

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      leading-6

                      text-[#2F433D]

                      sm:text-[16px]
                    "
                  >
                    {step}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}