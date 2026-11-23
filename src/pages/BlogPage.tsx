import BlogHeroSection from "@/components/blog/sections/BlogHeroSection";
import AnnouncementsSection from "@/components/blog/sections/AnnouncementsSection";
import UAELawSection from "@/components/blog/sections/UAELawSection";
import BlogLibrarySection from "@/components/blog/sections/BlogLibrarySection";
import GovernanceStructureSection from "@/components/blog/sections/GovernanceStructureSection";
import BlogFAQSection from "@/components/blog/sections/BlogFAQSection";

export default function BlogPage() {
  return (
    <main
      id="blog-page"
      className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#FBFAF6] pt-[76px] text-[#173C31]"
    >
      <BlogHeroSection />

      <AnnouncementsSection />

      <UAELawSection />

      <BlogLibrarySection />

      {/* Corporate Structure & Governance */}
      <GovernanceStructureSection />

      <BlogFAQSection />
    </main>
  );
}