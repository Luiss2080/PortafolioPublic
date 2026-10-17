import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText, Sparkles, ArrowRight } from 'lucide-react';
const faviconImg = '/PortafolioEstandar/img/flavicon.png';

const navItems = [
  { name: 'Inicio', href: '#home', id: 'home' },
  { name: 'Enfoques', href: '#enfoques', id: 'enfoques' },
  { name: 'Proyectos', href: '#projects', id: 'projects' },
  { name: 'Competencias', href: '#skills', id: 'skills' },
  { name: 'Soluciones', href: '#services', id: 'services' },
  { name: 'Trayectoria', href: '#experience', id: 'experience' },
  { name: 'Credenciales', href: '#certificates', id: 'certificates' },
  { name: 'Sobre mí', href: '#about', id: 'about' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-obsidian-black/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.7)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Corporativo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group flex-shrink-0 cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-emerald-light/80 group-hover:shadow-[0_0_20px_rgba(5,150,105,0.4)] transition-all duration-300 flex-shrink-0 bg-white/5">
              <img 
                src={faviconImg} 
                alt="Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold whitespace-nowrap font-inter tracking-tight text-white group-hover:text-white transition-colors">
                Luis <span className="text-emerald-light">Rocha</span>
              </span>
              <span className="text-[10px] text-titanium uppercase tracking-wider hidden sm:block -mt-1 font-medium">
                Estrategia & Soluciones
              </span>
            </div>
          </a>

          {/* Navegación Central */}
          <nav 
            className="hidden lg:flex items-center flex-shrink-0"
            onMouseLeave={() => setHoveredNav(null)}
          >
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredNav === item.id;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold font-inter tracking-wide transition-all duration-200 rounded-full flex items-center justify-center ${
                      isActive 
                        ? 'text-white' 
                        : isHovered 
                        ? 'text-slate-200' 
                        : 'text-titanium'
                    }`}
                  >
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-emerald-deep/20 border border-emerald-light/50 shadow-[0_0_20px_rgba(5,150,105,0.35)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}

                    <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </nav>

          {/* Acciones Corporativas */}
          <div className="hidden lg:flex items-center gap-3.5">
            <motion.a
              href={`${import.meta.env.BASE_URL}pdf/CurriculumLuis.pdf`}
              download="CurriculumLuis.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-platinum text-xs sm:text-sm font-semibold font-inter hover:bg-white/10 hover:border-emerald-light/50 hover:shadow-emerald transition-all duration-300 group whitespace-nowrap"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 pointer-events-none" />
              <FileText size={15} className="text-emerald-light group-hover:scale-110 transition-transform duration-300" />
              <span>Curriculum</span>
            </motion.a>

            <motion.a
              href="https://wa.me/59168832828?text=Hola%20Luis,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto%20o%20consultor%C3%ADa."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-deep text-white text-xs sm:text-sm font-semibold font-inter hover:bg-emerald-bright shadow-[0_4px_20px_rgba(5,150,105,0.4)] transition-all duration-300 whitespace-nowrap"
            >
              <span>Contactar</span>
              <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Menú Móvil Botón */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian-card/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 mt-3 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-emerald-deep/20 text-emerald-light border border-emerald-light/30'
                      : 'text-titanium hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`${import.meta.env.BASE_URL}pdf/CurriculumLuis.pdf`}
                download="CurriculumLuis.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-platinum text-sm font-semibold"
              >
                <FileText size={16} />
                <span>Curriculum</span>
              </a>
              <a
                href="https://wa.me/59168832828?text=Hola%20Luis,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto%20o%20consultor%C3%ADa."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-deep text-white text-sm font-semibold shadow-emerald"
              >
                <span>Contactar por WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
