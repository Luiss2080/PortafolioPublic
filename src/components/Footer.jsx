import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const faviconImg = `${import.meta.env.BASE_URL}img/flavicon.svg`;
const whatsappUrl = 'https://wa.me/59175728767?text=Hola%20Luis%20Enrique,%20quiero%20conversar%20sobre%20una%20asesor%C3%ADa.';
const emailUrl = 'mailto:luisabri.contacto@gmail.com?subject=Quiero%20agendar%20una%20asesor%C3%ADa';

const placeholder = (e) => e.preventDefault();

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Conocimientos', href: '#enfoques' },
  { label: 'Casos', href: '#projects' },
  { label: 'Competencias', href: '#skills' },
  { label: 'Servicios', href: '#services' },
  { label: 'Trayectoria', href: '#experience' },
  { label: 'Credenciales', href: '#certificates' },
  { label: 'Sobre mí', href: '#about' }
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian-black relative z-20 overflow-hidden section-sep">

      {/* Luz Ambiental */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-emerald-deep/[0.05] rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Banda CTA */}
      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10 pt-20 pb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-titanium text-[11px] font-semibold uppercase tracking-[0.35em]"
        >
          ¿Hablamos?
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mt-3 mb-4 leading-tight tracking-tight"
        >
          ¿Trabajamos tus{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
            próximos resultados
          </span>
          ?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Cuéntame tu idea o tu reto. Te respondo con una propuesta clara, sin vueltas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-shine px-6 py-3 bg-emerald-deep text-white font-semibold font-inter rounded-xl hover:bg-emerald-hover hover:scale-[1.02] shadow-[0_4px_25px_rgba(5,150,105,0.4)] transition-all flex items-center gap-2 text-sm"
          >
            <span>Agenda una asesoría</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href={emailUrl}
            className="px-6 py-3 bg-white/[0.04] border border-white/15 text-platinum font-semibold font-inter rounded-xl hover:bg-white/[0.08] hover:border-emerald-light/40 hover:text-white hover:scale-[1.02] transition-all flex items-center gap-2 text-sm backdrop-blur-md"
          >
            <Mail size={16} className="text-emerald-light" />
            <span>Escríbeme</span>
          </a>
        </motion.div>
      </div>

      {/* Cuerpo Principal */}
      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 py-14 border-t border-white/[0.06]">

          {/* Marca & Redes */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <img src={faviconImg} alt="Logo Luis Albis" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-black text-white font-inter tracking-tight leading-none">
                  Luis Enrique <span className="text-emerald-light">Albis</span>
                </h3>
                <span className="text-[10px] text-titanium uppercase tracking-[0.25em] mt-1">
                  Marketing & Mercados Financieros
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Ayudo a emprendedores a convertir sus ideas en acciones concretas: mensajes claros, contenido con intención y decisiones informadas.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="#"
                onClick={placeholder}
                aria-disabled="true"
                aria-label="LinkedIn (próximamente)"
                title="Próximamente"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-titanium/50 cursor-not-allowed transition-all"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="#"
                onClick={placeholder}
                aria-disabled="true"
                aria-label="Instagram (próximamente)"
                title="Próximamente"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-titanium/50 cursor-not-allowed transition-all"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="#"
                onClick={placeholder}
                aria-disabled="true"
                aria-label="TikTok (próximamente)"
                title="Próximamente"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-titanium/50 cursor-not-allowed transition-all"
              >
                <FaTiktok size={14} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-white/10 transition-all"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="mailto:luisabri.contacto@gmail.com"
                aria-label="Correo"
                title="Enviar Correo"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-light"></span>
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ArrowUpRight size={12} className="text-emerald-light flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne"></span>
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={emailUrl}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-light/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-deep/15 border border-emerald-light/25 flex items-center justify-center text-emerald-light flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={15} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-titanium uppercase tracking-wider">Correo</span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium truncate">luisabri.contacto@gmail.com</span>
                </div>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-400/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-deep/15 border border-emerald-400/25 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={15} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-titanium uppercase tracking-wider">WhatsApp</span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">+591 75728767</span>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="w-9 h-9 rounded-lg bg-gold-champagne/10 border border-gold-champagne/25 flex items-center justify-center text-gold-light flex-shrink-0">
                  <MapPin size={15} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-titanium uppercase tracking-wider">Base</span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">Bolivia — Asesorías digitales y presenciales</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marca de Agua */}
      <div aria-hidden="true" className="relative select-none pointer-events-none -mb-2 sm:-mb-4">
        <p className="text-center font-black font-inter tracking-tighter leading-none whitespace-nowrap text-[16vw] lg:text-[10.5rem] bg-gradient-to-b from-white/[0.06] via-white/[0.025] to-transparent bg-clip-text text-transparent">
          LUIS ENRIQUE ALBIS
        </p>
      </div>

      {/* Barra Inferior */}
      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-titanium">
          <p>© {new Date().getFullYear()} Luis Enrique Albis Fernández · Marketing & Mercados Financieros</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-light"></span>
            Disponible para asesorías y mentorías
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
