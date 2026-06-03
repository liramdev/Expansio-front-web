import type { Metadata } from "next";
import TestimonialsPageContent from "./TestimonialsPageContent";

export const metadata: Metadata = {
  title: "המלצות | Expansio Digital – מה הלקוחות אומרים",
  description:
    "המלצות מלקוחות של Expansio Digital – עסקים שבנו אתר, הריצו קמפיינים ויצרו קריאייטיב שיווקי איתנו.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
