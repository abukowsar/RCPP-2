import ComprehensiveSection from "@/components/Pages/HomePages/ComprehensiveSection";
import HeroSection from "@/components/Pages/HomePages/HeroSection";
import HowItWorks from "@/components/Pages/HomePages/HowItWorks";
import ImpactStatistics from "@/components/Pages/HomePages/ImpactStatistics";
import CurrentThreats from "@/components/Pages/HomePages/CurrentThreats";
import InfoSection from "@/components/Pages/HomePages/InfoSection";
import BlogSection from "@/components/Pages/HomePages/BlogSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ImpactStatistics/>
      <HowItWorks />
      <CurrentThreats/>
      <ComprehensiveSection />
      <InfoSection/>
      <BlogSection/>
    </div>
  );
}
