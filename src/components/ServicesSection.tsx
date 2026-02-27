"use client";

import { motion } from "framer-motion";
import { Calculator, LineChart, ShieldCheck, Scale, Landmark, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Accounting",
      description: "Comprehensive financial statement preparation and bookkeeping for corporate and non-corporate entities.",
      icon: <Calculator className="w-8 h-8" />,
    },
    {
      title: "Audit",
      description: "Thorough internal and concurrent audits ensuring compliance and precise financial health checks.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Taxation",
      description: "Direct and Indirect taxation strategies, including seamless GST reconciliation and returns filing.",
      icon: <LineChart className="w-8 h-8" />,
    },
    {
      title: "Advisory",
      description: "Risk mitigation, transaction monitoring frameworks, and strategic financial analysis.",
      icon: <Scale className="w-8 h-8" />,
    },
    {
      title: "Financing",
      description: "Expert guidance on capital structure, financial modeling, and NPA related settlements.",
      icon: <Landmark className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-emerald font-semibold uppercase tracking-widest text-sm mb-4 block"
          >
            Core Offerings
          </motion.p>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl md:text-5xl font-serif text-brand-navy mb-6"
          >
             Professional Expertise Delivered with Precision
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-brand-gray text-lg"
          >
            Leveraging years of high-stakes financial reporting and audit experience to protect and grow your assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group glass-card p-10 rounded-2xl relative overflow-hidden flex flex-col h-full bg-white hover:bg-slate-50 border border-slate-100"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-700 pointer-events-none">
                {service.icon}
              </div>
              
              <div className="w-16 h-16 rounded-xl bg-brand-slate flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-brand-navy mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-brand-gray leading-relaxed mb-8 flex-grow relative z-10">
                {service.description}
              </p>

              <div className="relative z-10 mt-auto flex items-center text-brand-emerald font-medium group cursor-pointer w-fit">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
