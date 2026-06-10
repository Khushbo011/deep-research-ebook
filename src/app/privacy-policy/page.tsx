import { Card } from "@/components/ui/Card";

export default function PrivacyPolicy() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-8">Privacy Policy</h1>
        <p className="text-sm mb-6">Last updated: June 10, 2026</p>
        
        <Card hoverEffect={false} className="p-8 md:p-12 space-y-8 !bg-espresso/20 border-border-gold">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">1. Information We Collect</h2>
            <p className="leading-relaxed text-sm">
              At AssetHub, we respect your privacy. We collect personal information you provide directly to us during checkout and contact form submissions, including your name, email address, billing address, and payment information (processed securely via encrypted third-party processors).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-sm">
              We use the collected information to process transactions, deliver digital assets, send purchase confirmations, notify you of updates regarding purchased assets, and respond to customer service requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">3. Data Security</h2>
            <p className="leading-relaxed text-sm">
              We implement industry-standard security measures, including SSL encryption and secure processing platforms, to protect your personal information. We do not store credit card details on our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">4. Third-Party Services</h2>
            <p className="leading-relaxed text-sm">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted partners who assist us in operating our website or processing payments, so long as those parties agree to keep this information confidential.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
