import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  Compass, 
  TrendingUp, 
  Layers,
  Building2,
  Users
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const careerMilestones = [
  {
    title: 'Consultor & Líder de Proyectos',
    company: 'Iniciativas Empresariales & Comerciales',
    date: '2024 - Presente',
    duration: 'Actualidad',
    desc: 'Dirección metodológica de proyectos, diseño de estrategias de transformación y coordinación multidisciplinar orientada a resultados.',
    tags: ["Gestión Integral", "Dirección de Proyectos", "Optimización"],
    icon: <Compass size={22} />,
    accent: '#38BDF8',
    number: '01'
  },
  {
    title: 'Estratega de Soluciones de Negocio',
    company: 'Consultoría & Servicios Profesionales',
    date: '2023 - 2024',
    duration: '1 Año 5 Meses',
    desc: 'Diagnóstico organizacional, estructuración de procesos comerciales y despliegue de plataformas integradas para diversos rubros.',
    tags: ["Estrategia Comercial", "Eficiencia Operativa", "Negocios"],
    icon: <TrendingUp size={22} />,
    accent: '#60A5FA',
    number: '02'
  },
  {
    title: 'Coordinador Operativo & Calidad',
    company: 'Soluciones Corporativas',
    date: '2022 - 2023',
    duration: '1 Año 2 Meses',
    desc: 'Estandarización de flujos de trabajo, control de calidad en la entrega y optimización de interacción con clientes y usuarios finales.',
    tags: ["Calidad de Entrega", "Estandarización", "Atención"],
    icon: <Briefcase size={22} />,
    accent: '#818CF8',
    number: '03'
  },
  {
    title: 'Formación en Ingeniería de Sistemas',
    company: 'Univ. Privada Domingo Savio',
    date: '2020 - 2026',
    duration: 'Egresado',
    desc: 'Formación rigurosa en análisis sistémico, modelado de procesos, pensamiento lógico estructurado y toma de decisiones.',
    tags: ["Pensamiento Sistémico", "Análisis de Datos", "Metodologías"],
    icon: <GraduationCap size={22} />,
    accent: '#34D399',
    number: '04'
  }
];

const ProfessionalTrajectory = () => {
  return (
    <section id="experience" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sapphire-blue/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sapphire-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Award size={14} className="text-sapphire-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Trayectoria Profesional
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Experiencia &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-light via-blue-400 to-indigo-300">
              Liderazgo de Proyectos
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Una carrera construida sobre la disciplina, la entrega oportuna y la satisfacción de clientes y equipos de trabajo.
          </p>
        </div>

        {/* Rejilla de Hitos de Carrera */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
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

                  {/* Encabezado con Icono Centrado y Periodo */}
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
                        <Calendar size={11} className="text-sapphire-light" />
                        {item.date}
                      </span>
                      <span className="text-[10px] text-titanium mt-1 font-medium">{item.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-sapphire-light transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                      <Building2 size={13} className="text-sapphire-light" />
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
