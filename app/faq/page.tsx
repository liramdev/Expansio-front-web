import type { Metadata } from "next";
import FAQPageContent from "./FAQPageContent";

export const metadata: Metadata = {
  title: "שאלות נפוצות | Expansio Digital – תשובות לכל השאלות",
  description:
    "שאלות ותשובות על שירותי Expansio Digital: מחירים, תהליך עבודה, זמני ביצוע ועוד.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
