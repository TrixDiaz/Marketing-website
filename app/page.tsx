import { SocialHeader } from "@/components/layouts/social-header";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/layouts/sections/hero";
import { AboutUsSection } from "@/components/layouts/sections/about-us";
import { Footer } from "@/components/layouts/sections/footer";


export default function Home() {
  return (
    <div className="">
      <SocialHeader />
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
