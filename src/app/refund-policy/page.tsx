import { Card } from "@/components/ui/Card";

export default function RefundPolicy() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-8">Refund Policy</h1>
        <p className="text-sm mb-6">Last updated: June 10, 2026</p>
        
        <Card hoverEffect={false} className="p-8 md:p-12 space-y-8 !bg-espresso/20 border-border-gold">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">1. Digital Nature of Assets</h2>
            <p className="leading-relaxed text-sm">
              Because our digital products are instantly downloadable and non-tangible, all transactions are generally considered final.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">2. 14-Day Satisfaction Guarantee</h2>
            <p className="leading-relaxed text-sm">
              We stand behind the quality of our reports and resources. If you find that a purchased product does not deliver the promised value or structure described on its sales page, you may request a full refund within 14 days of your purchase date by contacting support.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">3. Process for Requesting a Refund</h2>
            <p className="leading-relaxed text-sm">
              To request a refund, please email support@assethub.io with your order confirmation number and a brief description of why the product did not meet your expectations. Approved refunds will be credited back to your original payment method within 5–10 business days.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
