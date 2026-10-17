import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
const faviconImg = '/PortafolioEstandar/img/flavicon.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian-black pt-20 pb-10 border-t border-white/[0.08] relative z-20 overflow-hidden corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-deep/[0.04] rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Perfil & Misión */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <img src={faviconImg} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-white font-inter tracking-tight">
                Luis <span className="text-emerald-light">Rocha</span>
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              Consultor y Gestor de Soluciones Integrales para empresas, líderes y profesionales de cualquier rubro. Creando valor a través de la estrategia, la disciplina metodológica y la innovación aplicada.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a 
                href="https://www.linkedin.com/in/luismariorochavela" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-emerald-light hover:border-emerald-light/50 hover:bg-white/10 transition-all"
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                title="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-pink-400 hover:border-pink-400/50 hover:bg-white/10 transition-all"
              >
                <FaInstagram size={14} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="TikTok"
                title="TikTok"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-teal-300 hover:border-teal-300/50 hover:bg-white/10 transition-all"
              >
                <FaTiktok size={13} />
              </a>
              <a 
                href="https://wa.me/59168832828?text=Hola%20Luis,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto." 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-white/10 transition-all"
              >
                <FaWhatsapp size={15} />
              </a>
              <a 
                href="mailto:luisrochavela1@gmail.com" 
                aria-label="Correo"
                title="Enviar Correo"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-titanium hover:text-white hover:border-emerald-light/50 hover:bg-white/10 transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces de Navegación */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-light"></span>
              Navegación
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"><ArrowUpRight size={13} className="text-emerald-light" /> Inicio</a></li>
              <li><a href="#enfoques" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"><ArrowUpRight size={13} className="text-emerald-light" /> Áreas de Enfoque</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"><ArrowUpRight size={13} className="text-emerald-light" /> Casos de Éxito</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"><ArrowUpRight size={13} className="text-emerald-light" /> Competencias</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"><ArrowUpRight size={13} className="text-emerald-light" /> Sobre mí</a></li>
            </ul>
          </div>

          {/* Col 3: Soluciones */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-light"></span>
              Soluciones Clave
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li>Consultoría Estratégica</li>
              <li>Dirección de Proyectos</li>
              <li>Transformación Digital</li>
              <li>Optimización Operativa</li>
              <li>Diagnóstico de Procesos</li>
            </ul>
          </div>

          {/* Col 4: Datos de Contacto Directo */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Contacto Corporativo
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <a href="mailto:luisrochavela1@gmail.com" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-emerald-light flex-shrink-0">
                    <Mail size={13} />
                  </div>
                  <span className="break-all">luisrochavela1@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/59168832828" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone size={13} />
                  </div>
                  <span>+591 68832828</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-titanium flex-shrink-0">
                  <MapPin size={13} />
                </div>
                <span>Santa Cruz, Bolivia — Disponible Internacionalmente</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Cierre Institucional */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-titanium">
          <p>
            © {new Date().getFullYear()} Luis Mario Rocha Vela. Portafolio Estándar & Corporativo.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Disponibilidad Inmediata para Proyectos y Consultorías</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
