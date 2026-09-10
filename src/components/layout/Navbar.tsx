import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  jurisdictionGroups,
  solutionPillars,
} from "@/data/siteArchitecture";
import { OrpheusWordmark } from "@/components/ui/OrpheusWordmark";
import { CONTACT, PHONE_HREF } from "@/data/contact";

const PHONE_TEL = PHONE_HREF;
const PHONE_DISPLAY = CONTACT.phoneDisplay;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [
    jurisdictionsOpen,
    setJurisdictionsOpen,
  ] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  /* =====================================================
      SCROLL STATE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
      CLOSE MENUS AFTER NAVIGATION
  ===================================================== */

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setJurisdictionsOpen(false);
  }, [location.pathname, location.hash]);

  /* =====================================================
      NAV LINK STYLE
  ===================================================== */

  const itemClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) => `
    relative
    flex
    items-center
    px-3
    py-2
    text-[13px]
    font-bold
    tracking-[0.01em]
    transition-all
    duration-200

    ${
      isActive
        ? "text-[#E6C872]"
        : "text-white hover:text-[#E6C872]"
    }
  `;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[9999]
        w-full
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#041711]/[0.98] shadow-[0_10px_35px_rgba(0,0,0,.20)] backdrop-blur-xl"
            : "bg-[#041711]"
        }
      `}
    >
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1480px]
          items-center
          justify-between
          gap-3

          px-4
          sm:px-5
          md:h-[76px]
          md:px-8
          xl:px-16
        "
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          aria-label="Orpheus Financial Home"
          className="flex min-w-0 shrink-0 items-center"
        >
          <OrpheusWordmark className="h-[29px] sm:h-[32px] lg:h-[34px]" />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
        >
          {/* ABOUT */}
          <NavLink
            to="/about"
            className={itemClass}
          >
            About
          </NavLink>

          {/* =================================================
              SOLUTIONS DROPDOWN
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => {
              setServicesOpen(true);
              setJurisdictionsOpen(false);
            }}
            onMouseLeave={() =>
              setServicesOpen(false)
            }
          >
            <NavLink
              to="/services"
              className={itemClass}
            >
              <span
                className="
                  flex
                  items-center
                  gap-1.5
                "
              >
                Solutions

                <ChevronDown
                  size={13}
                  className={`
                    transition-transform
                    duration-200

                    ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </span>
            </NavLink>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[99999]
                    w-[760px]
                    -translate-x-1/2
                    pt-4
                  "
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-white/10
                      bg-[#06261F]
                      p-4
                      shadow-[0_28px_70px_rgba(0,0,0,.38)]
                    "
                  >
                    {/* HEADER */}
                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        justify-between
                        gap-4
                        border-b
                        border-white/10
                        px-3
                        pb-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[.20em]
                            text-[#D8B867]
                          "
                        >
                          OUR SOLUTIONS
                        </p>

                        <p
                          className="
                            mt-1
                            text-[12px]
                            text-[#9FC1B8]
                          "
                        >
                          Corporate, banking, capital and
                          wealth solutions.
                        </p>
                      </div>

                      <Link
                        to="/services"
                        className="
                          flex
                          items-center
                          gap-2
                          whitespace-nowrap
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[.10em]
                          text-[#78BEAC]
                          transition
                          hover:text-white
                        "
                      >
                        View all
                        <ArrowRight size={12} />
                      </Link>
                    </div>

                    {/* SERVICES */}
                    <div className="grid grid-cols-2 gap-2">
                      {solutionPillars.map(
                        (pillar) => {
                          const Icon =
                            pillar.icon;

                          return (
                            <Link
                              key={pillar.slug}
                              to={`/services#${pillar.slug}`}
                              className="
                                group
                                flex
                                min-h-[128px]
                                gap-4
                                rounded-2xl
                                border
                                border-transparent
                                p-4
                                transition-all
                                duration-200
                                hover:border-white/10
                                hover:bg-white/[0.055]
                              "
                            >
                              <span
                                className="
                                  mt-0.5
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-[#D8B867]/15
                                  bg-[#0B5345]
                                  text-[#E4CB8A]
                                  transition-all
                                  duration-200
                                  group-hover:bg-[#0E6757]
                                "
                              >
                                <Icon size={17} />
                              </span>

                              <div className="min-w-0">
                                <h3
                                  className="
                                    font-serif
                                    text-[18px]
                                    font-normal
                                    leading-tight
                                    text-white
                                    transition-colors
                                    group-hover:text-[#E4CB8A]
                                  "
                                >
                                  {pillar.title}
                                </h3>

                                <p
                                  className="
                                    mt-2
                                    line-clamp-3
                                    text-[12px]
                                    leading-[1.65]
                                    text-[#9FC1B8]
                                  "
                                >
                                  {pillar.description}
                                </p>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================================
              JURISDICTIONS DROPDOWN
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => {
              setJurisdictionsOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() =>
              setJurisdictionsOpen(false)
            }
          >
            <button
              type="button"
              className={`
                flex
                items-center
                gap-1.5
                px-3
                py-2
                text-[13px]
                font-bold
                tracking-[0.01em]
                transition-colors

                ${
                  location.pathname.startsWith(
                    "/jurisdictions"
                  )
                    ? "text-[#E6C872]"
                    : "text-white hover:text-[#E6C872]"
                }
              `}
            >
              Jurisdictions

              <ChevronDown
                size={13}
                className={`
                  transition-transform
                  duration-200

                  ${
                    jurisdictionsOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            <AnimatePresence>
              {jurisdictionsOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[99999]
                    w-[340px]
                    -translate-x-1/2
                    pt-4
                  "
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#06261F]
                      p-2
                      shadow-[0_28px_70px_rgba(0,0,0,.38)]
                    "
                  >
                    {jurisdictionGroups.map(
                      (jurisdiction) => (
                        <Link
                          key={jurisdiction.slug}
                          to={`/jurisdictions/${jurisdiction.slug}`}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            gap-4
                            rounded-xl
                            px-4
                            py-3
                            transition-all
                            duration-200
                            hover:bg-white/[0.06]
                          "
                        >
                          <div className="min-w-0">
                            <p
                              className="
                                font-serif
                                text-[17px]
                                font-normal
                                leading-tight
                                text-white
                                transition-colors
                                duration-200
                                group-hover:text-[#E4CB8A]
                              "
                            >
                              {
                                jurisdiction.title
                              }
                            </p>

                            <p
                              className="
                                mt-1
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[.12em]
                                text-[#8EB9AD]
                              "
                            >
                              {
                                jurisdiction.kicker
                              }
                            </p>
                          </div>

                          <ArrowRight
                            size={12}
                            className="
                              ml-3
                              shrink-0
                              text-[#79A99C]
                              transition-all
                              duration-200
                              group-hover:translate-x-1
                              group-hover:text-[#E4CB8A]
                            "
                          />
                        </Link>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* INSIGHTS */}
          <NavLink
            to="/blog"
            className={itemClass}
          >
            Insights
          </NavLink>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={itemClass}
          >
            Contact
          </NavLink>
        </nav>

        {/* =================================================
            DESKTOP RIGHT SIDE
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-4
            lg:flex
          "
        >
          <a
            href={PHONE_TEL}
            className="
              flex
              items-center
              gap-2
              whitespace-nowrap
              text-[12px]
              font-semibold
              text-white/75
              transition-colors
              hover:text-[#E4CB8A]
            "
          >
            <Phone
              size={14}
              className="text-[#D8B867]"
            />

            {PHONE_DISPLAY}
          </a>

          <Link
            to="/#contact"
            aria-label="Book a consultation with the Orpheus advisory team"
            className="
              inline-flex
              min-h-[44px]
              items-center
              justify-center
              whitespace-nowrap
              rounded-lg
              bg-[#0B5345]
              px-5
              text-[10px]
              font-extrabold
              uppercase
              tracking-[.08em]
              text-white
              transition-all
              duration-200
              hover:bg-[#106856]
            "
          >
            Book a Consultation
          </Link>
        </div>

        {/* =================================================
            MOBILE TOGGLE
        ================================================= */}

        <button
          type="button"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-white/15
            text-white
            transition
            active:scale-95
            lg:hidden
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              bg-[#041711]
              lg:hidden
            "
          >
            <div
              className="
                max-h-[calc(100dvh-72px)]
                overflow-y-auto
                overscroll-contain
                px-4
                py-4

                sm:px-5
                sm:py-5

                md:max-h-[calc(100dvh-76px)]
              "
            >
              {/* =================================================
                  PRIMARY LINKS
              ================================================= */}

              <div className="space-y-1">
                <Link
                  to="/about"
                  className="
                    flex
                    min-h-[48px]
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    font-serif
                    text-[18px]
                    text-white
                    transition
                    hover:bg-white/[.05]
                  "
                >
                  About

                  <ArrowRight
                    size={12}
                    className="text-[#79A99C]"
                  />
                </Link>

                <Link
                  to="/blog"
                  className="
                    flex
                    min-h-[48px]
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    font-serif
                    text-[18px]
                    text-white
                    transition
                    hover:bg-white/[.05]
                  "
                >
                  Insights

                  <ArrowRight
                    size={12}
                    className="text-[#79A99C]"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="
                    flex
                    min-h-[48px]
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    font-serif
                    text-[18px]
                    text-white
                    transition
                    hover:bg-white/[.05]
                  "
                >
                  Contact

                  <ArrowRight
                    size={12}
                    className="text-[#79A99C]"
                  />
                </Link>
              </div>

              {/* =================================================
                  SOLUTIONS
              ================================================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[.18em]
                      text-[#D8B867]
                    "
                  >
                    Solutions
                  </p>

                  <Link
                    to="/services"
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.1em]
                      text-[#8EB9AD]
                    "
                  >
                    View all
                    <ArrowRight size={9} />
                  </Link>
                </div>

                <div
                  className="
                    mt-3
                    grid
                    grid-cols-1
                    gap-2

                    min-[430px]:grid-cols-2
                  "
                >
                  {solutionPillars.map(
                    (pillar) => {
                      const Icon =
                        pillar.icon;

                      return (
                        <Link
                          key={pillar.slug}
                          to={`/services#${pillar.slug}`}
                          className="
                            group
                            flex
                            min-h-[64px]
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-white/[.08]
                            bg-white/[.025]
                            px-3
                            py-3
                            transition-all
                            duration-200
                            hover:border-white/15
                            hover:bg-white/[.055]
                          "
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#0B5345]
                              text-[#E4CB8A]
                            "
                          >
                            <Icon size={14} />
                          </span>

                          <p
                            className="
                              min-w-0
                              text-[12px]
                              font-semibold
                              leading-[1.35]
                              text-white
                            "
                          >
                            {pillar.title}
                          </p>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>

              {/* =================================================
                  JURISDICTIONS
              ================================================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[.18em]
                    text-[#D8B867]
                  "
                >
                  Jurisdictions
                </p>

                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                  "
                >
                  {jurisdictionGroups.map(
                    (jurisdiction) => (
                      <Link
                        key={jurisdiction.slug}
                        to={`/jurisdictions/${jurisdiction.slug}`}
                        className="
                          group
                          min-h-[74px]
                          rounded-xl
                          border
                          border-white/[.08]
                          bg-white/[.025]
                          px-3
                          py-3
                          transition-all
                          duration-200
                          hover:border-white/15
                          hover:bg-white/[.055]
                        "
                      >
                        <p
                          className="
                            font-serif
                            text-[15px]
                            leading-none
                            text-white
                            transition-colors
                            group-hover:text-[#E4CB8A]
                          "
                        >
                          {
                            jurisdiction.title
                          }
                        </p>

                        <p
                          className="
                            mt-2
                            text-[7px]
                            font-semibold
                            uppercase
                            leading-[1.45]
                            tracking-[.1em]
                            text-[#8EB9AD]
                          "
                        >
                          {
                            jurisdiction.kicker
                          }
                        </p>
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <a
                  href={PHONE_TEL}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-white/[.08]
                    bg-white/[.025]
                    px-4
                    py-3.5
                    transition
                    hover:bg-white/[.05]
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0B5345]
                        text-[#D8B867]
                      "
                    >
                      <Phone size={13} />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[.12em]
                          text-[#8EB9AD]
                        "
                      >
                        Call Orpheus
                      </p>

                      <p
                        className="
                          mt-1
                          whitespace-nowrap
                          text-[12px]
                          font-semibold
                          text-white
                        "
                      >
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={11}
                    className="
                      shrink-0
                      text-[#79A99C]
                    "
                  />
                </a>
              </div>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                aria-label="Book a consultation with the Orpheus advisory team"
                className="
                  mt-4
                  flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0B5345]
                  px-5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[.1em]
                  text-white
                  transition-all
                  duration-200
                  active:scale-[.98]
                "
              >
                Book a Consultation
                <ArrowRight size={11} />
              </Link>

              {/* Mobile safe area */}
              <div
                className="
                  h-[calc(env(safe-area-inset-bottom)+12px)]
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}