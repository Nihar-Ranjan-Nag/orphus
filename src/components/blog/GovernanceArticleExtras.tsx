import { useState } from "react";
import { Link } from "react-router-dom";
import { governanceCalendar, governanceFaqs } from "./governanceData";

export function GovernanceArticleExtras({ heading }: { heading: string }) {
  const [checked, setChecked] = useState<boolean[]>(Array(7).fill(false));
  if (heading === "What a well-built structure looks like") return (
    <figure className="mt-7 overflow-hidden rounded-2xl border border-[#DBE4DD] bg-[#0C1210]">
      <img src="/images/Orpheus_Structure_SingleImage.png" loading="lazy" alt="Cross-border structure with a family foundation, holding company, operating company and two SPVs, all governed by one calendar" className="mx-auto max-h-[750px] w-full object-contain" />
      <figcaption className="bg-white px-5 py-4 text-sm leading-6 text-[#54655D]">One job per entity. One governance calendar across the group.</figcaption>
    </figure>
  );
  if (heading === "The yearly governance calendar for UAE entities") return (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-[#D8E3DB]">
      <table className="w-full min-w-[630px] border-collapse text-left text-sm">
        <thead className="bg-[#103B31] text-white"><tr><th className="p-4">Obligation</th><th className="p-4">What it involves</th><th className="p-4">How often</th></tr></thead>
        <tbody>{governanceCalendar.map((item, idx) => <tr key={item.obligation} className={idx % 2 ? "bg-[#F5F7F3]" : "bg-white"}><th className="border-b border-[#E2E8E0] p-4 align-top font-semibold text-[#173E33]">{item.obligation}</th><td className="border-b border-[#E2E8E0] p-4 align-top text-[#506259]">{item.details}</td><td className="border-b border-[#E2E8E0] p-4 align-top text-[#506259]">{item.frequency}</td></tr>)}</tbody>
      </table>
      <p className="bg-[#F5F7F3] px-4 py-3 text-xs text-[#64736A]">UAE rules cited in the October 2026 source article; verify current requirements for each entity.</p>
    </div>
  );
  if (heading === "Is your structure running right? A two-minute check") return (
    <div className="mt-6 rounded-2xl border border-[#DDE7DE] bg-[#F6F7F2] p-5 sm:p-7">
      <h3 className="mb-4 text-lg font-semibold text-[#123C31]">Your governance checklist</h3>
      {[
        "Shareholder, director and beneficial owner registers are current",
        "Board decisions are minuted where each company is managed",
        "Every licence and renewal sits on one calendar",
        "Corporate tax returns are filed for every entity, including quiet ones",
        "You can show evidence of real activity if a bank asks",
        "Bank KYC documents match today's structure",
        "Someone is named as responsible for all of the above"
      ].map((label, i) => <label key={label} className="mb-3 flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#42584B]"><input type="checkbox" className="mt-1 h-4 w-4 accent-[#0B5345]" checked={checked[i]} onChange={() => setChecked(old => old.map((v,j) => j === i ? !v : v))} /><span>{label}</span></label>)}
      <p aria-live="polite" className="mt-4 border-t border-[#D9E3D8] pt-4 font-semibold text-[#0B5345]">{checked.filter(Boolean).length} of 7 complete</p>
      <p className="mt-2 text-xs text-[#667A6B]">The checklist is illustrative and is not a compliance opinion.</p>
    </div>
  );
  if (heading === "Frequently asked questions") return (
    <div className="mt-6 space-y-3">{governanceFaqs.map((item, idx) => <details key={item.question} className="group rounded-xl border border-[#DDE5DB] bg-[#FAFAF7] px-5 py-4" open={idx===0}><summary className="cursor-pointer list-item font-semibold text-[#173E33]">{item.question}</summary><p className="mt-3 text-sm leading-7 text-[#53665B]">{item.answer}</p></details>)}</div>
  );
 if (heading === "How Orpheus helps") return null;  return null;
}