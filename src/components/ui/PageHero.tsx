import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  breadcrumb: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children?: ReactNode;
  short?: boolean;
}

export function PageHero({ breadcrumb, title, titleAccent, subtitle, children, short }: Props) {
  return (
    <section className={`relative overflow-hidden bg-[#071813] text-white ${short ? "pt-32 pb-16" : "pt-36 pb-24"}`}>
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="absolute -right-24 top-6 h-80 w-80 rounded-full border border-[#C9A95D]/10" />
      <div className="relative section-shell content-safe">
        <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#C9A95D]">
          <Link to="/" className="hover:text-white">Home</Link><span className="text-white/25">/</span><span>{breadcrumb}</span>
        </nav>
        <h1 className="mt-8 max-w-[920px] font-serif text-[clamp(48px,7vw,88px)] font-normal leading-[.98] tracking-[-.045em] text-white">
          <span className="block">{title}</span>
          {titleAccent && <span className="block italic text-[#54A991]">{titleAccent}</span>}
        </h1>
        {subtitle && <p className="mt-7 max-w-[760px] text-[16px] leading-8 text-white/72 md:text-[17px]">{subtitle}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
