import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "שירותים | Expansio Digital – בניית אתרים, שיווק דיגיטלי וקריאייטיב",
  description:
    "גלו את שירותי Expansio Digital: בניית אתרים ודפי נחיתה, ניהול קמפיינים במטא, קריאייטיב ועריכת וידאו, אסטרטגיה שיווקית – הכל במקום אחד.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
