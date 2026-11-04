import{j as n}from"./vendor-motion-DOog03i2.js";import{f as d,g as m,L as a}from"./vendor-react-7W1FQkv_.js";import{e as p,A as r,p as x,f as h,B as g,L as u,H as f,G as v,S as b,g as j}from"./index-1u8dyd9n.js";import{C as N}from"./circle-check-BnaKdTTi.js";import"./vendor-gsap-DSpwt0cg.js";const w={"entity-management":"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88","banking-treasury":"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=88","private-credit-debt":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=88","private-wealth":"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=88","compliance-risk":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=88","corporate-finance-advisory":"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=88"},y={"entity-management":["Entity formation & restructuring","Corporate governance","Holding companies & SPVs"],"banking-treasury":["Corporate banking strategy","KYC & UBO preparation","Multi-bank treasury"],"private-credit-debt":["Debt raising & refinancing","Capital stack design","Lender introductions"],"private-wealth":["Wealth management","Investment advisory","Family office","Estate & succession planning"],"compliance-risk":["AML & KYC governance","Regulatory support","Compliance reviews"],"corporate-finance-advisory":["Transaction advisory","Financial structuring","Cross-border execution"]},k=[{title:"Wealth Management",items:["Comprehensive wealth planning","Portfolio management","Asset allocation","Risk management","Investment planning"]},{title:"Investment Advisory",items:["Equities","Mutual funds","Fixed income","Alternative investments","Private equity","Venture capital","Pre-IPO investments"]},{title:"Family Office",items:["Single family office","Multi family office","Family governance","Consolidated reporting","Next-generation planning"]},{title:"Estate & Succession Planning",items:["Estate planning","Succession planning","Trust structures","Wealth transfer"]}],E={"entity-management":g,"banking-treasury":u,"private-credit-debt":f,"private-wealth":v,"compliance-risk":b,"corporate-finance-advisory":j};function C(){const{slug:i}=d(),t=p.find(e=>e.slug===i);if(!t)return n.jsx(m,{to:"/services",replace:!0});const l=E[t.slug]||t.icon,o=w[t.slug]||t.image,c=y[t.slug]||t.outcomes.slice(0,3);return n.jsxs("main",{className:`
        bg-[#FFFEFA]
        pt-[76px]
        text-[#0A1714]
      `,children:[n.jsxs("section",{className:`
          relative
          overflow-hidden
          border-b
          border-[#E1E5DF]
          bg-[#F8F6F0]
        `,children:[n.jsx("div",{className:"absolute inset-0 grid-texture opacity-40"}),n.jsxs("div",{className:`
            section-shell
            relative
            grid
            min-h-[500px]
            items-center
            gap-10
            py-12

            lg:grid-cols-[1.02fr_.98fr]
            lg:py-14
          `,children:[n.jsxs("div",{className:"max-w-[650px]",children:[n.jsx("p",{className:"section-kicker",children:t.eyebrow}),n.jsx("div",{className:`
                mt-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#0B5345]/15
                bg-[#EAF2EF]
                text-[#0B5345]
              `,children:n.jsx(l,{size:19})}),n.jsx("h1",{className:`
                mt-5
                max-w-[640px]
                font-serif
                text-[clamp(42px,5vw,68px)]
                font-normal
                leading-[.97]
                tracking-[-.045em]
                text-[#081A15]
              `,children:t.title}),n.jsx("p",{className:`
                mt-5
                max-w-[620px]
                text-[17px]
                leading-7
                text-[#5F6E69]

                md:text-[18px]
              `,children:t.description}),n.jsx("div",{className:`
                mt-6
                flex
                flex-wrap
                gap-x-5
                gap-y-2.5
              `,children:c.map(e=>n.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                    text-[13px]
                    font-semibold
                    text-[#41514C]
                  `,children:[n.jsx(N,{size:14,className:"text-[#0B5345]"}),e]},e))}),n.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[n.jsxs(a,{to:"/contact",className:`
                  group
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#0B5345]
                  px-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.09em]
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106756]
                `,children:["Discuss Your Objective",n.jsx(r,{size:13,className:`
                    transition-transform
                    group-hover:translate-x-1
                  `})]}),n.jsx(a,{to:"/services",className:`
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#0B5345]/20
                  bg-white
                  px-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.09em]
                  text-[#0B5345]

                  transition-all
                  duration-300

                  md:hover:-translate-y-0.5
                  md:hover:border-[#0B5345]/35
                  md:hover:bg-[#EDF4F1]
                  md:hover:shadow-[0_8px_20px_rgba(7,40,33,.06)]
                `,children:"All Solutions"})]})]}),n.jsxs("div",{className:`
              relative
              mx-auto
              w-full
              max-w-[590px]

              lg:mx-0
              lg:ml-auto
            `,children:[n.jsx("div",{"aria-hidden":"true",className:`
                pointer-events-none
                absolute
                -left-3
                -top-3
                h-20
                w-20
                rounded-tl-[24px]
                border-l
                border-t
                border-[#C9A95D]/35
              `}),n.jsx("div",{className:`
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#D8DED8]
                bg-[#E9ECE7]
                shadow-[0_24px_60px_rgba(6,38,31,.10)]
              `,children:n.jsxs("div",{className:`
                  relative
                  h-[330px]

                  sm:h-[360px]
                  lg:h-[390px]
                `,children:[n.jsx("img",{src:o,alt:`${t.title} financial advisory`,className:`
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.025]
                  `}),n.jsx("div",{className:`
                    absolute
                    inset-0
                    bg-[linear-gradient(
                      180deg,
                      transparent_40%,
                      rgba(4,25,20,.12)_72%,
                      rgba(4,25,20,.62)_100%
                    )]
                  `}),n.jsxs("div",{className:`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-center
                    justify-between
                    gap-4
                    p-5
                  `,children:[n.jsxs("div",{children:[n.jsx("p",{className:`
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.17em]
                        text-[#E4C77D]
                      `,children:"ORPHEUS FINANCIAL"}),n.jsx("p",{className:`
                        mt-1
                        font-serif
                        text-[18px]
                        font-normal
                        text-white
                      `,children:"Dubai-based. Internationally focused."})]}),n.jsx("div",{className:`
                      hidden
                      rounded-full
                      border
                      border-white/20
                      bg-black/15
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-white/80
                      backdrop-blur-sm

                      sm:block
                    `,children:t.eyebrow})]})]})})]})]})]}),n.jsx("section",{className:`
          bg-[#F7F4EC]
          py-16
          md:py-20
        `,children:n.jsxs("div",{className:`
            section-shell
            grid
            gap-12

            lg:grid-cols-[.82fr_1.18fr]
          `,children:[n.jsxs("div",{children:[n.jsx("p",{className:"section-kicker",children:"WHAT WE HANDLE"}),n.jsx("h2",{className:`
                section-title
                max-w-[520px]
              `,children:"A clear mandate, designed around execution."}),n.jsx("p",{className:`
                section-copy
                max-w-[550px]
              `,children:"We combine commercial structuring with practical implementation. The goal is not a document or incorporation in isolation — it is an architecture that works with banks, counterparties, regulators and the client's wider strategy."})]}),n.jsx("div",{className:`
              grid
              gap-4
              sm:grid-cols-2
            `,children:t.outcomes.map((e,s)=>n.jsxs("div",{className:`
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-white
                    p-6

                    transition-all
                    duration-300

                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
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

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    `}),n.jsx("span",{className:`
                      text-[12px]
                      font-bold
                      tracking-[.12em]
                      text-[#B48D34]
                    `,children:String(s+1).padStart(2,"0")}),n.jsx("h3",{className:`
                      mt-4
                      font-serif
                      text-[25px]
                      font-normal
                      leading-[1.07]
                      text-[#0A1714]
                    `,children:e}),n.jsx("p",{className:`
                      mt-3
                      text-[15px]
                      leading-6
                      text-[#687671]
                    `,children:"Structured around documentation, governance, counterparties and implementation requirements."})]},e))})]})}),t.slug==="private-wealth"&&n.jsx("section",{className:"bg-white py-16 md:py-20",children:n.jsxs("div",{className:"section-shell",children:[n.jsxs("div",{className:"max-w-[720px]",children:[n.jsx("p",{className:"section-kicker",children:"PRIVATE WEALTH CAPABILITIES"}),n.jsx("h2",{className:"section-title",children:"From wealth planning to family continuity."}),n.jsx("p",{className:"section-copy",children:"The Private Wealth mandate now reflects the full 3 September scope: wealth management, investment advisory, family office services, and estate and succession planning."})]}),n.jsx("div",{className:"mt-8 grid gap-4 md:grid-cols-2",children:k.map(e=>n.jsxs("article",{className:`
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-[#F9FAF7]
                    p-5

                    transition-all
                    duration-300

                    md:p-6
                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:bg-white
                    md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
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

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    `}),n.jsx("h3",{className:"font-serif text-[25px] font-normal",children:e.title}),n.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:e.items.map(s=>n.jsx("span",{className:"rounded-full border border-[#DDE3DE] bg-white px-3 py-2 text-[12px] font-semibold text-[#42534D]",children:s},s))})]},e.title))})]})}),n.jsx("section",{className:`
          bg-white
          py-16
          md:py-20
        `,children:n.jsxs("div",{className:"section-shell",children:[n.jsx("p",{className:"section-kicker",children:"OUR PROCESS"}),n.jsx("h2",{className:`
              mt-3
              max-w-[620px]
              font-serif
              text-[clamp(34px,4vw,52px)]
              font-normal
              leading-[1.02]
            `,children:"Structured from objective to execution."}),n.jsx("div",{className:`
              mt-8
              grid
              gap-4

              sm:grid-cols-2
              lg:grid-cols-4
            `,children:x.map(e=>n.jsxs("div",{className:`
                  group/card
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#DDE3DE]
                  bg-[#FFFEFA]
                  p-6

                  transition-all
                  duration-300

                  md:hover:-translate-y-1
                  md:hover:border-[#0B5345]/25
                  md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
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

                    bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                    transition-transform
                    duration-300

                    md:block
                    md:group-hover/card:scale-x-100
                  `}),n.jsx("span",{className:`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B5345]
                    text-[12px]
                    font-bold
                    text-white
                  `,children:e.no}),n.jsx("h3",{className:`
                    mt-5
                    font-serif
                    text-[24px]
                    font-normal
                  `,children:e.title}),n.jsx("p",{className:`
                    mt-3
                    text-[15px]
                    leading-6
                    text-[#6A7773]
                  `,children:e.text})]},e.no))})]})}),n.jsx("section",{className:`
          bg-[#F7F4EC]
          py-16
          md:py-20
        `,children:n.jsxs("div",{className:"section-shell",children:[n.jsxs("div",{className:`
              flex
              flex-col
              justify-between
              gap-5

              md:flex-row
              md:items-end
            `,children:[n.jsxs("div",{children:[n.jsx("p",{className:"section-kicker",children:"CROSS-BORDER CONTEXT"}),n.jsx("h2",{className:`
                  mt-3
                  font-serif
                  text-[clamp(34px,4vw,52px)]
                  font-normal
                `,children:"Related jurisdictions."})]}),n.jsxs(a,{to:"/contact",className:"micro-link",children:["Need a comparison?",n.jsx(r,{size:13})]})]}),n.jsx("div",{className:`
              mt-8
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            `,children:h.map(e=>n.jsxs(a,{to:`/jurisdictions/${e.slug}`,className:`
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-white
                    p-5

                    transition-all
                    duration-300

                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:shadow-[0_15px_38px_rgba(7,40,33,.07)]
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

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    `}),n.jsx("p",{className:`
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.15em]
                      text-[#0B5345]
                    `,children:e.kicker}),n.jsx("h3",{className:`
                      mt-3
                      font-serif
                      text-[25px]
                      font-normal
                    `,children:e.title}),n.jsx("p",{className:`
                      mt-3
                      text-[14px]
                      leading-5
                      text-[#687671]
                    `,children:e.description}),n.jsxs("span",{className:`
                      micro-link
                      mt-5
                    `,children:["Explore",n.jsx(r,{size:11})]})]},e.slug))})]})}),n.jsx("section",{className:`
          bg-[#071813]
          py-12
          text-white
        `,children:n.jsx("div",{className:`
            section-shell
            flex
            flex-col
            justify-between
            gap-6

            md:flex-row
            md:items-center
          `,children:n.jsxs("div",{children:[n.jsx("p",{className:`
                font-serif
                text-[28px]
                font-normal
              `,children:"Need advice on the right structure?"}),n.jsx("p",{className:`
                mt-2
                text-[15px]
                text-white/55
              `,children:"Start with the commercial objective before choosing the structure."})]})})})]})}export{C as default};
