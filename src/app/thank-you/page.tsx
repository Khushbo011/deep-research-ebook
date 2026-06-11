"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Mail, ArrowRight, Download, ExternalLink } from "lucide-react";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") || "1";
  const product = products.find((p) => p.id === productId) || products[0];

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <Card hoverEffect={false} className="text-center p-10 md:p-12 border-border-gold relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-champagne/10 rounded-full blur-[60px] -z-10" />

          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle2 className="w-10 h-10 text-champagne" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-champagne block mb-3">
            Transaction Complete
          </span>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-ivory mb-4">
            Thank You for Your Acquisition
          </h1>

          <p className="text-muted leading-relaxed mb-10 max-w-md mx-auto">
            Your purchase was processed securely. Click the button below to instantly access your executive digital publication.
          </p>

          {/* ── PRIMARY DOWNLOAD CTA ── */}
          <div className="relative mb-10">
            {/* Outer pulsing ring */}
            <div className="absolute inset-0 rounded-xl bg-champagne/20 blur-xl animate-pulse -z-10 scale-105" />
            <a
              href={product.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 w-full bg-gradient-to-r from-[#c6a972] via-[#e8d5a3] to-[#c6a972] text-obsidian font-bold rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(198,169,114,0.5)] active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span className="font-serif text-xl">Access Your Download</span>
                <ExternalLink className="w-5 h-5 opacity-70" />
              </div>
              <span className="text-xs font-normal opacity-75 tracking-wide">
                Opens in Google Drive — PDF &amp; EPUB included
              </span>
            </a>
          </div>

          {/* Purchased Product Info */}
          <div className="bg-espresso/40 border border-white/5 rounded-lg p-5 mb-10 text-left">
            <span className="text-[10px] uppercase tracking-wider text-champagne font-bold block mb-1">
              {product.category}
            </span>
            <h3 className="font-serif text-base font-bold text-ivory line-clamp-2 mb-1">
              {product.title}
            </h3>
            <p className="text-xs text-muted/70">Order Ref: AH-{Math.floor(Math.random() * 90000) + 10000} &nbsp;·&nbsp; Lifetime Access Granted</p>
          </div>

          {/* Access Instructions */}
          <div className="text-left border-t border-white/5 pt-8 mb-10">
            <h4 className="text-ivory font-serif font-bold mb-4">Access Instructions</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>Click <strong className="text-ivory">Access Your Download</strong> above — it opens your secure Google Drive folder directly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>Download the <strong className="text-ivory">PDF</strong> or <strong className="text-ivory">EPUB</strong> version from the Drive folder to your device.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>For enterprise licensing or support, contact us via the email below within 14 days.</span>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-white/5 text-xs text-muted">
            <a href="mailto:support@assethub.io" className="flex items-center gap-1.5 hover:text-champagne transition-colors">
              <Mail className="w-3.5 h-3.5" /> support@assethub.io
            </a>
            <Link href="/" className="flex items-center gap-1 hover:text-champagne transition-colors font-bold">
              <span>Return to Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="bg-obsidian min-h-screen pt-32 flex items-center justify-center text-ivory">
        Loading confirmation...
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
