import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <footer className="bg-obsidian border-t border-border-gold pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-champagne to-soft-gold flex items-center justify-center text-obsidian font-serif font-bold text-lg">
                D
              </div>
              <span className="font-serif text-2xl tracking-wide text-ivory group-hover:text-champagne transition-colors">
                DeepResearch
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              The definitive executive intelligence report on autonomous robotics and smart systems. Providing industry leaders with the insights needed to navigate the future of automation.
            </p>
          </div>

          <div>
            <h4 className="text-ivory font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#overview" className="text-muted hover:text-champagne transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#topics" className="text-muted hover:text-champagne transition-colors text-sm">
                  Research Topics
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-muted hover:text-champagne transition-colors text-sm">
                  Full Report Details
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted hover:text-champagne transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs text-center md:text-left">
            &copy; {currentYear} DeepResearch Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted/60">
            <span>Premium Industry Reports</span>
            <span>&bull;</span>
            <span>Executive Insights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
