import { Card } from "@/components/ui/Card";

export default function Disclaimer() {
  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-8">Disclaimer</h1>
        <p className="text-sm mb-6">Last updated: June 10, 2026</p>
        
        <Card hoverEffect={false} className="p-8 md:p-12 space-y-8 !bg-espresso/20 border-border-gold">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">1. Professional Information Disclaimer</h2>
            <p className="leading-relaxed text-sm">
              The research, analysis, guides, templates, and insights provided on AssetHub are for informational and educational purposes only. They do not constitute financial, investment, legal, or professional tech architecture advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">2. Accuracy and Verification</h2>
            <p className="leading-relaxed text-sm">
              While we make every effort to verify our research and maintain accurate projections, technology and market climates evolve rapidly. AssetHub makes no representations or warranties as to the absolute completeness, reliability, or accuracy of the information provided.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ivory">3. Action at Own Risk</h2>
            <p className="leading-relaxed text-sm">
              Any reliance you place on the materials found in our publications is strictly at your own risk. We recommend consulting qualified professionals before making major tech infrastructure or capital allocation decisions.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
