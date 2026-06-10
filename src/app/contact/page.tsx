"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-obsidian min-h-screen pt-32 pb-24 text-muted">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-serif font-bold text-ivory mb-12">Contact Us</h1>
        
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-ivory mb-4">Get in Touch</h2>
              <p className="text-sm leading-relaxed">
                Have questions about enterprise licensing, bulk orders, or custom research commissions? Reach out to our partner network.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">Partner Relations</p>
                  <p className="text-sm text-ivory">partners@assethub.io</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">Executive Concierge</p>
                  <p className="text-sm text-ivory">+1 (800) 555-ASSET</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">Corporate Office</p>
                  <p className="text-sm text-ivory">Silicon Valley, California</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-8 !bg-espresso/20 border-border-gold">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-champagne" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ivory mb-2">Message Dispatched</h3>
                  <p className="text-sm">We will connect with you within 12 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded-sm px-4 py-3 text-ivory placeholder-muted/30 focus:outline-none focus:border-champagne/50 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded-sm px-4 py-3 text-ivory placeholder-muted/30 focus:outline-none focus:border-champagne/50 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted font-bold mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Outline your inquiry or procurement requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-obsidian border border-white/10 rounded-sm px-4 py-3 text-ivory placeholder-muted/30 focus:outline-none focus:border-champagne/50 transition-colors text-sm resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
