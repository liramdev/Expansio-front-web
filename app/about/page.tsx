import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "אודות | Expansio Digital – הסיפור שלנו",
  description:
    "Expansio Digital נולדה מתוך הבנה שעסקים צריכים מערכת דיגיטלית ברורה – לא עוד רעש. קראו את הסיפור שלנו.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
