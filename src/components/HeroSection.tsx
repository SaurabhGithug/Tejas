"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const qualities = ["Integrity", "Accuracy", "Commitment"];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy fallback-bg">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 w-full text-center md:text-left mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/50 backdrop-blur-md px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">
              Official Announcement
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Tejas Dangle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
                & Associates
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 font-light"
          >
            We are pleased to formally announce the establishment of our firm. Offering premium Chartered Accountant services tailored for precision and strategic growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-navy font-semibold rounded-full hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center space-x-2 group">
              <span>Our Expertise</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
              Schedule Consultation
            </a>
          </motion.div>

          {/* Qualities */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 border-t border-white/10 pt-8"
          >
            {qualities.map((quality, index) => (
              <div key={index} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-emerald" />
                <span className="font-medium">{quality}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-md hidden lg:block"
        >
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-brand-emerald rounded-2xl blur-2xl opacity-20 animate-pulse" />
             <div className="relative bg-white/5 backdrop-blur-xl border border-white/50 p-8 rounded-2xl shadow-2xl overflow-hidden">
               {/* Decorative Lines simulating generic financial chart */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-emerald/10 rounded-full translate-y-10 -translate-x-10 blur-xl" />
               
               <div className="space-y-6 relative z-10">
                 <div className="flex justify-between items-start border-b border-white/10 pb-4">
                   <div>
                     <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Founder & CEO</p>
                     <h3 className="text-xl font-serif text-white">CA Tejas M. Dangle</h3>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold-light to-brand-gold flex items-center justify-center text-brand-navy font-bold text-lg shadow-lg">
                     TD
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 pb-2">
                     <p className="text-white/50 text-xs mb-1 uppercase tracking-wider">Specializations</p>
                     <p className="text-white font-medium">Financial Reporting & Risk Control</p>
                   </div>
                   <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5">
                     <p className="text-white/50 text-xs mb-1 uppercase tracking-wider">Alumni</p>
                     <p className="text-white font-medium flex items-center justify-between">
                       <span>ICAI Member</span>
                       <span className="text-xs bg-brand-emerald/20 text-brand-emerald px-2 py-1 rounded-sm">1st Attempt</span>
                     </p>
                   </div>
                 </div>

               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
