import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-light pt-20 pb-10 text-slate-300 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-white mb-1">
                Tejas Dangle <span className="text-brand-emerald">&</span> Associates
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-brand-gold-light">
                Chartered Accountants
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Delivering uncompromising accuracy, strategic financial insight, and rigorous audit compliance to empower your business growth. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Expertise', href: '#services' },
                { name: 'About CA Tejas', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-brand-gold transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact mini */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Reach Out</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-0.5 text-slate-400" />
                <a href="tel:+917030535953" className="hover:text-white transition-colors">+91 703053 5953</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-0.5 text-slate-400" />
                <a href="mailto:tejasdangle33@gmail.com" className="hover:text-white transition-colors">tejasdangle33@gmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-slate-400 shrink-0" />
                <span>Serving Nationwide from Nashik, Maharashtra</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Tejas Dangle & Associates. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
