"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase } from "lucide-react";

export default function AboutSection() {
  const strategicValue = [
    {
      title: "Enterprise-Grade Risk Control",
      origin: "Forged at IDFC First Bank",
      highlights: [
        "Implementing the same rigorous transaction monitoring and cash restriction controls used by top-tier national banks.",
        "Developing custom, rule-based compliance frameworks that preemptively identify vulnerabilities and protect your assets."
      ]
    },
    {
      title: "Precision Audit & Compliance",
      origin: "Mastered at Premium Audit Firms",
      highlights: [
        "Executing airtight TAX and Concurrent Audits that stand up to the highest regulatory scrutiny.",
        "Transforming complex GST reconciliations and Direct Tax compliance from operational headaches into strategic advantages."
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-brand-emerald tracking-widest uppercase mb-4">The Architect</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-navy leading-tight mb-6">
                Precision Rooted in Experience.
              </h3>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                I don&apos;t just balance books; I build financial fortresses. My experience is your advantage—bringing institutional-grade risk control and unshakeable compliance directly to your business.
              </p>
              
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm mt-8 space-y-4">
                 <h4 className="font-serif text-xl text-brand-navy flex items-center gap-3">
                   <Award className="text-brand-gold w-6 h-6" /> Beyond the Ledger
                 </h4>
                 <p className="text-sm text-brand-gray leading-relaxed">
                   Discipline extends beyond numbers. As a Gold Medalist and Yellow Belt in Karate, and an active participant in ICAI sports events, I apply the same focus, endurance, and strategy to my professional engagements.
                 </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strategic Value */}
          <div className="lg:col-span-7 space-y-12">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h4 className="flex items-center gap-3 text-2xl font-serif text-brand-navy border-b border-slate-200 pb-4">
                <Briefcase className="w-6 h-6 text-brand-emerald" /> Your Strategic Advantage
              </h4>
              
              <div className="space-y-8">
                {strategicValue.map((val, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="text-2xl font-serif text-brand-navy">{val.title}</h5>
                    <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold mt-2 mb-6 flex items-center gap-2">
                       <span className="w-8 h-px bg-brand-gold/30"></span>
                       {val.origin}
                    </p>
                    <ul className="space-y-4">
                      {val.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-brand-gray text-base leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
