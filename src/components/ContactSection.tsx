"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-navy relative text-white">
      {/* Background styling for premium feel */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-navy-light to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Let's Secure Your Financial Future
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-300 text-lg font-light"
          >
            Whether you need robust transaction monitoring, meticulous tax filing, or strategic advisory, we are ready to partner with you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glass-panel backdrop-blur-xl shadow-2xl">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif text-brand-gold-light mb-2">Direct Contact</h3>
              <p className="text-slate-400 font-light text-sm">Reach out immediately for consultations.</p>
            </div>

            <div className="space-y-6">
              <a href="tel:+917030535953" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                <div className="w-12 h-12 bg-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone / WhatsApp</p>
                  <p className="text-lg font-medium">+91 703053 5953</p>
                </div>
              </a>

              <a href="mailto:tejasdangle33@gmail.com" className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="text-lg font-medium">tejasdangle33@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Office Location</p>
                  <p className="text-lg font-medium">Nashik, Maharashtra</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Visual Phase 1) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-navy">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-navy">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-navy">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-emerald appearance-none transition-all">
                  <option>Taxation & Returns</option>
                  <option>Auditing</option>
                  <option>Financial Reporting</option>
                  <option>Advisory</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-navy">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all resize-none"
                />
              </div>

              <button 
                type="button" 
                className="w-full py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
