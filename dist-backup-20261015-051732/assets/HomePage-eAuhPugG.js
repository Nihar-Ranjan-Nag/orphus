import{u as B,j as n,m as a,A as E}from"./vendor-motion-DOog03i2.js";import{L as m,r as v}from"./vendor-react-7W1FQkv_.js";import{c as _,A as c,t as D,a as j,s as A,p as F,L as I,B as z,N as C,E as S,j as O,i as T,b as V,S as M,d as L}from"./index-1u8dyd9n.js";import{C as R,a as H}from"./announcements-HaVMayY5.js";import{C as U}from"./check-r0sd6pez.js";import{c as $}from"./capabilityServices-D6tBNOq3.js";import{S as K}from"./sparkles-CiBJnKy4.js";import"./vendor-gsap-DSpwt0cg.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=_("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);function G({announcement:t,variant:l="compact",announcementOptions:o,onAnnouncementChange:d}){const i=B(),h=o&&o.length>0?o:[t];return l==="compact"?n.jsxs(a.article,{initial:i?!1:{opacity:0,x:-30},whileInView:i?void 0:{opacity:1,x:0},viewport:{once:!0,amount:.35},transition:{duration:.65,ease:[.22,1,.36,1]},className:`
          group
          relative
          w-full
          min-w-0
          overflow-hidden

          rounded-[20px]

          border
          border-[#D8B867]/35

          bg-[#07251E]

          text-white

          shadow-[0_18px_55px_rgba(7,40,33,.16)]

          sm:rounded-[22px]
        `,children:[n.jsx("div",{"aria-hidden":"true",className:`
            absolute
            inset-y-0
            left-0

            w-1.5

            bg-[linear-gradient(180deg,#F1D98F,#B98B31,#6CB8A3)]
          `}),n.jsx(a.div,{"aria-hidden":"true",className:`
            pointer-events-none
            absolute
            -right-16
            -top-24

            h-64
            w-64

            rounded-full

            bg-[#D8B867]/15

            blur-[70px]
          `,animate:i?void 0:{scale:[1,1.12,1],opacity:[.45,.75,.45]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),n.jsxs("div",{className:`
            relative

            flex
            min-w-0
            flex-col

            gap-4

            px-5
            py-5

            sm:px-7

            md:flex-row
            md:items-center
            md:gap-6
            md:py-6

            lg:gap-8
            lg:px-8
            lg:py-5

            xl:px-9
            xl:py-6
          `,children:[n.jsxs("div",{className:`
              flex
              min-w-0
              flex-1

              items-start
              gap-4

              lg:items-center
              lg:gap-5
            `,children:[n.jsxs("span",{className:`
                relative
                mt-0.5

                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#D8B867]

                text-[#071813]

                shadow-[0_10px_28px_rgba(216,184,103,.22)]

                lg:mt-0
                lg:h-12
                lg:w-12

                xl:h-[52px]
                xl:w-[52px]
              `,children:[n.jsx(N,{size:18,className:`
                  lg:size-[20px]
                  xl:size-[21px]
                `}),n.jsx(a.span,{"aria-hidden":"true",className:`
                  absolute
                  -right-0.5
                  -top-0.5

                  h-3
                  w-3

                  rounded-full

                  border-2
                  border-[#07251E]

                  bg-[#72D6B8]

                  lg:h-3.5
                  lg:w-3.5
                `,animate:i?void 0:{scale:[1,1.35,1],opacity:[1,.65,1]},transition:{duration:1.8,repeat:1/0}})]}),n.jsxs("div",{className:"min-w-0",children:[n.jsxs("div",{className:`
                  flex
                  flex-wrap
                  items-center

                  gap-x-3
                  gap-y-1.5

                  lg:gap-x-4
                `,children:[n.jsx("p",{className:`
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[.2em]

                    text-[#E7CC83]

                    lg:text-[10px]

                    xl:text-[10.5px]
                  `,children:t.eyebrow}),n.jsx("span",{className:`
                    h-1
                    w-1

                    rounded-full

                    bg-white/25
                  `}),n.jsx("span",{className:`
                    text-[9px]
                    font-semibold

                    text-white/42

                    lg:text-[11px]
                    lg:text-white/55

                    xl:text-[11.5px]
                  `,children:t.date})]}),n.jsx("h2",{className:`
                  mt-1.5

                  font-serif
                  text-[clamp(21px,2.5vw,29px)]
                  font-normal
                  leading-[1.08]
                  tracking-[-.02em]

                  text-white

                  lg:mt-2
                  lg:text-[30px]
                  lg:leading-[1.08]

                  xl:text-[32px]
                `,children:t.title}),n.jsx("p",{className:`
                  mt-2
                  max-w-[760px]

                  text-[12px]
                  leading-5

                  text-white/58

                  md:text-[13px]

                  lg:mt-2.5
                  lg:max-w-[900px]
                  lg:text-[15px]
                  lg:leading-6
                  lg:text-white/68

                  xl:text-[15.5px]
                  xl:leading-7
                `,children:t.homeSummary})]})]}),n.jsxs(m,{to:`/blog#announcement-${t.id}`,className:`
              inline-flex
              min-h-11
              w-full
              shrink-0

              items-center
              justify-center
              gap-2

              self-start

              rounded-xl

              border
              border-[#D8B867]/30

              bg-[#D8B867]/10

              px-4

              text-[9px]
              font-extrabold
              uppercase
              tracking-[.12em]

              text-[#F0D88F]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#D8B867]/60
              hover:bg-[#D8B867]
              hover:text-[#071813]

              sm:w-auto

              md:self-center

              lg:min-h-12
              lg:px-5
              lg:text-[10px]

              xl:px-6
              xl:text-[10.5px]
            `,children:["View details",n.jsx(c,{size:12,className:`
                transition-transform
                duration-300

                group-hover:translate-x-1

                lg:size-[13px]
              `})]})]})]}):n.jsx(a.article,{id:`announcement-${t.id}`,initial:i?!1:{opacity:0,y:34},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.75,ease:[.22,1,.36,1]},className:`
        relative
        w-full
        min-w-0

        scroll-mt-28

        overflow-hidden

        rounded-[22px]

        border
        border-[#D8DED8]

        bg-[#F8F6F0]

        shadow-[0_28px_80px_rgba(7,40,33,.1)]

        sm:rounded-[30px]
      `,children:n.jsxs("div",{className:`
          grid

          lg:grid-cols-[320px_minmax(0,1fr)]
        `,children:[n.jsxs(a.aside,{initial:i?!1:{opacity:0,x:-24},whileInView:i?void 0:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.65,delay:.12},className:`
            relative
            min-w-0
            overflow-hidden

            bg-[#06251E]

            p-5

            text-white

            sm:p-8

            lg:min-h-full
            lg:p-9
          `,children:[n.jsx("div",{"aria-hidden":"true",className:`
              absolute
              inset-0

              opacity-[0.08]
            `,style:{backgroundImage:"linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",backgroundSize:"52px 52px"}}),n.jsx(a.div,{"aria-hidden":"true",className:`
              absolute
              -bottom-20
              -right-20

              h-56
              w-56

              rounded-full

              bg-[#D8B867]/20

              blur-[70px]
            `,animate:i?void 0:{scale:[1,1.15,1],opacity:[.45,.8,.45]},transition:{duration:5.5,repeat:1/0,ease:"easeInOut"}}),n.jsxs("div",{className:`
              relative
              z-10

              flex
              h-full
              flex-col
            `,children:[n.jsx(a.span,{className:`
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-full

                bg-[linear-gradient(145deg,#F2D98F,#C49940)]

                text-[#071813]

                shadow-[0_14px_38px_rgba(216,184,103,.28)]
              `,animate:i?void 0:{y:[0,-4,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:n.jsx(N,{size:22})}),n.jsxs("div",{className:"mt-8",children:[n.jsx("p",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[.22em]

                  text-[#E8CE87]
                `,children:"Browse announcements"}),n.jsx("p",{className:`
                  mt-2

                  text-[11px]
                  leading-5

                  text-white/45
                `,children:"Select a date to view the complete update."}),n.jsx("div",{className:`
                  -mx-1
                  mt-5

                  flex
                  snap-x
                  snap-mandatory
                  gap-2

                  overflow-x-auto

                  px-1
                  pb-3

                  [scrollbar-width:none]

                  [&::-webkit-scrollbar]:hidden

                  lg:mx-0
                  lg:flex-col
                  lg:overflow-visible
                  lg:px-0
                  lg:pb-0
                `,children:h.map(s=>{const p=s.id===t.id;return n.jsxs(a.button,{type:"button","aria-pressed":p,onClick:()=>d==null?void 0:d(s.id),whileTap:i?void 0:{scale:.98},className:`
                        min-w-[210px]
                        max-w-[calc(100vw-82px)]

                        snap-start

                        rounded-xl

                        border

                        px-4
                        py-3

                        text-left

                        transition-all
                        duration-300

                        lg:min-w-0
                        lg:max-w-none

                        ${p?"border-[#D8B867]/55 bg-[#D8B867] text-[#071813] shadow-[0_12px_30px_rgba(216,184,103,.18)]":"border-white/10 bg-white/[.045] text-white hover:border-white/20 hover:bg-white/[.075]"}
                      `,children:[n.jsxs("span",{className:`
                          flex
                          items-center
                          gap-2

                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[.12em]

                          ${p?"text-[#0B5345]":"text-[#8DC6B5]"}
                        `,children:[n.jsx(R,{size:12}),s.date]}),n.jsx("span",{className:`
                          mt-2

                          block

                          line-clamp-2

                          font-serif
                          text-[15px]
                          leading-[1.2]

                          ${p?"text-[#071813]":"text-white/72"}
                        `,children:s.title})]},s.id)})})]}),n.jsxs("div",{className:`
                mt-8

                border-t
                border-white/10

                pt-6

                lg:mt-auto
              `,children:[n.jsx("p",{className:`
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.18em]

                  text-white/35
                `,children:"Published by"}),n.jsx("p",{className:`
                  mt-2

                  font-serif
                  text-[20px]

                  text-white
                `,children:"Orpheus Advisory Desk"})]})]})]}),n.jsx(E,{mode:"wait",initial:!1,children:n.jsxs(a.div,{initial:i?!1:{opacity:0,x:22},animate:{opacity:1,x:0},exit:i?void 0:{opacity:0,x:-14},transition:{duration:i?0:.3,ease:[.22,1,.36,1]},className:`
              relative
              min-w-0

              p-5

              sm:p-9

              lg:p-11

              xl:p-14
            `,children:[n.jsx("div",{"aria-hidden":"true",className:`
                absolute
                right-0
                top-0

                h-1
                w-2/3

                bg-[linear-gradient(90deg,transparent,#D8B867)]
              `}),n.jsxs(a.div,{initial:i?!1:{opacity:0,y:18},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[n.jsx("p",{className:"section-kicker",children:t.eyebrow}),n.jsx("h2",{className:`
                  mt-4
                  max-w-[850px]

                  break-words

                  font-serif
                  text-[clamp(30px,4.6vw,58px)]
                  font-normal
                  leading-[1]
                  tracking-[-.035em]

                  text-[#0A1714]

                  sm:tracking-[-.04em]
                `,children:t.title}),n.jsx("p",{className:`
                  mt-6
                  max-w-[850px]

                  border-l-2
                  border-[#D8B867]

                  pl-4

                  text-[14px]
                  leading-7

                  text-[#465A53]

                  sm:pl-5

                  md:text-[17px]
                  md:leading-8
                `,children:t.summary})]}),n.jsx("div",{className:"mt-8 space-y-4",children:t.details.map((s,p)=>n.jsx(a.p,{initial:i?!1:{opacity:0,y:14},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.27+p*.08},className:`
                      max-w-[870px]

                      text-[14px]
                      leading-7

                      text-[#64736E]
                    `,children:s},s))}),n.jsxs(a.div,{initial:i?!1:{opacity:0,y:18},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.36},className:`
                mt-9

                rounded-[22px]

                border
                border-[#D9E0DB]

                bg-white

                p-5

                sm:p-6
              `,children:[n.jsx("p",{className:`
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]

                  text-[#A7802D]
                `,children:"What you can expect"}),n.jsx("div",{className:`
                  mt-4

                  grid
                  gap-3

                  md:grid-cols-3
                `,children:t.highlights.map(s=>n.jsxs("div",{className:`
                        flex
                        items-center
                        gap-3

                        rounded-xl

                        bg-[#EDF4F1]

                        px-4
                        py-3

                        text-[12px]
                        font-semibold

                        text-[#29443B]
                      `,children:[n.jsx("span",{className:`
                          flex
                          h-6
                          w-6
                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          bg-[#0B5345]

                          text-white
                        `,children:n.jsx(U,{size:12})}),s]},s))})]}),n.jsxs(m,{to:t.href??"/contact",className:`
                mt-8

                inline-flex
                min-h-12
                w-full

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-[#0B5345]

                px-5

                text-center
                text-[9px]
                font-extrabold
                uppercase
                tracking-[.13em]

                text-white

                shadow-[0_12px_30px_rgba(11,83,69,.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#0E6757]
                hover:shadow-[0_18px_38px_rgba(11,83,69,.25)]

                sm:w-auto
              `,children:[t.linkLabel??"Learn more",n.jsx(c,{size:13})]})]},t.id)})]})})}const W="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90",y="/dubai-bg.png";function P(){const[t,l]=v.useState(W);return n.jsxs("section",{className:"relative overflow-hidden bg-[#061711] pt-[76px] text-white",children:[n.jsxs("div",{className:`
          relative
          min-h-[500px]
          min-[390px]:min-h-[520px]
          sm:min-h-[580px]
          md:min-h-[600px]
          lg:min-h-[620px]
          xl:min-h-[640px]
        `,children:[n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("img",{src:t,alt:"Dubai skyline with Burj Khalifa",onError:()=>{t!==y&&l(y)},className:`
              h-full
              w-full
              object-cover
              object-[58%_top]
              brightness-[1.12]
              contrast-[1.04]
              saturate-[1.08]

              sm:object-[54%_top]
              md:object-[52%_top]
              lg:object-[55%_top]
              xl:object-[56%_top]
            `}),n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(90deg, rgba(3,22,16,0.94) 0%, rgba(3,22,16,0.90) 26%, rgba(3,22,16,0.78) 42%, rgba(3,22,16,0.58) 54%, rgba(3,22,16,0.24) 66%, rgba(3,22,16,0.06) 78%, rgba(3,22,16,0.00) 90%)"}}),n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(0deg, rgba(3,22,16,0.82) 0%, rgba(3,22,16,0.48) 12%, rgba(3,22,16,0.14) 28%, rgba(3,22,16,0) 42%)"}}),n.jsx("div",{className:"absolute inset-0 bg-[#0B5345]/[0.02]"}),n.jsx("div",{className:"absolute inset-0 md:hidden",style:{background:"linear-gradient(180deg, rgba(3,22,16,0.50) 0%, rgba(3,22,16,0.64) 46%, rgba(3,22,16,0.94) 100%)"}})]}),n.jsx("div",{className:`
            relative
            z-10
            mx-auto
            flex
            min-h-[500px]
            max-w-[1480px]
            items-center
            px-5
            py-8

            min-[390px]:min-h-[520px]

            sm:min-h-[580px]
            sm:py-10

            md:min-h-[600px]
            md:px-10
            md:py-12

            lg:min-h-[620px]

            xl:min-h-[640px]
            xl:px-16
          `,children:n.jsxs("div",{className:"w-full max-w-[720px]",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"h-px w-7 shrink-0 bg-[#D8B867]"}),n.jsx("p",{className:`
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]
                  text-[#D8B867]

                  sm:text-[11px]
                  md:text-[13px]
                  md:tracking-[.20em]
                `,children:"LEAD ARCHITECT. DIRECT EXECUTION."})]}),n.jsxs("h1",{className:`
                mt-4
                max-w-[760px]

                font-serif
                text-[clamp(38px,10.4vw,48px)]
                font-normal
                leading-[.98]
                tracking-[-.045em]

                text-white

                [text-shadow:0_2px_18px_rgba(0,0,0,.35)]

                min-[390px]:text-[clamp(40px,10vw,52px)]

                sm:mt-5
                sm:text-[clamp(48px,8vw,66px)]

                md:text-[clamp(56px,6.2vw,76px)]
                lg:text-[clamp(62px,5.3vw,76px)]
              `,children:[n.jsx("span",{className:"block",children:"Structuring capital,"})," ",n.jsx("span",{className:"block",children:"entities and wealth"})," ",n.jsx("span",{className:"block text-[#59B79E]",children:"across borders."})]}),n.jsx("p",{className:`
                mt-4
                max-w-[680px]

                text-[16px]
                leading-[1.78]

                text-white/82

                min-[390px]:text-[16.5px]

                md:mt-5
                md:text-[18.5px]
                md:leading-8
                md:text-white/84

                lg:text-[18px]
              `,children:"Orpheus Financial architects and executes complex corporate, banking, capital and private wealth solutions from Dubai. Our team leads each engagement from strategy and structuring through documentation, implementation and ongoing support — not simply introductions to third parties."}),n.jsx("div",{className:"mt-6 flex flex-wrap gap-3",children:n.jsxs(m,{to:"/services",className:`
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
                  tracking-[.085em]

                  text-white

                  shadow-[0_9px_24px_rgba(0,0,0,.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106856]

                  md:min-h-[48px]
                  md:px-6
                  md:text-[13px]
                `,children:["Explore Our Solutions",n.jsx(c,{size:13,className:`
                    transition-transform
                    duration-300

                    group-hover:translate-x-1

                    md:size-[14px]
                  `})]})})]})})]}),n.jsx("div",{className:"relative z-20 border-t border-white/10 bg-[#061711]",children:n.jsx("div",{className:`
            mx-auto
            max-w-[1480px]
            px-4

            sm:px-5
            md:px-10
            xl:px-16
          `,children:n.jsx("div",{className:`
              grid
              grid-cols-2
              border-x
              border-white/10

              md:grid-cols-4
            `,children:D.map((o,d)=>{const i=o.icon;return n.jsxs("div",{className:`
                    group

                    flex
                    min-h-[70px]
                    items-center
                    gap-2.5

                    px-3
                    py-3

                    transition-colors
                    duration-300

                    hover:bg-white/[0.018]

                    min-[390px]:min-h-[74px]
                    min-[390px]:gap-3
                    min-[390px]:px-4

                    sm:min-h-[84px]
                    sm:py-4

                    md:min-h-[124px]
                    md:items-start
                    md:gap-3
                    md:px-4
                    md:py-5

                    lg:min-h-[138px]
                    lg:gap-4
                    lg:px-5
                    lg:py-6

                    xl:min-h-[150px]
                    xl:px-6
                    xl:py-7

                    ${d%2===1?"border-l border-white/10":""}
                    ${d>1?"border-t border-white/10 md:border-t-0":""}
                    ${d>0?"md:border-l md:border-white/10":""}
                  `,children:[n.jsx("div",{className:`
                      flex
                      h-7
                      w-7
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#D8B867]/20

                      bg-[#D8B867]/[0.055]

                      md:h-9
                      md:w-9

                      lg:h-10
                      lg:w-10

                      xl:h-11
                      xl:w-11
                    `,children:n.jsx(i,{size:12,className:`
                        text-[#D8B867]

                        md:size-[16px]
                        lg:size-[18px]
                        xl:size-[19px]
                      `})}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("h3",{className:`
                        font-serif
                        text-[14px]
                        font-normal
                        leading-[1.08]

                        text-white

                        min-[390px]:text-[15px]

                        sm:text-[16px]

                        md:text-[17px]
                        md:leading-[1.15]

                        lg:text-[19px]

                        xl:text-[20px]
                      `,children:o.title}),n.jsx("p",{className:`
                        mt-1.5
                        hidden
                        max-w-[290px]

                        text-[12.5px]
                        leading-[1.55]

                        text-white/56

                        md:mt-2
                        md:block
                        md:text-[13.5px]
                        md:leading-[1.65]
                        md:text-white/60

                        lg:text-[14px]
                        lg:leading-[1.65]

                        xl:text-[14.5px]
                        xl:leading-[1.7]
                      `,children:o.text})]})]},o.title)})})})})]})}const q={sm:"max-h-10 max-w-full",md:"max-h-14 max-w-full md:max-h-16",lg:"max-h-16 max-w-full md:max-h-[72px]",xl:"max-h-20 max-w-full md:max-h-24"};function Q({src:t,alt:l,variant:o="light",size:d="md",className:i,padded:h}){const p=h??o==="dark";return n.jsx("div",{className:j("flex shrink-0 items-center justify-center",p&&"rounded-xl bg-white/[0.96] px-4 py-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.14)] md:px-5 md:py-3",i),children:n.jsx("img",{src:t,alt:l,loading:"lazy",decoding:"async",className:j(q[d],"w-auto h-auto max-w-full object-contain object-center transition-opacity duration-300",p?"opacity-100":"opacity-90 hover:opacity-100")})})}const f=[{name:"U Remit",src:"/uremit-removebg-preview.png"},{name:"Konsälidön",src:"/konsilodon-removebg-preview.png"},{name:"Vantage",src:"/vantage-removebg-preview.png"},{name:"Axiom",src:"/axiom-removebg-preview.png"},{name:"Meridian",src:"/Meridian%20Logo.gif"}],Y=!1,u={hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:.03}}},b={hidden:{opacity:0,y:22,scale:.985},visible:{opacity:1,y:0,scale:1}},k=[{code:"AE",name:"UAE",flag:"https://flagcdn.com/w80/ae.png"},{code:"IN",name:"India",flag:"https://flagcdn.com/w80/in.png"},{code:"GB",name:"United Kingdom",flag:"https://flagcdn.com/w80/gb.png"},{code:"SG",name:"Singapore",flag:"https://flagcdn.com/w80/sg.png"},{code:"HK",name:"Hong Kong",flag:"https://flagcdn.com/w80/hk.png"},{code:"CA",name:"Canada",flag:"https://flagcdn.com/w80/ca.png"},{code:"SA",name:"Saudi Arabia",flag:"https://flagcdn.com/w80/sa.png"},{code:"QA",name:"Qatar",flag:"https://flagcdn.com/w80/qa.png"},{code:"BH",name:"Bahrain",flag:"https://flagcdn.com/w80/bh.png"},{code:"OM",name:"Oman",flag:"https://flagcdn.com/w80/om.png"},{code:"VG",name:"BVI",flag:"https://flagcdn.com/w80/vg.png"},{code:"SC",name:"Seychelles",flag:"https://flagcdn.com/w80/sc.png"},{code:"KY",name:"Cayman Islands",flag:"https://flagcdn.com/w80/ky.png"},{code:"MU",name:"Mauritius",flag:"https://flagcdn.com/w80/mu.png"},{code:"KE",name:"Kenya",flag:"https://flagcdn.com/w80/ke.png"},{code:"US",name:"United States",flag:"https://flagcdn.com/w80/us.png"}];function rn(){const t=B(),[l,o]=v.useState(!1);v.useState(!1);const[d,i]=v.useState(""),h=H.find(e=>e.active),s=e=>{e.preventDefault(),d.trim()&&(L({title:"Subscribed to Market Insights",description:"You’ll receive new Orpheus market and firm updates at this email address."}),i(""))};return n.jsxs("main",{className:"overflow-hidden bg-[#FFFEFA] text-[#0A1714]",children:[n.jsx(P,{}),n.jsx("section",{className:`
          overflow-hidden
          border-b
          border-[#E2E6E1]
          bg-white

          py-8

          md:py-11

          lg:py-12
        `,children:n.jsx("div",{className:"section-shell",children:n.jsxs(a.div,{initial:t?!1:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.55},className:`
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-center
              lg:gap-10

              xl:gap-14
            `,children:[n.jsxs("div",{className:`
                max-w-[330px]
                shrink-0

                lg:w-[350px]
                lg:max-w-[350px]
              `,children:[n.jsx("p",{className:"section-kicker",children:"CLIENT TRUST"}),n.jsx("h2",{className:`
                  mt-2

                  font-serif
                  text-[clamp(27px,3vw,40px)]
                  font-normal
                  leading-[1.03]
                `,children:"Trusted by businesses."})]}),n.jsx("div",{className:`
                -mx-5
                min-w-0
                flex-1
                overflow-hidden

                lg:mx-0
              `,children:n.jsx("div",{className:`
                  client-logo-marquee

                  flex
                  w-max
                  items-center
                  gap-3

                  px-5

                  lg:gap-4
                  lg:px-0
                `,children:[...f,...f].map((e,r)=>n.jsx("div",{"aria-hidden":r>=f.length,className:`
                      group

                      flex
                      h-[72px]
                      w-[150px]
                      shrink-0

                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-[#E2E7E2]

                      bg-[#FCFCF9]

                      px-4

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#0B5345]/25
                      hover:bg-white
                      hover:shadow-[0_14px_32px_rgba(7,40,33,.09)]

                      lg:h-[90px]
                      lg:w-[190px]
                      lg:px-5

                      xl:h-[96px]
                      xl:w-[205px]
                    `,children:n.jsx(Q,{src:e.src,alt:e.name,variant:"light",size:"md",padded:!1,className:"w-full"})},`${e.name}-${r}`))})})]})})}),n.jsxs("section",{className:`
    relative
    overflow-hidden
    bg-[#F7F4EC]
    py-14
    sm:py-16
    md:py-20
    lg:py-24
  `,children:[n.jsx("div",{"aria-hidden":"true",className:`
      absolute
      inset-0
      grid-texture
      opacity-40
    `}),n.jsxs("div",{className:"section-shell relative",children:[n.jsxs(a.div,{initial:t?!1:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.6,ease:[.22,1,.36,1]},className:`
        mx-auto
        max-w-[820px]
        text-center
      `,children:[n.jsx("p",{className:"section-kicker",children:"OUR SOLUTIONS"}),n.jsx("h2",{className:`
          section-title
          lg:text-[46px]
          lg:leading-[1.04]
          xl:text-[50px]
        `,children:"Three pillars. One accountable advisory relationship."}),n.jsx("p",{className:`
          section-copy
          mx-auto
          lg:max-w-[780px]
          lg:text-[18px]
          lg:leading-8
          lg:text-[#52645E]
        `,children:"Orpheus acts as lead architect and executor across corporate structuring, banking and capital, and private wealth — with specialist services available inside each pillar."})]}),n.jsx(a.div,{variants:u,initial:t?!1:"hidden",whileInView:t?void 0:"visible",viewport:{once:!0,amount:.08},className:`
        mt-9
        grid
        grid-cols-1
        gap-5
        md:mt-10
        md:grid-cols-2
        lg:grid-cols-3
        lg:gap-6
        xl:gap-7
      `,children:A.map((e,r)=>{const g=e.icon;return n.jsxs(a.article,{variants:b,transition:{duration:.35,ease:[.22,1,.36,1]},className:`
              group/card
              relative
              flex
              flex-col
              overflow-hidden
              rounded-[22px]

              border
              border-[#DCE2DC]

              bg-white

              p-5

              shadow-[0_10px_28px_rgba(7,40,33,.04)]

              transition-[border-color,box-shadow,background-color,transform]
              duration-300

              sm:p-6

              md:min-h-[500px]
              md:hover:-translate-y-2
              md:hover:border-[#0B5345]/40
              md:hover:bg-[#FEFFFD]
              md:hover:shadow-[0_28px_60px_rgba(7,40,33,.14)]

              lg:min-h-[520px]
              lg:p-6
            `,children:[n.jsx("div",{"aria-hidden":"true",className:`
                pointer-events-none
                absolute
                left-0
                top-0
                z-20

                hidden
                h-[4px]
                w-full

                origin-left
                scale-x-0

                bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_58%,#D8B867_100%)]

                transition-transform
                duration-500
                ease-out

                md:block
                md:group-hover/card:scale-x-100
              `}),n.jsx("div",{"aria-hidden":"true",className:`
                pointer-events-none
                absolute
                -right-20
                -top-20

                hidden
                h-48
                w-48

                rounded-full
                bg-[#69B7A1]/0
                blur-[70px]

                transition-colors
                duration-500

                md:block
                md:group-hover/card:bg-[#69B7A1]/10
              `}),n.jsxs("span",{"aria-hidden":"true",className:`
                pointer-events-none
                absolute
                right-5
                top-4

                font-serif
                text-[48px]
                leading-none

                text-[#0B5345]/[.045]

                transition-all
                duration-300

                md:group-hover/card:-translate-x-1
                md:group-hover/card:text-[#0B5345]/[.08]

                lg:text-[58px]
              `,children:["0",r+1]}),n.jsx("span",{className:`
                relative
                z-10

                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#0B5345]/10

                bg-[#EAF2EF]
                text-[#0B5345]

                transition-all
                duration-300

                md:group-hover/card:border-[#0B5345]
                md:group-hover/card:bg-[#0B5345]
                md:group-hover/card:text-white

                lg:h-12
                lg:w-12
              `,children:n.jsx(g,{size:18})}),n.jsx("p",{className:`
                relative
                z-10

                mt-6

                text-[11px]
                font-extrabold
                uppercase
                tracking-[.18em]

                text-[#A7802D]

                lg:text-[12px]
              `,children:e.eyebrow}),n.jsx("h3",{className:`
                relative
                z-10

                mt-2

                font-serif
                text-[30px]
                font-normal
                leading-[1.04]

                text-[#102A23]

                transition-colors
                duration-300

                md:group-hover/card:text-[#0B5345]

                sm:text-[33px]

                lg:min-h-[74px]
                lg:text-[35px]
              `,children:e.title}),n.jsx("p",{className:`
                relative
                z-10

                mt-3

                text-[15px]
                leading-6

                text-[#5A6C66]

                transition-colors
                duration-300

                md:group-hover/card:text-[#40544D]

                sm:text-[16px]

                lg:min-h-[100px]
                lg:text-[16px]
                lg:leading-6
              `,children:e.description}),n.jsxs("div",{className:`
                relative
                z-10

                mt-5

                border-t
                border-[#E4E8E4]

                pt-4
              `,children:[n.jsx("p",{className:`
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[.16em]

                  text-[#8A948F]
                `,children:"Specialist services"}),n.jsx("div",{className:`
                  mt-3
                  grid
                  gap-2
                `,children:e.capabilities.map(x=>{var w;return n.jsxs(m,{to:`/services/capability/${((w=$[x])==null?void 0:w.slug)??""}`,className:`
                      group/item
                      relative

                      flex
                      min-h-[48px]
                      w-full

                      items-center
                      justify-between
                      gap-3

                      overflow-hidden
                      rounded-xl

                      border
                      border-transparent

                      bg-[#F5F7F4]

                      px-4
                      py-3

                      text-[13px]
                      font-semibold
                      leading-[1.35]

                      text-[#263833]

                      transition-all
                      duration-300

                      sm:min-h-[50px]
                      sm:text-[14px]

                      md:hover:translate-x-1
                      md:hover:border-[#0B5345]/18
                      md:hover:bg-[#EAF2EF]
                      md:hover:text-[#0B5345]
                      md:hover:shadow-[0_7px_18px_rgba(7,40,33,.06)]

                      lg:min-h-[52px]
                      lg:text-[15px]
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
                        ease-out

                        md:block
                        md:group-hover/item:scale-x-100
                      `}),n.jsx("span",{className:"relative z-10 min-w-0 flex-1",children:x}),n.jsx(c,{size:13,className:`
                        relative
                        z-10

                        shrink-0

                        text-[#50655E]

                        transition-all
                        duration-300

                        md:group-hover/item:translate-x-1
                        md:group-hover/item:text-[#0B5345]
                      `})]},x)})})]})]},e.slug)})})]})]}),n.jsx("section",{className:`
          bg-white

          py-16

          md:py-24
        `,children:n.jsxs("div",{className:`
            section-shell

            grid
            gap-8

            lg:grid-cols-[.9fr_1.1fr]
            lg:items-center
            lg:gap-14
          `,children:[n.jsxs(a.div,{initial:t?!1:{opacity:0,x:-24},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.6},children:[n.jsx("p",{className:"section-kicker",children:"HOW WE WORK"}),n.jsx("h2",{className:`
                section-title
                max-w-[620px]
              `,children:"We architect the solution and stay accountable for execution."}),n.jsx("p",{className:`
                section-copy
                max-w-[650px]

                lg:text-[18px]
                lg:leading-8
                lg:text-[#51635D]

                xl:text-[17px]
              `,children:"Orpheus is not a passive introducer. Our team defines the structure, prepares the roadmap, manages documentation and leads implementation through to completion."}),n.jsx("div",{className:`site-card 
                mt-5

                rounded-2xl

                border
                border-[#D8B867]/30

                bg-[#FBF7EA]

                p-4

                md:p-5
              `,children:n.jsxs("p",{className:`
                  flex
                  items-start
                  gap-3

                  text-[14px]
                  font-semibold
                  leading-5

                  text-[#33443F]

                  md:text-[15px]
                  md:leading-6

                  lg:text-[16px]
                  lg:leading-7
                `,children:[n.jsx(K,{size:16,className:`
                    mt-0.5
                    shrink-0
                    text-[#A7802D]
                  `}),"One Orpheus team owns the engagement from architecture through execution and ongoing support."]})})]}),n.jsx(a.div,{variants:u,initial:t?!1:"hidden",whileInView:t?void 0:"visible",viewport:{once:!0,amount:.1},className:`
              grid
              grid-cols-2
              gap-3

              md:gap-4

              lg:gap-5
            `,children:F.map(e=>n.jsxs(a.article,{variants:b,whileHover:t?void 0:{y:-6,scale:1.01},className:`
                  group

                  rounded-[18px]

                  border
                  border-[#E1E5E1]

                  bg-[#F9FAF7]

                  p-4

                  transition-[background-color,border-color,box-shadow]
                  duration-300

                  hover:border-[#0B5345]/25
                  hover:bg-white
                  hover:shadow-[0_18px_40px_rgba(7,40,33,.09)]

                  md:p-5

                  lg:p-6
                `,children:[n.jsx("span",{className:`
                    inline-flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B5345]

                    text-[11px]
                    font-extrabold
                    text-white
                  `,children:e.no}),n.jsx("h3",{className:`
                    mt-3

                    font-serif
                    text-[21px]
                    font-normal
                    leading-tight

                    transition-colors

                    group-hover:text-[#0B5345]

                    md:text-[25px]

                    lg:text-[28px]
                  `,children:e.title}),n.jsx("p",{className:`
                    mt-2

                    text-[10.5px]
                    leading-[1.55]

                    text-[#667570]

                    sm:text-[13px]

                    md:text-[14px]

                    lg:text-[16px]
                    lg:leading-6
                    lg:text-[#52645E]
                  `,children:e.text})]},e.no))})]})}),n.jsxs("section",{className:`
          relative
          overflow-hidden

          bg-[linear-gradient(135deg,#061B15_0%,#0B5345_58%,#0E6354_100%)]

          py-14

          text-white

          md:py-20
        `,children:[n.jsx("div",{className:"absolute inset-0 grid-texture-dark opacity-30"}),n.jsxs("div",{className:`
            section-shell
            relative

            grid
            gap-8

            lg:grid-cols-[1fr_.9fr]
            lg:items-center
            lg:gap-12
          `,children:[n.jsxs(a.div,{initial:t?!1:{opacity:0,x:-24},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[n.jsx("p",{className:"section-kicker-gold",children:"DUBAI AT THE CENTRE"}),n.jsxs("h2",{className:`
                mt-4
                max-w-[720px]

                font-serif
                text-[clamp(40px,5vw,64px)]
                font-normal
                leading-[1.01]
                tracking-[-.04em]
              `,children:["Our hub for"," ",n.jsx("span",{className:"italic text-[#78C9B2]",children:"cross-border execution."})]}),n.jsx("p",{className:`
                mt-6
                max-w-[660px]

                text-[17px]
                leading-7

                text-white/75

                md:text-[18px]

                lg:text-[17px]
                lg:leading-8
                lg:text-white/82
              `,children:"Dubai sits at the centre of Orpheus' operating model: a base for corporate structuring, international banking, capital connectivity and private wealth solutions spanning the GCC, Asia, Europe and Africa."})]}),n.jsx(a.div,{variants:u,initial:t?!1:"hidden",whileInView:t?void 0:"visible",viewport:{once:!0,amount:.1},className:`
              grid
              grid-cols-2
              gap-3

              lg:gap-4
            `,children:[[I,"Banking","Institutional access and treasury architecture"],[z,"Structuring","UAE and international legal vehicles"],[C,"Capital","Debt, transactions and strategic finance"],[S,"Wealth","Family, succession and global wealth planning"]].map(([e,r,g])=>{const x=e;return n.jsxs(a.div,{variants:b,whileHover:t?void 0:{y:-6,scale:1.015},className:`
                      group

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[.05]

                      p-4

                      backdrop-blur-sm

                      transition-[background-color,border-color,box-shadow]
                      duration-300

                      hover:border-[#D8B867]/30
                      hover:bg-white/[.09]
                      hover:shadow-[0_16px_36px_rgba(0,0,0,.12)]

                      md:p-5

                      lg:p-6
                    `,children:[n.jsx(x,{size:18,className:`
                        text-[#E4CB8A]

                        transition-transform
                        duration-300

                        group-hover:scale-110
                      `}),n.jsx("h3",{className:`
                        mt-3

                        font-serif
                        text-[20px]
                        font-normal

                        md:text-[22px]

                        lg:text-[27px]
                      `,children:String(r)}),n.jsx("p",{className:`
                        mt-2

                        text-[13px]
                        leading-5

                        text-white/60

                        lg:text-[16px]
                        lg:leading-6
                        lg:text-white/75
                      `,children:String(g)})]},String(r))})})]})]}),n.jsxs("section",{className:`
    relative
    overflow-hidden
    bg-[#F7F4EC]
    py-16
    md:py-24
  `,children:[n.jsx("div",{"aria-hidden":"true",className:`
      absolute
      inset-0
      grid-texture
      opacity-45
    `}),n.jsxs("div",{className:"section-shell relative",children:[n.jsxs(a.div,{initial:t?!1:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.55,ease:[.22,1,.36,1]},className:"max-w-[780px]",children:[n.jsx("p",{className:"section-kicker",children:"FEATURED JURISDICTIONS"}),n.jsx("h2",{className:"section-title",children:"Use the right legal vehicle for the objective."}),n.jsx("p",{className:`
          section-copy

          lg:text-[18px]
          lg:leading-8
          lg:text-[#52645E]
        `,children:"UAE is consolidated as the primary regional hub with Mainland, DIFC and ADGM routes inside it. BVI and Seychelles remain direct international jurisdiction options."})]}),n.jsx(a.div,{variants:u,initial:t?!1:"hidden",whileInView:t?void 0:"visible",viewport:{once:!0,amount:.08},className:`
        mt-10

        grid
        grid-cols-1
        gap-5

        md:grid-cols-2

        lg:grid-cols-3
        lg:gap-6
      `,children:O.map((e,r)=>{const g=e.icon;return n.jsxs(a.article,{variants:b,transition:{duration:.35,ease:[.22,1,.36,1]},className:`
              group/card
              relative

              flex
              flex-col

              overflow-hidden

              rounded-[22px]

              border
              border-[#D9DED8]

              bg-white

              p-5

              shadow-[0_10px_28px_rgba(7,40,33,.04)]

              transition-[background-color,border-color,box-shadow,transform]
              duration-300

              sm:p-6

              md:hover:-translate-y-2
              md:hover:border-[#0B5345]/40
              md:hover:bg-[#FEFFFD]
              md:hover:shadow-[0_28px_60px_rgba(7,40,33,.14)]

              lg:min-h-[455px]
              lg:p-7
            `,children:[n.jsx("div",{"aria-hidden":"true",className:`
                pointer-events-none

                absolute
                left-0
                top-0
                z-20

                hidden

                h-[4px]
                w-full

                origin-left
                scale-x-0

                bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_58%,#D8B867_100%)]

                transition-transform
                duration-500
                ease-out

                md:block
                md:group-hover/card:scale-x-100
              `}),n.jsx("div",{"aria-hidden":"true",className:`
                pointer-events-none

                absolute
                -right-20
                -top-20

                hidden

                h-48
                w-48

                rounded-full

                bg-[#69B7A1]/0

                blur-[70px]

                transition-colors
                duration-500

                md:block
                md:group-hover/card:bg-[#69B7A1]/10
              `}),n.jsxs("span",{"aria-hidden":"true",className:`
                pointer-events-none

                absolute
                right-4
                top-3

                font-serif
                text-[48px]
                leading-none

                text-[#0B5345]/[.045]

                transition-all
                duration-300

                md:group-hover/card:-translate-x-1
                md:group-hover/card:text-[#0B5345]/[.08]

                sm:text-[56px]

                lg:text-[58px]
              `,children:["0",r+1]}),n.jsx("span",{className:`
                relative
                z-10

                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#0B5345]/15

                bg-[#EDF4F1]
                text-[#0B5345]

                transition-all
                duration-300

                md:group-hover/card:border-[#0B5345]
                md:group-hover/card:bg-[#0B5345]
                md:group-hover/card:text-white

                lg:h-12
                lg:w-12
              `,children:n.jsx(g,{size:18})}),n.jsx("p",{className:`
                relative
                z-10

                mt-5

                text-[10px]
                font-extrabold
                uppercase
                tracking-[.18em]

                text-[#0B5345]

                sm:text-[11px]

                lg:text-[12px]
              `,children:e.kicker}),n.jsx("h3",{className:`
                relative
                z-10

                mt-2

                font-serif
                text-[31px]
                font-normal
                leading-[1.04]

                text-[#122B24]

                transition-colors
                duration-300

                md:group-hover/card:text-[#0B5345]

                sm:text-[35px]

                lg:text-[39px]
                lg:leading-[1.02]
              `,children:e.title}),n.jsx("p",{className:`
                relative
                z-10

                mt-3

                text-[14px]
                leading-6

                text-[#5E6D68]

                transition-colors
                duration-300

                md:group-hover/card:text-[#43564F]

                sm:text-[15px]
                sm:leading-6

                lg:text-[17px]
                lg:leading-7
              `,children:e.description}),n.jsxs("div",{className:`
                relative
                z-10

                mt-5

                border-t
                border-[#E4E7E2]

                pt-4
              `,children:[n.jsx("p",{className:`
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.15em]

                  text-[#9A7B33]

                  sm:text-[11px]
                `,children:"Best suited to"}),n.jsx("p",{className:`
                  mt-1.5

                  text-[13px]
                  font-semibold
                  leading-[1.55]

                  text-[#2B3C37]

                  sm:text-[14px]

                  lg:text-[16px]
                  lg:leading-6
                `,children:e.bestFor})]}),n.jsx("div",{className:`
                relative
                z-10

                mt-5

                grid
                gap-2

                lg:mt-auto
                lg:pt-6
              `,children:e.options.map(x=>n.jsxs(m,{to:x.to,className:`
                    group/link
                    relative

                    flex
                    min-h-[46px]
                    w-full

                    items-center
                    justify-between
                    gap-3

                    overflow-hidden
                    rounded-xl

                    border
                    border-[#E1E5E0]

                    bg-[#F8F9F6]

                    px-4
                    py-2.5

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.06em]

                    text-[#274039]

                    transition-all
                    duration-300

                    sm:text-[12px]

                    md:hover:translate-x-1
                    md:hover:border-[#0B5345]/25
                    md:hover:bg-[#EDF4F1]
                    md:hover:text-[#0B5345]
                    md:hover:shadow-[0_8px_20px_rgba(7,40,33,.06)]

                    lg:min-h-[48px]
                    lg:text-[14px]
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
                      ease-out

                      md:block
                      md:group-hover/link:scale-x-100
                    `}),n.jsx("span",{className:"relative z-10 min-w-0 flex-1",children:x.label}),n.jsx(c,{size:13,className:`
                      relative
                      z-10

                      shrink-0

                      transition-transform
                      duration-300

                      md:group-hover/link:translate-x-1
                    `})]},`${e.slug}-${x.label}`))})]},e.slug)})})]})]}),n.jsxs("section",{className:`
          relative
          overflow-hidden

          bg-[#08251E]

          py-16

          text-white

          md:py-20
        `,children:[n.jsx("div",{className:"absolute inset-0 grid-texture-dark opacity-35"}),n.jsxs("div",{className:"section-shell relative",children:[n.jsxs("div",{className:`
              flex
              items-end
              justify-between
              gap-5
            `,children:[n.jsxs("div",{children:[n.jsx("p",{className:"section-kicker-gold",children:"MARKETS WE WORK ACROSS"}),n.jsx("h2",{className:`
                  mt-4
                  max-w-[760px]

                  font-serif
                  text-[clamp(34px,4.5vw,52px)]
                  font-normal
                  leading-[1.02]
                `,children:"From our Dubai hub to global markets."})]}),n.jsxs("button",{type:"button",onClick:()=>o(e=>!e),className:`
                group

                hidden
                min-h-11
                shrink-0

                items-center
                gap-2

                rounded-lg

                border
                border-[#D8B867]/35

                bg-[#D8B867]/[.06]

                px-5

                text-[11px]
                font-extrabold
                uppercase
                tracking-[.1em]

                text-[#E5CB87]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[#D8B867]
                hover:bg-[#D8B867]
                hover:text-[#071813]

                md:inline-flex

                lg:text-[12px]
              `,children:[l?"Show Less":"View All Markets",n.jsx(c,{size:13,className:`
                  transition-transform
                  duration-300

                  ${l?"-rotate-90":""}
                `})]})]}),n.jsxs(a.div,{layout:!0,className:`
              mt-7

              grid
              grid-cols-2
              gap-3

              sm:grid-cols-3

              lg:grid-cols-5
              lg:gap-4
            `,children:[(l?k:k.slice(0,5)).map((e,r)=>n.jsxs(a.div,{layout:!0,initial:t?!1:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.25,delay:l?Math.min(r*.025,.18):0},whileHover:t?void 0:{y:-5,scale:1.015},className:`
                  group

                  flex
                  min-h-[72px]

                  items-center
                  gap-3

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[.045]

                  px-3.5
                  py-3

                  transition-[background-color,border-color,box-shadow]
                  duration-300

                  hover:border-[#D8B867]/40
                  hover:bg-white/[.08]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]

                  md:px-4

                  lg:min-h-[82px]
                  lg:px-5
                `,children:[n.jsx("div",{className:`site-card 
                    h-8
                    w-11
                    shrink-0

                    overflow-hidden

                    rounded-[5px]

                    border
                    border-white/15

                    bg-white

                    shadow-sm

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  `,children:n.jsx("img",{src:e.flag,alt:`${e.name} flag`,className:`
                      h-full
                      w-full
                      object-cover
                    `,loading:"lazy"})}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("span",{className:`
                      block

                      text-[10px]
                      font-extrabold
                      tracking-[.14em]

                      text-[#D8B867]

                      lg:text-[11px]
                    `,children:e.code}),n.jsx("span",{className:`
                      block

                      text-[14px]
                      font-semibold
                      leading-5

                      text-white/90

                      lg:text-[16px]
                    `,children:e.name})]})]},e.code)),n.jsxs(a.button,{layout:!0,type:"button",onClick:()=>o(e=>!e),whileTap:{scale:.97},whileHover:t?void 0:{y:-4,scale:1.015},className:`
                group

                flex
                min-h-[72px]

                items-center
                justify-between
                gap-2

                rounded-xl

                border
                border-[#D8B867]/35

                bg-[linear-gradient(135deg,rgba(216,184,103,.13),rgba(216,184,103,.045))]

                px-3.5
                py-3

                text-left

                transition-all
                duration-300

                hover:border-[#D8B867]/65
                hover:bg-[#D8B867]/15

                md:hidden
              `,children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("span",{className:`
                    block

                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[.13em]

                    text-[#D8B867]
                  `,children:l?"Markets":"Explore"}),n.jsx("span",{className:`
                    mt-1
                    block

                    text-[13px]
                    font-bold
                    leading-[1.3]

                    text-white

                    min-[390px]:text-[14px]
                  `,children:l?"Show Less":"View More Markets"})]}),n.jsx("span",{className:`
                  flex
                  h-8
                  w-8
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#D8B867]/25

                  bg-[#D8B867]/10

                  text-[#E5CB87]

                  transition-all
                  duration-300

                  group-hover:bg-[#D8B867]
                  group-hover:text-[#071813]
                `,children:n.jsx(c,{size:13,className:`
                    transition-transform
                    duration-300

                    ${l?"-rotate-90":""}
                  `})})]})]})]})]}),n.jsx("section",{className:`
          bg-white

          py-16

          md:py-24
        `,children:n.jsxs("div",{className:"section-shell",children:[n.jsxs("div",{className:`
              grid
              gap-8

              lg:grid-cols-[.9fr_1.1fr]
              lg:items-center
              lg:gap-12
            `,children:[n.jsxs(a.div,{initial:t?!1:{opacity:0,x:-22},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[n.jsx("p",{className:"section-kicker",children:"BUILT FOR TRUST"}),n.jsx("h2",{className:"section-title",children:"Institutional depth. Direct accountability."}),n.jsx("p",{className:`
                  section-copy

                  lg:text-[18px]
                  lg:leading-8
                  lg:text-[#51635D]
                `,children:"Clients see one joined-up advisory relationship while Orpheus owns the architecture, workplan, execution control and long-term governance behind it."})]}),n.jsx(a.div,{initial:t?!1:{opacity:0,x:24},whileInView:{opacity:1,x:0},viewport:{once:!0},className:`
                overflow-hidden

                rounded-[22px]

                border
                border-[#DEE4DE]

                bg-[#F9FAF7]
              `,children:[["01","One accountable mandate","A clear Orpheus lead owns scope, decisions, timelines and delivery across the engagement."],["02","Execution discipline","Documentation, approvals, institution coordination and implementation are managed as one controlled workstream."],["03","Ongoing stewardship","After implementation, we stay close to governance, compliance, banking readiness and the client’s next stage."]].map(([e,r,g],x)=>n.jsxs("div",{className:`
                      group

                      grid
                      grid-cols-[42px_1fr]
                      gap-3

                      p-4

                      transition-colors
                      duration-300

                      hover:bg-white

                      md:grid-cols-[52px_1fr]
                      md:p-5

                      lg:grid-cols-[58px_1fr]
                      lg:p-6

                      ${x?"border-t border-[#DEE4DE]":""}
                    `,children:[n.jsx("span",{className:`
                        font-serif
                        text-[22px]

                        text-[#C9A95D]

                        md:text-[25px]
                      `,children:e}),n.jsxs("div",{children:[n.jsx("h3",{className:`
                          font-serif
                          text-[20px]
                          font-normal

                          transition-colors

                          group-hover:text-[#0B5345]

                          md:text-[23px]

                          lg:text-[26px]
                        `,children:r}),n.jsx("p",{className:`
                          mt-1.5

                          text-[13px]
                          leading-5

                          text-[#65736E]

                          md:text-[14px]

                          lg:text-[16px]
                          lg:leading-6
                        `,children:g})]})]},r))})]}),Y]})}),n.jsx("section",{className:`
          bg-[#F7F4EC]

          pt-16
          pb-6

          sm:pb-8

          md:pt-24
          md:pb-8

          lg:pb-6
        `,children:n.jsxs("div",{className:"section-shell",children:[n.jsxs("div",{className:`
              flex
              flex-col
              gap-5

              md:flex-row
              md:items-end
              md:justify-between
            `,children:[n.jsxs("div",{children:[n.jsx("p",{className:"section-kicker",children:"INSIGHTS"}),n.jsx("h2",{className:"section-title",children:"Market insights & firm updates."}),n.jsx("p",{className:`
                  section-copy

                  lg:text-[18px]
                  lg:leading-8
                  lg:text-[#52645E]
                `,children:"Practical commentary on structuring, banking, private markets, regulation and cross-border wealth."})]}),n.jsxs(m,{to:"/blog",className:`
                micro-link
                whitespace-nowrap
              `,children:["View all insights",n.jsx(c,{size:13})]})]}),n.jsx(a.div,{variants:u,initial:t?!1:"hidden",whileInView:t?void 0:"visible",viewport:{once:!0,amount:.08},className:`
              mt-10

              grid
              gap-4

              md:grid-cols-2

              lg:grid-cols-4
              lg:gap-5
            `,children:T.map(e=>n.jsx(a.div,{variants:b,whileHover:t?void 0:{y:-6,scale:1.01},children:n.jsxs(m,{to:`/blog/${e.slug}`,className:`
                    group
                    block
                    h-full

                    overflow-hidden

                    rounded-2xl

                    border
                    border-[#DDE3DE]

                    bg-white

                    transition-all

                    hover:border-[#0B5345]/30
                    hover:shadow-[0_20px_46px_rgba(7,40,33,.11)]
                  `,children:[n.jsx("div",{className:`
                      h-2

                      bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                      lg:hidden
                    `}),n.jsx("div",{className:`
                      hidden
                      overflow-hidden

                      lg:block
                      lg:h-[165px]
                    `,children:n.jsx("img",{src:e.image,alt:e.title,loading:"lazy",className:`
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                      `})}),n.jsxs("div",{className:"p-6 lg:p-5",children:[n.jsx("p",{className:`
                        text-[11px]
                        font-extrabold
                        uppercase
                        tracking-[.17em]

                        text-[#0B5345]
                      `,children:e.category}),n.jsx("h3",{className:`
                        mt-3

                        font-serif
                        text-[24px]
                        font-normal
                        leading-[1.08]

                        transition-colors

                        group-hover:text-[#0B5345]
                      `,children:e.title}),n.jsxs("span",{className:"micro-link mt-7",children:["Read insight",n.jsx(c,{size:12,className:`
                          transition-transform

                          group-hover:translate-x-1
                        `})]})]})]})},e.slug))}),h&&n.jsx("div",{className:"mt-8",children:n.jsx(G,{announcement:h,variant:"compact"})}),n.jsxs(a.div,{initial:t?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.18},className:`
              mt-8

              grid
              gap-7

              rounded-[24px]

              border
              border-[#D9E0D9]

              bg-white

              p-6

              shadow-[0_12px_35px_rgba(7,40,33,.04)]

              transition-shadow
              duration-300

              hover:shadow-[0_18px_45px_rgba(7,40,33,.08)]

              md:grid-cols-[1fr_.9fr]
              md:items-center
              md:p-8
            `,children:[n.jsxs("div",{children:[n.jsx("p",{className:"section-kicker",children:"MARKET INSIGHTS NEWSLETTER"}),n.jsx("h3",{className:`
                  mt-3

                  font-serif
                  text-[31px]
                  font-normal
                  leading-[1.04]

                  lg:text-[35px]
                `,children:"Stay current without the noise."}),n.jsx("p",{className:`
                  mt-3
                  max-w-[620px]

                  text-[15px]
                  leading-6

                  text-[#64736D]

                  lg:text-[17px]
                  lg:leading-7
                `,children:"Subscribe for regular Orpheus commentary and important firm updates. The signup is now an active interaction rather than a decorative field."})]}),n.jsxs("form",{onSubmit:s,className:`
                flex
                flex-col
                gap-3

                sm:flex-row
              `,children:[n.jsx("label",{htmlFor:"market-insights-email",className:"sr-only",children:"Email address"}),n.jsx("input",{id:"market-insights-email",type:"email",required:!0,value:d,onChange:e=>i(e.target.value),placeholder:"you@company.com",className:"h-12 w-full rounded-xl border border-[#D9E0DC] bg-white px-4 text-[15px] text-[#0A1714] outline-none transition placeholder:text-[#9AA5A1] focus:border-[#0B5345] focus:ring-4 focus:ring-[#0B5345]/10 lg:text-[16px] flex-1"}),n.jsxs("button",{type:"submit",className:`
                  group

                  inline-flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#0B5345]

                  px-5

                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.1em]

                  text-white

                  transition-all

                  hover:-translate-y-0.5
                  hover:bg-[#106856]
                  hover:shadow-[0_10px_22px_rgba(11,83,69,.16)]

                  lg:px-6
                  lg:text-[12px]
                `,children:["Subscribe",n.jsx(c,{size:12,className:`
                    transition-transform

                    group-hover:translate-x-1
                  `})]})]})]})]})}),n.jsx(V,{compact:!0,title:"Not sure what structure you need?",text:"Tell us the commercial, banking, capital or family objective. Orpheus will help define the right solution, jurisdiction and execution path before you commit to a structure."}),n.jsx("section",{className:`
          bg-[#071813]

          py-10

          text-white
        `,children:n.jsxs("div",{className:`
            section-shell

            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          `,children:[n.jsxs("div",{className:`
              flex
              items-center
              gap-3

              text-[14px]

              text-white/60

              lg:text-[16px]
              lg:text-white/70
            `,children:[n.jsx(M,{size:16,className:"text-[#D8B867]"}),"Dubai-based lead architecture with international execution capability."]}),n.jsxs(m,{to:"/about",className:`
              micro-link
              !text-[#E5CB87]
            `,children:["How Orpheus works",n.jsx(c,{size:12})]})]})})]})}export{rn as default};
