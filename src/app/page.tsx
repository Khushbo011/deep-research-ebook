import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TopicsSection } from "@/components/home/TopicsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TopicsSection />
      <CTASection />
    </>
  );
}
