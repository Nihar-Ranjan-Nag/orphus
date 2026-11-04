import{j as n}from"./vendor-motion-DOog03i2.js";import{f as N,r as a,L as d}from"./vendor-react-7W1FQkv_.js";import{c as k,q as h,r as u,k as D,A as b,u as y}from"./index-1u8dyd9n.js";import{g as _,C as E,S as B}from"./blogPosts-Djra_Zfa.js";import F from"./NotFound-DaQyjiCa.js";import{g as c}from"./vendor-gsap-DSpwt0cg.js";import{A as f}from"./arrow-left-Bm8L1BMB.js";import"./OButton-qtttpPSL.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=k("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]),C={"bvi-vs-seychelles-which-offshore-jurisdiction-is-best":"/images/bvi.jpg","documents-required-for-business-loan-in-uae":"/images/compliance.jpg","why-your-uae-business-bank-account-application-got-rejected":"/images/bank-account-rejected.jpg","why-dubai-companies-choose-vision-bank":"/images/vision-bank-corporate-accounts.jpg","why-uae-banks-freeze-accounts-and-how-to-avoid-it":"/images/entity.jpg","open-business-account-with-mashreq-bank-dubai":"/images/open-business-account-with-mashreq-bank-dubai.jpg","private-debt-explained":"/images/private-debt-explained.jpg","what-is-offshore-banking-and-how-does-it-work":"/images/what-is-offshore-banking-and-how-does-it-work.jpg","best-financial-advisors-in-dubai":"/images/best-financial-advisors-in-dubai.jpg","offshore-business-in-seychelles":"/images/offshore-business-in-seychelles.jpg","how-to-start-your-business-in-dubai-for-under-aed-6000":"/images/how-to-start-your-business-in-dubai-for-under-aed-6000.jpg","how-to-buy-a-home-in-dubai-or-abu-dhabi":"/images/buy-home-dubai-abu-dhabi.jpg"};function R(r){return C[r]??"/images/entity.jpg"}function P(){const{slug:r}=N(),t=r?_(r):void 0,l=a.useRef(null),x=a.useRef(null),o=a.useRef(null),[p,w]=a.useState(0),g=a.useRef([]);if(a.useEffect(()=>{if(h(),!l.current)return;c.set(l.current,{scaleX:0,transformOrigin:"left center"});const s=c.to(l.current,{scaleX:1,ease:"none",scrollTrigger:{trigger:document.documentElement,start:"top top",end:"bottom bottom",scrub:.25,invalidateOnRefresh:!0}});return u.refresh(),()=>{var e;(e=s.scrollTrigger)==null||e.kill(),s.kill()}},[r]),a.useEffect(()=>{if(h(),!o.current||!x.current)return;c.set(o.current,{scaleY:0,transformOrigin:"top center"});const s=c.to(o.current,{scaleY:1,ease:"none",scrollTrigger:{trigger:x.current,start:"top 40%",end:"bottom 70%",scrub:.3,invalidateOnRefresh:!0}});return()=>{var e;(e=s.scrollTrigger)==null||e.kill(),s.kill()}},[r,t]),a.useEffect(()=>{if(!t)return;const s=[];return g.current.forEach((e,i)=>{if(!e)return;const m=u.create({trigger:e,start:"top 32%",end:"bottom 32%",onToggle:v=>{v.isActive&&w(i)}});s.push(m)}),()=>s.forEach(e=>e.kill())},[t]),!t)return n.jsx(F,{});const j=R(t.slug);return n.jsxs("main",{className:`
        w-full
        overflow-x-hidden
        bg-[#FFFEFA]
        pt-[72px]
        text-[#0A1714]

        lg:pt-[76px]
      `,children:[n.jsx("div",{className:`
          fixed
          left-0
          right-0
          top-[72px]
          z-[999]

          h-[4px]
          overflow-visible

          bg-[#E8E3D7]/70

          lg:top-[76px]
        `,children:n.jsx("div",{ref:l,className:`
            relative

            h-full
            w-full

            origin-left

            bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_45%,#D8B867_75%,#E9D59C_100%)]

            shadow-[0_0_14px_rgba(216,184,103,.45)]
          `,children:n.jsx("span",{"aria-hidden":"true",className:`
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
            `})})}),n.jsxs("section",{className:`
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
        `,children:[n.jsx("div",{className:`
            absolute
            inset-0

            grid-texture
            opacity-40
          `}),n.jsxs("div",{className:`
            section-shell

            relative

            w-full
            min-w-0
          `,children:[n.jsxs(d,{to:"/blog",className:`
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
            `,children:[n.jsx(f,{size:13}),"Back to Insights"]}),n.jsxs("div",{className:`
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
            `,children:[n.jsxs("div",{className:"min-w-0",children:[n.jsxs("div",{className:`
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
                `,children:[n.jsx("span",{className:"text-[#0B5345]",children:t.category}),n.jsx("span",{className:"text-[#A9B1AE]",children:"•"}),n.jsx("span",{className:"text-[#788580]",children:t.date}),t.readTime&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"text-[#A9B1AE]",children:"•"}),n.jsxs("span",{className:`
                        flex
                        items-center
                        gap-1.5

                        text-[#788580]
                      `,children:[n.jsx(E,{size:11}),t.readTime]})]})]}),n.jsx("h1",{className:`
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
                `,children:t.title}),n.jsx("p",{className:`
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
                `,children:t.excerpt}),n.jsxs("div",{className:`
                  mt-5

                  flex
                  items-center
                  gap-3

                  border-t
                  border-[#D9DED9]

                  pt-4

                  sm:mt-6
                  sm:pt-5
                `,children:[n.jsx("div",{className:`
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
                  `,children:t.author.initials}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:`
                      truncate

                      text-[14px]
                      font-semibold

                      sm:text-[15px]
                    `,children:t.author.name}),n.jsx("p",{className:`
                      mt-0.5

                      text-[9px]
                      uppercase
                      tracking-[.12em]

                      text-[#7B8883]

                      sm:text-[10px]
                    `,children:t.author.role})]})]})]}),n.jsxs("div",{className:`
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
              `,children:[n.jsx(B,{src:j,alt:t.title,className:`
                  h-full
                  w-full

                  object-cover
                  object-center
                `}),n.jsx("div",{className:`
                  absolute
                  inset-0

                  bg-[linear-gradient(
                    180deg,
                    transparent_52%,
                    rgba(4,24,19,.70)_100%
                  )]
                `}),n.jsx("div",{className:`
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
                `,children:"Orpheus Financial Insight"})]})]})]})]}),n.jsx("section",{ref:x,className:`
          w-full
          overflow-hidden

          bg-white

          py-9

          sm:py-12

          md:py-16

          lg:py-20
        `,children:n.jsxs("div",{className:`
            section-shell

            grid

            w-full
            min-w-0

            grid-cols-1

            gap-8

            lg:grid-cols-[300px_minmax(0,760px)]
            lg:justify-center
            lg:gap-14
          `,children:[n.jsxs("aside",{className:`
              relative
              hidden

              lg:block
            `,children:[n.jsx("span",{"aria-hidden":"true",className:`
                pointer-events-none

                absolute

                bottom-0
                right-0
                top-0

                w-px

                bg-[#E2E6E2]
              `}),n.jsx("span",{ref:o,"aria-hidden":"true",className:`
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
              `}),n.jsxs("div",{className:`
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
              `,children:[n.jsx("p",{className:`
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.17em]

                  text-[#A7802D]
                `,children:"IN THIS ARTICLE"}),n.jsx("ul",{className:`
                  mt-5

                  space-y-1

                  border-l
                  border-[#DDE2DD]
                `,children:t.body.map((s,e)=>n.jsx("li",{children:n.jsx("a",{href:`#section-${e}`,className:`
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

                          ${p===e?`
                                  border-[#0B5345]
                                  font-semibold
                                  text-[#0B5345]
                                `:`
                                  border-transparent
                                  text-[#66736E]

                                  hover:border-[#C6D4CF]
                                  hover:text-[#0B5345]
                                `}
                        `,children:s.heading})},e))}),n.jsxs("div",{className:`
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
                `,children:[n.jsx("span",{"aria-hidden":"true",className:`
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
                  `}),n.jsx(D,{size:18,className:"text-[#0B5345]"}),n.jsx("p",{className:`
                    mt-4

                    font-serif

                    text-[20px]

                    leading-[1.18]
                  `,children:"Need advice on this topic?"}),n.jsxs(d,{to:"/contact",className:`
                    mt-5

                    inline-flex
                    items-center
                    gap-2

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.12em]

                    text-[#0B5345]
                  `,children:["Speak with Orpheus",n.jsx(b,{size:12})]})]})]})]}),n.jsxs("article",{className:`
              w-full
              min-w-0
              max-w-[760px]

              overflow-hidden
            `,children:[n.jsxs("div",{className:`
                mb-8

                w-full
                min-w-0

                rounded-[18px]

                border
                border-[#DDE2DD]

                bg-[#F8F6F0]

                p-4

                lg:hidden
              `,children:[n.jsxs("div",{className:`
                  flex
                  items-center
                  justify-between
                  gap-4
                `,children:[n.jsx("p",{className:`
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[.16em]

                    text-[#A7802D]
                  `,children:"In this article"}),n.jsxs("span",{className:`
                    shrink-0

                    text-[10px]
                    font-bold

                    text-[#0B5345]
                  `,children:[String(p+1).padStart(2,"0"),"/",String(t.body.length).padStart(2,"0")]})]}),n.jsx("div",{className:`
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
                `,children:t.body.map((s,e)=>n.jsxs("a",{href:`#section-${e}`,className:`
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
                      `,children:[n.jsx("span",{className:`
                          text-[10px]
                          font-bold
                          text-[#E4C77D]
                        `,children:String(e+1).padStart(2,"0")}),s.heading]},e))})]}),n.jsxs("div",{className:`
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
              `,children:[n.jsx("span",{"aria-hidden":"true",className:`
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
                `}),n.jsxs("div",{className:"flex gap-3 sm:gap-4",children:[n.jsx(A,{size:21,className:`
                    mt-1
                    shrink-0

                    text-[#D8B867]

                    sm:h-[22px]
                    sm:w-[22px]
                  `}),n.jsx("p",{className:`
                    min-w-0

                    break-words

                    font-serif

                    text-[18px]
                    font-normal

                    leading-[1.4]

                    text-[#24342F]

                    sm:text-[20px]

                    md:text-[21px]
                  `,children:"Good structuring starts with the commercial objective, not the jurisdiction, bank or product."})]})]}),t.body.map((s,e)=>n.jsxs("section",{id:`section-${e}`,ref:i=>{g.current[e]=i},className:`
                    mb-10

                    w-full
                    min-w-0

                    scroll-mt-[105px]

                    sm:mb-12

                    md:mb-14
                    md:scroll-mt-[120px]
                  `,children:[n.jsx("p",{className:`
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[.16em]

                      text-[#A7802D]

                      sm:text-[11px]
                    `,children:String(e+1).padStart(2,"0")}),n.jsx("h2",{className:`
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
                    `,children:s.heading}),n.jsx("div",{className:`
                      mt-5

                      w-full
                      min-w-0

                      space-y-4

                      sm:mt-6
                      sm:space-y-5
                    `,children:s.paragraphs.map((i,m)=>n.jsx("p",{className:`
                            w-full
                            min-w-0

                            break-words

                            text-[16px]

                            leading-[1.8]

                            text-[#4F5F59]

                            sm:text-[17px]

                            md:text-[18px]
                            md:leading-[1.85]
                          `,children:i},m))}),e<t.body.length-1&&n.jsx("div",{className:`
                        mt-9

                        h-px
                        w-full

                        bg-[#E2E6E2]

                        sm:mt-10

                        md:mt-12
                      `})]},e)),n.jsx("div",{className:`
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
              `,children:n.jsxs("div",{className:`
                  flex
                  items-start
                  gap-4

                  sm:gap-5
                `,children:[n.jsx("div",{className:`
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
                  `,children:n.jsx("img",{src:"/images/rachit.jpeg",alt:"Rachit Yadav",className:`
                      h-full
                      w-full
                      object-contain
                      object-center
                    `,loading:"lazy"})}),n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:`
                      flex
                      items-start
                      justify-between
                      gap-3
                    `,children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"section-kicker-gold",children:"ABOUT THE AUTHOR"}),n.jsx("h3",{className:`
                          mt-1.5
                          break-words
                          font-serif
                          text-[23px]
                          font-normal
                          leading-tight

                          sm:text-[26px]
                          md:text-[28px]
                        `,children:"Rachit Yadav"}),n.jsx("p",{className:`
                          mt-1
                          break-words
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[.1em]
                          text-[#D8B867]/85

                          sm:text-[11px]
                        `,children:"CEO · Orpheus Financial"})]}),n.jsx("a",{href:"https://www.linkedin.com/in/rachit-yadav-96a3951b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",target:"_blank",rel:"noreferrer","aria-label":"Open Rachit Yadav LinkedIn profile",title:"LinkedIn",className:`
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
                      `,children:n.jsx(y,{size:17})})]}),n.jsx("p",{className:`
                      mt-3
                      max-w-[620px]
                      break-words
                      text-[13.5px]
                      leading-6
                      text-white/70

                      sm:text-[14.5px]
                      sm:leading-7
                    `,children:"Rachit Yadav is the CEO of Orpheus Financial, helping business owners unlock offshore banking, global financial access and cross-border growth."}),n.jsx("div",{className:`
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    `,children:["Dubai, UAE","Offshore banking","Cross-border growth"].map(s=>n.jsx("span",{className:`
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
                        `,children:s},s))})]})]})}),n.jsx("div",{className:`
                mt-8

                border-t
                border-[#DDE2DD]

                pt-7

                sm:mt-10
                sm:pt-8
              `,children:n.jsxs(d,{to:"/blog",className:`
                  inline-flex
                  items-center
                  gap-2

                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[.12em]

                  text-[#0B5345]

                  sm:text-[12px]
                `,children:[n.jsx(f,{size:12}),"All insights"]})})]})]})}),n.jsx("section",{className:`
          bg-[#F7F4EC]

          py-10

          sm:py-12

          md:py-14
        `,children:n.jsxs("div",{className:`
            section-shell

            flex
            flex-col
            justify-between

            gap-6

            md:flex-row
            md:items-center
          `,children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"section-kicker",children:"CONTINUE THE CONVERSATION"}),n.jsx("p",{className:`
                mt-3

                max-w-[620px]

                break-words

                font-serif

                text-[24px]
                font-normal

                leading-[1.1]

                sm:text-[26px]

                md:text-[28px]
              `,children:"Need to apply this thinking to a real structure, transaction or banking requirement?"})]}),n.jsxs(d,{to:"/contact",className:`
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
            `,children:["Speak With Our Team",n.jsx(b,{size:13})]})]})})]})}export{P as default};
