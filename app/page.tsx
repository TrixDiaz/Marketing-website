import { SocialHeader } from "@/components/layouts/social-header";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/layouts/sections/hero";


export default function Home() {
  return (
    <div className="">
      <SocialHeader />
      <Navbar />
      <HeroSection />
    </div>
  );
}
