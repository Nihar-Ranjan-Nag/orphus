import {
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import {
  useState,
  type FormEvent,
} from "react";

import { GoogleMapsSection } from "@/components/contact/GoogleMapsSection";
import {
  CONTACT,
  EMAIL_HREF,
  PHONE_HREF,
} from "@/data/contact";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const submitContact = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();

      toast({
        title: "Message received",
        description:
          "The Orpheus advisory team will contact you shortly.",
      });
    }, 650);
  };

  const field =
    "h-[52px] w-full rounded-xl border border-[#D6DED9] bg-[#FBFCFA] px-4 text-[15px] font-medium text-[#172821] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#9AA5A1] focus:border-[#0B5345] focus:bg-white focus:ring-4 focus:ring-[#0B5345]/10 lg:text-[16px]";

  return (
    <main className="bg-[#FFFEFA] pt-[76px] text-[#0A1714]">
      {/* =====================================================
          SIMPLE CONTACT INTRO
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E1E5E1]
          bg-[#F7F4EC]

          py-9
          sm:py-11
          md:py-12
          lg:py-14
        "
      >
        <div className="section-shell">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="section-kicker">
              CONTACT ORPHEUS
            </p>

            <h1
              className="
                mt-3

                font-serif
                text-[40px]
                font-normal
                leading-[1]
                tracking-[-.04em]

                sm:text-[48px]
                md:text-[56px]
                lg:text-[62px]
              "
            >
              Start with the{" "}
              <span className="italic text-[#0B5345]">
                objective.
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-[650px]

                text-[15px]
                leading-7

                text-[#5C6D67]

                sm:text-[16px]
                md:text-[17px]
              "
            >
              Tell us what you are trying to achieve. Our advisory team
              will help identify the right next step and connect you with
              the appropriate specialist.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL REACH + CONTACT FORM
      ====================================================== */}
      <section
        className="
          bg-[#FFFEFA]

          py-8
          sm:py-9
          md:py-10
          lg:py-12
        "
      >
        <div className="section-shell">
          <div
            className="
              mx-auto
              grid
              max-w-[1180px]
              grid-cols-1
              gap-5

              lg:grid-cols-[.88fr_1.12fr]
              lg:items-stretch
              lg:gap-6
            "
          >
            {/* =================================================
                LEFT — GLOBAL REACH
            ================================================== */}
            <div
              className="
                order-2
                lg:order-1
                relative
                overflow-hidden

                rounded-[22px]

                border
                border-[#17493C]/50

                bg-[#061A15]

                px-5
                py-7

                text-white

                shadow-[0_18px_48px_rgba(7,40,33,.12)]

                sm:px-7
                sm:py-8

                md:px-8
                md:py-9

                lg:flex
                lg:min-h-[590px]
                lg:flex-col
                lg:justify-between
                lg:rounded-[24px]
                lg:px-8
                lg:py-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  opacity-25

                  bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)]

                  bg-[size:34px_34px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20

                  h-56
                  w-56

                  rounded-full

                  bg-[#0B5345]/25

                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[.23em]

                    text-[#D7C06F]

                    sm:text-[12px]
                  "
                >
                  GLOBAL REACH
                </p>

                <h2
                  className="
                    mt-5

                    font-serif
                    text-[36px]
                    font-semibold
                    leading-[1.02]

                    text-white

                    sm:text-[42px]

                    lg:text-[46px]
                  "
                >
                  Remote{" "}
                  <span
                    className="
                      italic

                      bg-[linear-gradient(90deg,#D8B867_0%,#A8A85C_50%,#0F705D_100%)]

                      bg-clip-text
                      text-transparent
                    "
                  >
                    Connectivity
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[540px]

                    text-[16px]
                    leading-7

                    text-white/62

                    sm:text-[17px]
                    sm:leading-8
                  "
                >
                  Break free from traditional boundaries. Work from anywhere,
                  at any time. Our distributed network ensures seamless
                  collaboration across all time zones and locations.
                </p>
              </div>

              {/* CONNECTION GRAPHIC */}
              <div
                className="
                  relative
                  z-10

                  mt-8
                  overflow-hidden

                  rounded-[18px]

                  border
                  border-[#0B5345]/35

                  bg-[#08231D]

                  p-4

                  sm:p-5

                  lg:mt-10
                "
              >
                <svg
                  viewBox="0 0 520 190"
                  className="
                    h-[180px]
                    w-full

                    sm:h-[200px]

                    lg:h-[220px]
                  "
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="contact-connect-line"
                      x1="0"
                      x2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0C6654"
                      />
                      <stop
                        offset="55%"
                        stopColor="#16856E"
                      />
                      <stop
                        offset="100%"
                        stopColor="#0D5E4E"
                      />
                    </linearGradient>

                    <pattern
                      id="contact-dots"
                      width="22"
                      height="22"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2"
                        cy="2"
                        r="1.1"
                        fill="rgba(92,181,154,.11)"
                      />
                    </pattern>
                  </defs>

                  <rect
                    width="520"
                    height="190"
                    fill="url(#contact-dots)"
                  />

                  <g
                    fill="none"
                    stroke="url(#contact-connect-line)"
                    strokeWidth="1.6"
                    opacity="0.78"
                  >
                    <path d="M34 40 C88 17 112 62 142 94" />
                    <path d="M34 40 C118 12 160 62 210 152" />
                    <path d="M210 152 C242 82 248 65 280 74" />
                    <path d="M280 74 C318 39 357 30 398 67" />
                    <path d="M335 132 C368 77 386 55 414 76" />
                    <path d="M414 76 C446 31 474 39 500 55" />
                  </g>

                  {[
                    [34, 40],
                    [82, 84],
                    [142, 94],
                    [210, 152],
                    [280, 74],
                    [318, 49],
                    [335, 132],
                    [398, 67],
                    [414, 76],
                    [500, 55],
                  ].map(([cx, cy], index) => (
                    <g key={`${cx}-${cy}-${index}`}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r="7"
                        fill="#0B5345"
                        opacity="0.18"
                      />

                      <circle
                        cx={cx}
                        cy={cy}
                        r="3.2"
                        fill="#0E806A"
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* =================================================
                RIGHT — FORM CARD
            ================================================== */}
            <div
              className="
                order-1
                lg:order-2
                overflow-hidden

                rounded-[22px]

                border
                border-[#CFD9D3]

                bg-white

                shadow-[0_28px_80px_rgba(7,40,33,.12)]

                lg:rounded-[24px]
              "
            >
              <div
                className="
                  relative
                  overflow-hidden

                  border-b
                  border-[#E1E6E2]

                  bg-[linear-gradient(135deg,#FBF9F3_0%,#F3F7F4_100%)]

                  px-5
                  py-6

                  sm:px-7
                  sm:py-7

                  md:px-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-full
                    bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_58%,#D8B867_100%)]
                  "
                />
                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#E8F1ED]

                      text-[#0B5345]
                    "
                  >
                    <Globe2 size={17} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[.16em]

                        text-[#A7802D]

                        sm:text-[11px]
                      "
                    >
                      Advisory desk
                    </p>

                    <h2
                      className="
                        mt-1.5

                        font-serif
                        text-[27px]
                        font-normal
                        leading-[1.05]

                        text-[#102A23]

                        sm:text-[31px]
                        md:text-[34px]
                      "
                    >
                      Tell us how we can help.
                    </h2>

                    <p
                      className="
                        mt-2
                        max-w-[540px]
                        text-[14px]
                        leading-6
                        text-[#6B7974]
                        sm:text-[15px]
                      "
                    >
                      Share a few details and our advisory team will route your
                      enquiry to the right specialist.
                    </p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={submitContact}
                className="
                  bg-[#FFFEFC]

                  p-5

                  sm:p-7

                  md:p-8
                "
              >
                <div
                  className="
                    grid
                    gap-4

                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="
                        mb-2
                        block

                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.08em]

                        text-[#53645E]
                      "
                    >
                      Name
                    </label>

                    <input
                      id="contact-name"
                      required
                      name="name"
                      className={field}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="
                        mb-2
                        block

                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.08em]

                        text-[#53645E]
                      "
                    >
                      Email
                    </label>

                    <input
                      id="contact-email"
                      required
                      type="email"
                      name="email"
                      className={field}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="
                        mb-2
                        block

                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.08em]

                        text-[#53645E]
                      "
                    >
                      Phone
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      className={field}
                      placeholder="+971 ..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="
                        mb-2
                        block

                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.08em]

                        text-[#53645E]
                      "
                    >
                      Area
                    </label>

                    <select
                      id="contact-area"
                      name="area"
                      className={field}
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select an area
                      </option>

                      <option>Corporate Structuring</option>
                      <option>Banking & Capital</option>
                      <option>Private Wealth</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="
                      mb-2
                      block

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.08em]

                      text-[#53645E]
                    "
                  >
                    What are you trying to achieve?
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    rows={7}
                    className="
                      w-full
                      resize-y

                      rounded-xl

                      border
                      border-[#D6DED9]

                      bg-[#FBFCFA]

                      px-4
                      py-3

                      text-[15px]
                      leading-6

                      text-[#0A1714]

                      outline-none

                      transition

                      placeholder:text-[#9AA5A1]

                      focus:border-[#0B5345]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#0B5345]/10

                      lg:text-[16px]
                    "
                    placeholder="Tell us the objective, current structure and markets involved..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    group

                    mt-5

                    inline-flex
                    min-h-12
                    w-full

                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-[#0B5345]

                    bg-[linear-gradient(135deg,#0B5345_0%,#0E6856_100%)]

                    px-6

                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[.1em]

                    text-white

                    transition-all
                    duration-300

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:w-auto
                    sm:min-w-[220px]

                    md:hover:-translate-y-0.5
                    md:hover:-translate-y-1
                    md:hover:bg-[linear-gradient(135deg,#0D604F_0%,#11715D_100%)]
                    md:hover:shadow-[0_14px_32px_rgba(11,83,69,.22)]
                  "
                >
                  {submitting
                    ? "Sending..."
                    : "Send to advisory desk"}

                  <Send
                    size={13}
                    className="
                      transition-transform
                      md:group-hover:translate-x-1
                    "
                  />
                </button>

                <p
                  className="
                    mt-4

                    text-[12px]
                    leading-5

                    text-[#7C8984]
                  "
                >
                  One advisory relationship. Clear ownership from first
                  conversation through execution.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION DETAILS
      ====================================================== */}
      <section
        className="
          border-t
          border-[#E2E6E2]

          bg-[#F7F4EC]

          py-5
          sm:py-6
          md:py-7
        "
      >
        <div className="section-shell">
          <div
            className="
              mx-auto
              grid
              max-w-[1180px]
              gap-3

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            <div
              className="
                flex
                items-start
                gap-3

                rounded-xl

                border
                border-[#D9E0DB]

                bg-white

                p-4
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#E8F1ED]

                  text-[#0B5345]
                "
              >
                <MapPin size={15} />
              </span>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.12em]

                    text-[#A7802D]
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-1

                    text-[14px]
                    leading-5

                    text-[#42564F]

                    sm:text-[15px]
                  "
                >
                  Dubai, UAE
                </p>
              </div>
            </div>

            <a
              href={PHONE_HREF}
              className="
                flex
                items-start
                gap-3

                rounded-xl

                border
                border-[#D9E0DB]

                bg-white

                p-4

                transition-colors

                md:hover:border-[#0B5345]/25
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#E8F1ED]

                  text-[#0B5345]
                "
              >
                <Phone size={15} />
              </span>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.12em]

                    text-[#A7802D]
                  "
                >
                  Phone
                </p>

                <p
                  className="
                    mt-1

                    text-[14px]
                    leading-5

                    text-[#42564F]

                    sm:text-[15px]
                  "
                >
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={EMAIL_HREF}
              className="
                flex
                items-start
                gap-3

                rounded-xl

                border
                border-[#D9E0DB]

                bg-white

                p-4

                transition-colors

                md:hover:border-[#0B5345]/25
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#E8F1ED]

                  text-[#0B5345]
                "
              >
                <Mail size={15} />
              </span>

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.12em]

                    text-[#A7802D]
                  "
                >
                  Email
                </p>

                <p
                  className="
                    mt-1
                    break-all

                    text-[14px]
                    leading-5

                    text-[#42564F]

                    sm:text-[15px]
                  "
                >
                  {CONTACT.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
          No shared card hover/top accent inside map area
      ====================================================== */}
      <div className="contact-map-clean">
        <style>{`
          /* Remove inherited card accent/hover from the map section */
          .contact-map-clean .site-card::before,
          .contact-map-clean .site-card::after {
            display: none !important;
            content: none !important;
          }

          .contact-map-clean .site-card:hover {
            transform: none !important;
            box-shadow: inherit !important;
          }

          /* Remove the excessive empty space above the map */
          .contact-map-clean > section {
            padding-top: 28px !important;
            padding-bottom: 42px !important;
          }

          .contact-map-clean > section > div {
            margin-top: 0 !important;
          }

          /* Keep heading/content compact */
          .contact-map-clean h2 {
            margin-top: 8px !important;
          }

          .contact-map-clean p {
            margin-bottom: 0 !important;
          }

          /* Make the actual Google map clearly visible */
          .contact-map-clean iframe {
            display: block !important;
            width: 100% !important;
            height: 430px !important;
            min-height: 430px !important;
            border: 0 !important;
          }

          .contact-map-clean [class*="aspect-"] {
            min-height: 430px !important;
          }

          @media (max-width: 767px) {
            .contact-map-clean > section {
              padding-top: 22px !important;
              padding-bottom: 28px !important;
            }

            .contact-map-clean iframe,
            .contact-map-clean [class*="aspect-"] {
              height: 330px !important;
              min-height: 330px !important;
            }
          }
        `}</style>

        <GoogleMapsSection />
      </div>
    </main>
  );
}