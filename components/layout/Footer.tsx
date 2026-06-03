import Link from "next/link";

const navItems = [
  { href: "/", label: "בית" },
  { href: "/services", label: "שירותים" },
  { href: "/portfolio", label: "עבודות" },
  { href: "/about", label: "אודות" },
  { href: "/testimonials", label: "המלצות" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1";

export default function Footer() {
  return (
    <footer className="relative bg-[#050508] border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black text-white">Expansio</span>
              <span className="text-2xl font-black text-purple-light"> Digital</span>
              <div className="mt-1 w-8 h-0.5 bg-gradient-to-l from-[#c9a84c] to-transparent" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              מגבירים ווליום לעסק שלך. אתרים, שיווק דיגיטלי, קריאייטיב ואסטרטגיה שמובילה לפניות אמיתיות.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c9a84c] hover:text-[#e2c97e] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +972-54-956-9088
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">
              ניווט
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">
              שירותים
            </h3>
            <ul className="space-y-3">
              {[
                "בניית אתרים ודפי נחיתה",
                "שיווק דיגיטלי במטא",
                "קריאייטיב ועריכת וידאו",
                "אסטרטגיה שיווקית",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Expansio Digital. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <span>בנוי עם</span>
            <span className="text-[#c9a84c]">♦</span>
            <span>אסטרטגיה ברורה</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
