import type { Metadata } from "next";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "עבודות | Expansio Digital – פורטפוליו אתרים, קמפיינים וקריאייטיב",
  description:
    "פורטפוליו של Expansio Digital: אתרי תדמית, דפי נחיתה, קמפיינים במטא וקריאייטיב שיווקי לעסקים בישראל.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
