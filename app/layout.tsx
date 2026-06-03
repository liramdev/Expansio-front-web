import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Expansio Digital | בניית אתרים ושיווק דיגיטלי לעסקים בישראל",
  description:
    "Expansio Digital – סוכנות דיגיטל פרמיום לבניית אתרים, דפי נחיתה, ניהול קמפיינים במטא, קריאייטיב ואסטרטגיה שיווקית. מגבירים ווליום לעסק שלך.",
  keywords:
    "בניית אתרים לעסקים, בניית דפי נחיתה, שיווק דיגיטלי לעסקים, קמפיינים במטא, פרסום בפייסבוק ובאינסטגרם, משרד פרסום דיגיטלי, יצירת קריאייטיב לעסקים, הגדלת פניות לעסק, אתר תדמית לעסק",
  openGraph: {
    title: "Expansio Digital | מגבירים ווליום לעסק שלך",
    description:
      "סוכנות דיגיטל פרמיום – אתרים, שיווק, קריאייטיב ואסטרטגיה. יותר פניות, יותר לקוחות, יותר צמיחה.",
    locale: "he_IL",
    type: "website",
  },
  alternates: {
    canonical: "https://expansio.digital",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Expansio Digital",
              description:
                "סוכנות דיגיטל פרמיום – בניית אתרים, שיווק דיגיטלי, קמפיינים במטא, קריאייטיב ואסטרטגיה שיווקית לעסקים בישראל.",
              url: "https://expansio.digital",
              telephone: "+972549569088",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
              },
              areaServed: "IL",
              serviceType: [
                "בניית אתרים",
                "שיווק דיגיטלי",
                "קמפיינים במטא",
                "קריאייטיב",
                "אסטרטגיה שיווקית",
              ],
              priceRange: "₪₪",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
