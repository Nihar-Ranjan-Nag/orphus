import {
  ArrowRight,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

type AdvisoryCTAProps = {
  title?: string;
  text?: string;
  compact?: boolean;
};

export function AdvisoryCTA({
  title = "Not sure what structure or service you need?",
  text = "Start with the outcome. Our advisory team will assess the objective, identify the right structure and lead the execution from strategy through implementation.",
  compact = false,
}: AdvisoryCTAProps) {
  return (
    <section
      className={
        compact
          ? `
              bg-[#F7F4EC]
              py-8
              sm:py-9
              md:py-10
              lg:py-10
            `
          : `
              bg-[#F7F4EC]
              py-10
              sm:py-12
              md:py-14
              lg:py-16
            `
      }
    >
      <div className="section-shell">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            border
            border-[#17493C]/15
            bg-[linear-gradient(135deg,#061E18_0%,#0B5345_66%,#126C59_100%)]
            px-5
            py-6
            text-white
            shadow-[0_18px_50px_rgba(7,40,33,.14)]

            sm:px-7
            sm:py-7

            md:px-8
            md:py-8

            lg:px-10
            lg:py-9
          "
        >
          {/* Background texture */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              grid-texture-dark
              opacity-25
            "
          />

          {/* Decorative ring */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              -top-20
              h-52
              w-52
              rounded-full
              border
              border-[#D8B867]/12
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {/* LEFT CONTENT */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                gap-4

                sm:flex-row
                sm:items-start
                sm:gap-5
              "
            >
              {/* ICON */}
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D8B867]/30
                  bg-[#D8B867]/10
                  text-[#E8CE87]

                  sm:mt-1
                  sm:h-11
                  sm:w-11

                  lg:h-12
                  lg:w-12
                "
              >
                <MessageCircleQuestion size={18} />
              </span>

              {/* TEXT */}
              <div className="min-w-0 flex-1">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[.18em]
                    text-[#E5CB87]

                    sm:text-[11px]
                    lg:text-[12px]
                  "
                >
                  <ShieldCheck size={12} />
                  Advisory desk
                </div>

                <h2
                  className="
                    mt-2
                    max-w-[720px]
                    font-serif
                    text-[28px]
                    font-normal
                    leading-[1.08]
                    tracking-[-.025em]

                    sm:text-[32px]

                    md:text-[36px]

                    lg:text-[38px]

                    xl:text-[40px]
                  "
                >
                  {title}
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[760px]
                    text-[15px]
                    leading-6
                    text-white/75

                    sm:text-[16px]
                    sm:leading-7

                    lg:text-[17px]
                    lg:leading-7
                  "
                >
                  {text}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                w-full
                shrink-0

                sm:w-auto

                lg:flex
                lg:items-center
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[8px]
                  bg-[#D8B867]
                  px-6
                  py-3
                  text-center
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.10em]
                  text-[#071813]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#E5CB87]
                  hover:shadow-[0_10px_30px_rgba(216,184,103,.22)]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#E5CB87]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0B5345]

                  sm:w-auto

                  lg:min-w-[225px]
                  lg:px-7
                  lg:text-[13px]
                "
              >
                <span>Speak to an advisor</span>

                <ArrowRight
                  size={14}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}