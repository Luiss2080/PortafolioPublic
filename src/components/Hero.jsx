import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, Briefcase, Users, TrendingUp, CheckCircle, Mail, MessageSquare } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
const profileImg = `${import.meta.env.BASE_URL}img/perfil.png`;

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-obsidian-black relative flex items-center pt-32 pb-16 overflow-hidden corporate-grid">
      
      {/* Luz ambiental sutil y elegante */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-deep/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-light/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Contenido Izquierdo (Propuesta Ejecutiva) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
            
            {/* Badge de Disponibilidad y Versatilidad */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
              <span className="text-titanium text-xs md:text-sm font-medium tracking-wide">
                Perfil Integral • Gestión, Estrategia & Ejecución Multidisciplinar
              </span>
            </motion.div>

            {/* Titular Principal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.12] tracking-tight font-inter"
            >
              Capacidad integral para resolver{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne text-glow-emerald">
                cualquier desafío
              </span>{' '}
              con adaptabilidad y resultados.
            </motion.h1>

            {/* Descripción Profesional Adaptable a Todo Tipo de Cliente */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
            >
              Soy <strong className="text-white font-semibold">Luis Enrique Abri Fernández</strong>. Combino el <strong className="text-white font-medium">marketing</strong> que hace crecer tu marca con la visión de los <strong className="text-white font-medium">mercados financieros</strong>: identifico el problema, diseño la solución y la entrego de forma clara, digital o presencial.
            </motion.p>

            {/* Llamados a la acción (CTAs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href="#projects" 
                className="px-7 py-3.5 bg-emerald-deep text-white font-semibold font-inter rounded-xl hover:bg-emerald-hover hover:scale-[1.02] shadow-[0_4px_25px_rgba(5,150,105,0.4)] transition-all flex items-center gap-2 group text-sm md:text-base"
              >
                <span>Explorar Casos de Éxito</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="#services" 
                className="px-7 py-3.5 bg-white/[0.04] border border-white/15 text-platinum font-semibold font-inter rounded-xl hover:bg-white/[0.08] hover:border-emerald-light/40 hover:text-white hover:scale-[1.02] transition-all flex items-center gap-2.5 text-sm md:text-base backdrop-blur-md shadow-subtle-card group"
              >
                <span>Soluciones & Propuesta</span>
                <Briefcase size={18} className="text-emerald-light group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* Canales de Contacto Ejecutivo y Redes Sociales */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]"
            >
              <span className="text-titanium text-xs font-semibold uppercase tracking-wider">Redes & Contacto:</span>
              <div className="flex flex-wrap items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/luis-enrique-abri-fernandez" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
                >
                  <FaLinkedinIn size={15} />
                </a>
                <a 
                  href="https://www.instagram.com/luisabri.marketing" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-gold-light hover:border-gold-champagne/50 hover:bg-white/10 transition-all"
                >
                  <FaInstagram size={15} />
                </a>
                <a 
                  href="https://www.tiktok.com/@luisabri.marketing" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-gold-light hover:border-gold-champagne/50 hover:bg-white/10 transition-all"
                >
                  <FaTiktok size={14} />
                </a>
                <a 
                  href="https://wa.me/59170000000?text=Hola%20Luis%20Enrique,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto." 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-white/10 transition-all"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a 
                  href="mailto:luisabri.contacto@gmail.com" 
                  aria-label="Correo Electrónico"
                  title="Enviar Correo"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contenido Derecho (Fotografía + Tarjetas Ejecutivas Flotantes) - 5 cols */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]">
            
            {/* Esfera Atmosférica de Fondo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] globe-bg border border-white/5 rounded-full"></div>
            </div>

            {/* Imagen de Perfil Profesional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full max-w-[340px] md:max-w-[420px] flex items-center justify-center"
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

            {/* Tarjeta Flotante 1: Compromiso y Calidad */}
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
              className="absolute -top-4 -right-2 md:right-4 z-20 glass-card p-4 flex items-center gap-3.5 max-w-[210px] shadow-glass"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-deep/20 border border-emerald-light/30 flex items-center justify-center text-emerald-light flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-titanium font-medium">Estándar</span>
                <span className="text-sm font-bold text-white leading-tight">Calidad Garantizada</span>
              </div>
            </motion.div>

            {/* Tarjeta Flotante 2: Métricas de Resultados */}
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
              className="absolute bottom-6 -left-2 md:left-2 z-20 glass-card p-4 flex items-center gap-3.5 max-w-[220px] shadow-glass"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <TrendingUp size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-none">100%</span>
                <span className="text-xs text-titanium font-medium mt-0.5">Enfoque en Objetivos</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
