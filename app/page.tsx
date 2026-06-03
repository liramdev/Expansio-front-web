import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PainSection from "@/components/home/PainSection";
import SolutionSection from "@/components/home/SolutionSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import PricingSection from "@/components/home/PricingSection";
import AboutPreview from "@/components/home/AboutPreview";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Expansio Digital | מגבירים ווליום לעסק שלך – אתרים ושיווק דיגיטלי",
  description:
    "Expansio Digital – בניית אתרים, דפי נחיתה, קמפיינים במטא, קריאייטיב ואסטרטגיה שיווקית לעסקים בישראל. יותר פניות, יותר לקוחות, יותר צמיחה.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <PainSection />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <SolutionSection />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <ServicesPreview />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <PricingSection />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <AboutPreview />
      <div className="section-divider mx-auto max-w-4xl opacity-50" />
      <FAQPreview />
      <CTASection
        title="מוכנים להגביר ווליום לעסק?"
        subtitle="בואו נבנה יחד אתר, הצעה וקמפיין שמדברים נכון לקהל שלכם ומובילים ליותר פניות."
        secondaryLabel="צפו בשירותים שלנו"
        secondaryHref="/services"
      />
    </>
  );
}
