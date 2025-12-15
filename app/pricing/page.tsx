import { PricingSection } from "@/components/layouts/sections/pricing";
import { ContactSection } from "@/components/layouts/sections/contact-us";
import { PlanIncludedSection } from "@/components/layouts/sections/plan-included";


export default function PricingPage() {
    return (
        <div>
            <PricingSection />
            <PlanIncludedSection />
            <ContactSection />
        </div>
    );
}