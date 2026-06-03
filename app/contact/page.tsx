import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "צור קשר | Expansio Digital – שלחו הודעה בווצאפ",
  description:
    "צרו קשר עם Expansio Digital – בניית אתרים, שיווק דיגיטלי וקריאייטיב לעסקים בישראל. שלחו הודעה בווצאפ ונחזור אליכם.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
