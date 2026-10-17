import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Briefcase, 
  Target, 
  Mail, 
  TrendingUp, 
  CheckCircle2, 
  GraduationCap, 
  Lightbulb 
} from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const profileImg = '/PortafolioEstandar/img/perfil.png';
const whatsappUrl = 'https://wa.me/59170000000?text=Hola%20Luis%20Enrique,%20quiero%20agendar%20una%20asesor%C3%ADa.';

const CommercialHero = () => {
  return (
    <section id="home" className="min-h-screen bg-obsidian-black relative flex items-center pt-28 pb-16 overflow-hidden corporate-grid">
      
      {/* Luz ambiental sutil y elegante */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-deep/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-light/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Fondo de partículas temático (identidad v2) */}
      <ParticlesBackground />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Contenido Izquierdo (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 max-w-2xl text-left">
            
            {/* Badge de Perfil */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5">
                <GraduationCap size={13} className="text-emerald-light" />
                Estudiante de Marketing, Publicidad y Comercio
              </span>
            </motion.div>

            {/* Titular de Alto Impacto */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[52px] font-black text-white leading-[1.15] tracking-tight font-inter"
            >
              Hago crecer tu marca con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne text-glow-emerald">
                estrategia, contenido y visión financiera.
              </span>
            </motion.h1>

            {/* Párrafo de Propuesta Dual */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            >
              Soy <strong className="text-white font-semibold">Luis Enrique Abri Fernández</strong>, estudiante de Marketing, Publicidad y Comercio y <strong className="text-white font-semibold">mentor en Mercados Financieros</strong>. Combino el marketing que hace crecer tu marca con la visión financiera para decidir con inteligencia. Mi forma de trabajar: Identifico el problema → Diseño la solución → La entrego de forma clara, digital o presencial.
            </motion.p>

            {/* Micro-puntos de Valor */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Target size={15} className="text-emerald-light flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Soluciones a medida</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Lightbulb size={15} className="text-gold-champagne flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Paso a paso</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] col-span-2 sm:col-span-1">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Digital & Presencial</span>
              </div>
            </motion.div>

            {/* Llamados a la acción (CTAs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-emerald-deep text-white font-semibold font-inter rounded-xl hover:bg-emerald-hover hover:scale-[1.02] shadow-[0_4px_25px_rgba(5,150,105,0.4)] transition-all flex items-center gap-2 group text-xs sm:text-sm"
              >
                <span>Agenda una asesoría</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="#services" 
                className="px-6 py-3 bg-white/[0.04] border border-white/15 text-platinum font-semibold font-inter rounded-xl hover:bg-white/[0.08] hover:border-emerald-light/40 hover:text-white hover:scale-[1.02] transition-all flex items-center gap-2 text-xs sm:text-sm backdrop-blur-md shadow-subtle-card group"
              >
                <span>Conoce mis soluciones</span>
                <Briefcase size={16} className="text-emerald-light group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* Canales y Redes Sociales */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08]"
            >
              <span className="text-titanium text-[11px] font-semibold uppercase tracking-wider">Contacto & Redes:</span>
              <div className="flex flex-wrap items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/luis-enrique-abri-fernandez" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a 
                  href="https://www.instagram.com/luisabri.marketing" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-gold-light hover:border-gold-champagne/50 hover:bg-white/10 transition-all"
                >
                  <FaInstagram size={14} />
                </a>
                <a 
                  href="https://www.tiktok.com/@luisabri.marketing" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-gold-light hover:border-gold-champagne/50 hover:bg-white/10 transition-all"
                >
                  <FaTiktok size={13} />
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-white/10 transition-all"
                >
                  <FaWhatsapp size={15} />
                </a>
                <a 
                  href="mailto:luisabri.contacto@gmail.com" 
                  aria-label="Correo"
                  title="Enviar Correo"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
                >
                  <Mail size={14} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contenido Derecho (Fotografía + Tarjetas Flotantes) - 5 cols */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            
            {/* Esfera Atmosférica de Fondo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] globe-bg border border-white/5 rounded-full"></div>
            </div>

            {/* Imagen de Perfil Profesional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] flex items-center justify-center"
            >
              <img 
                src={profileImg} 
                alt="Luis Enrique Abri Fernández"
                className="w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </motion.div>

            {/* Tarjeta Flotante 1: Enfoque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
              }}
              className="absolute -top-2 right-0 sm:right-4 z-20 glass-card p-3 sm:p-4 flex items-center gap-3 max-w-[190px] sm:max-w-[210px] shadow-glass"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-deep/20 border border-emerald-light/30 flex items-center justify-center text-emerald-light flex-shrink-0">
                <Target size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-titanium font-medium">Enfoque</span>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">Problema → Solución</span>
              </div>
            </motion.div>

            {/* Tarjeta Flotante 2: Visión Dual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, 8, 0],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.7 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="absolute bottom-4 left-0 sm:left-2 z-20 glass-card p-3 sm:p-4 flex items-center gap-3 max-w-[190px] sm:max-w-[210px] shadow-glass"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-champagne/15 border border-gold-champagne/30 flex items-center justify-center text-gold-light flex-shrink-0">
                <TrendingUp size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-white leading-none">Marketing + Finanzas</span>
                <span className="text-[11px] text-titanium font-medium mt-0.5">Visión dual</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CommercialHero;
