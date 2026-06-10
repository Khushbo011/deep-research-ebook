import { Card } from "@/components/ui/Card";

export default function About() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-8">About AssetHub</h1>
        
        <Card hoverEffect={false} className="p-8 md:p-12 space-y-8 !bg-espresso/20 border-border-gold">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">Our Mission</h2>
            <p className="leading-relaxed text-sm">
              AssetHub was founded to bridge the gap between academic research, advanced system engineering, and executive strategy. We distill complex, rapidly moving industry technologies into premium digital publications, technical codebases, and actionable business models.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">Premium Curation</h2>
            <p className="leading-relaxed text-sm">
              Unlike generic startup blogs or superficial industry lists, every asset in our storefront is meticulously curated, technically audited, and fully detailed. We pride ourselves on delivering publication-grade reports and deployment-ready software templates that help leaders build the future.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">Who We Serve</h2>
            <p className="leading-relaxed text-sm">
              Our customers are founders, lead architects, corporate innovators, venture capital investors, and elite researchers across artificial intelligence, autonomous robotics, and modern digital ecosystems.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
