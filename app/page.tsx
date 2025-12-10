import { HeroSection } from "@/components/layouts/sections/hero";
import { AboutUsSection } from "@/components/layouts/sections/about-us";
import { ContactSection } from "@/components/layouts/sections/contact-us";
import { PricingSection } from "@/components/layouts/sections/pricing";

export default function Home() {
  return (
    <div className="">
   
      <HeroSection />
      <AboutUsSection />
      <PricingSection />
      <ContactSection />
   
    </div>
  );
}
