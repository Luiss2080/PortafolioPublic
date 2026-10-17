import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Lightbulb, 
  TrendingUp, 
  Building2
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const careerMilestones = [
  {
    title: 'Formación en Marketing, Publicidad y Comercio',
    company: 'Formación Universitaria',
    date: '2022 - Presente',
    duration: 'En curso',
    desc: 'Base académica en marketing, publicidad y comercio: estrategias de comunicación, análisis de mercado, comportamiento del consumidor y comercialización.',
    tags: ["Marketing", "Publicidad", "Comercio"],
    icon: <GraduationCap size={22} />,
    accent: '#10B981',
    number: '01'
  },
  {
    title: 'Experiencia Práctica con Emprendedores',
    company: 'Proyectos de marketing y comunicación',
    date: '2023 - Presente',
    duration: 'Actualidad',
    desc: 'Trabajo directo con emprendedores: diagnóstico de problemas, estrategias de comunicación, contenido para redes y soluciones que se adaptan al día a día del negocio.',
    tags: ["Marketing digital", "Contenido", "Soluciones a medida"],
    icon: <Lightbulb size={22} />,
    accent: '#34D399',
    number: '02'
  },
  {
    title: 'Mentor en Mercados Financieros',
    company: 'Comunidad de aprendizaje',
    date: '2024 - Presente',
    duration: 'Actualidad',
    desc: 'Acompaño el aprendizaje del mercado y su operativa paso a paso: análisis de activos, práctica guiada y gestión de riesgo, en una comunidad que crece junta.',
    tags: ["Mentoría", "Análisis de mercados", "Comunidad"],
    icon: <TrendingUp size={22} />,
    accent: '#D4AF37',
    number: '03'
  }
];

const ProfessionalTrajectory = () => {
  return (
    <section id="experience" className="py-24 bg-obsidian-black relative overflow-hidden section-sep corporate-grid">
      
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <span aria-hidden="true" className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 -z-10 text-[110px] sm:text-[170px] font-black font-inter leading-none text-white/[0.03]">04</span>
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Award size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              04 · Trayectoria
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Aprender, aplicar y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
              compartir lo aprendido
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Del aula al trabajo real, y de ahí a la mentoría: tres etapas de un mismo camino.
          </p>
        </div>

        {/* Rejilla de Hitos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {careerMilestones.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-6 sm:p-7 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-subtle-card">
                  
                  {/* Destello decorativo */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] -z-10 opacity-5 group-hover:opacity-20 transition-all duration-500" 
                    style={{ backgroundColor: item.accent }}
                  ></div>

                  {/* Encabezado con Icono y Periodo */}
                  <div className="flex justify-between items-start mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{ 
                        backgroundColor: `${item.accent}15`,
                        borderColor: `${item.accent}40`,
                        borderWidth: '1px',
                        color: item.accent,
                        boxShadow: `0 0 15px ${item.accent}20`
                      }}
                    >
                      {item.icon}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                        <Calendar size={11} className="text-emerald-light" />
                        {item.date}
                      </span>
                      <span className="text-[10px] text-titanium mt-1 font-medium">{item.duration}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase font-inter opacity-60 block mb-1" style={{ color: item.accent }}>
                      Hito {item.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-emerald-light transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                      <Building2 size={13} className="text-emerald-light" />
                      {item.company}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Etiquetas */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.06]">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle2 size={10} style={{ color: item.accent }} />
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalTrajectory;
