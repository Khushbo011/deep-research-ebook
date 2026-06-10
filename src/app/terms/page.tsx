import { Card } from "@/components/ui/Card";

export default function Terms() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-8">Terms & Conditions</h1>
        <p className="text-sm mb-6">Last updated: June 10, 2026</p>
        
        <Card hoverEffect={false} className="p-8 md:p-12 space-y-8 !bg-espresso/20 border-border-gold">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">1. Agreement to Terms</h2>
            <p className="leading-relaxed text-sm">
              By accessing and purchasing from AssetHub, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">2. License Grant</h2>
            <p className="leading-relaxed text-sm">
              Upon purchasing a digital asset (eBook, report, templates), AssetHub grants you a non-exclusive, non-transferable, lifetime license to use the content for personal or internal business operations. You may not resell, redistribute, or share access credentials with third parties outside your legal corporate entity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">3. Intellectual Property</h2>
            <p className="leading-relaxed text-sm">
              All digital materials, graphics, copy, and reports remain the exclusive intellectual property of AssetHub and its respective contributors. Unauthorized reproduction is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">4. Limitation of Liability</h2>
            <p className="leading-relaxed text-sm">
              AssetHub and its authors are not liable for any direct, indirect, or consequential damages resulting from the use or application of the insights, methodologies, or data contained within our reports or resources.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
