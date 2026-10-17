import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, ChevronRight, Award, Compass, TrendingUp, Layers } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    title: 'Consultor & Líder de Proyectos',
    company: 'Iniciativas Independientes & Corporativas',
    date: '2024 - Presente',
    duration: 'Actualidad',
    desc: 'Dirección metodológica de proyectos, diseño de estrategias de transformación y coordinación multidisciplinar orientada a resultados de negocio.',
    tags: ["Gestión Estratégica", "Dirección de Proyectos", "Optimización"],
    icon: <Compass size={22} />,
    accent: '#38BDF8',
    number: '01'
  },
  {
    title: 'Estratega de Soluciones & Consultor',
    company: 'Servicios Profesionales',
    date: '2023 - 2024',
    duration: '1 Año 5 Meses',
    desc: 'Diagnóstico organizacional, diseño de hojas de ruta y despliegue de herramientas integradas para clientes de diversos rubros.',
    tags: ["Soluciones Integrales", "Eficiencia Operativa", "Consultoría"],
    icon: <TrendingUp size={22} />,
    accent: '#60A5FA',
    number: '02'
  },
  {
    title: 'Coordinador de Experiencia & Procesos',
    company: 'Soluciones Empresariales',
    date: '2022 - 2023',
    duration: '1 Año 2 Meses',
    desc: 'Estandarización de procesos operativos, aseguramiento de calidad de servicio y optimización de interacción con usuarios finales.',
    tags: ["Calidad de Servicio", "Estandarización", "Diseño de Procesos"],
    icon: <Briefcase size={22} />,
    accent: '#818CF8',
    number: '03'
  },
  {
    title: 'Formación en Ingeniería de Sistemas',
    company: 'Univ. Privada Domingo Savio',
    date: '2020 - 2026',
    duration: 'Egresado',
    desc: 'Formación rigurosa en análisis de sistemas, modelado de procesos, pensamiento algorítmico, gestión de datos y toma de decisiones estructuradas.',
    tags: ["Pensamiento Sistémico", "Análisis de Datos", "Metodologías"],
    icon: <GraduationCap size={22} />,
    accent: '#34D399',
    number: '04'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] min-h-[850px] corporate-grid">
      
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sapphire-blue/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sapphire-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4"
          >
            <Layers size={14} className="text-sapphire-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Trayectoria Profesional
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Evolución &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-light to-blue-400">
              Experiencia Comprobada
            </span>
          </motion.h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Una trayectoria caracterizada por el aprendizaje continuo, la asunción progresiva de responsabilidades de liderazgo y la consecución de objetivos tangibles.
          </p>
        </div>

        {/* Contenedor de Línea de Tiempo */}
        <div className="relative">
          
          {/* Línea horizontal en pantallas grandes */}
          <div className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-[2px] bg-white/[0.08] z-0 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-sapphire-light via-blue-500 to-indigo-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="h-full relative pt-10 lg:pt-16"
              >
                
                {/* Nodo de Línea de Tiempo */}
                <div className="hidden lg:flex absolute top-[12px] left-1/2 transform -translate-x-1/2 flex-col items-center z-20">
                  <div className="w-[2px] h-[52px] absolute top-[12px] pointer-events-none" style={{ backgroundColor: `${exp.accent}40` }}></div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-obsidian-card relative z-10 border border-white/20 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: exp.accent }}></div>
                  </div>
                </div>

                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={2000} className="h-full">
                  <div 
                    className="glass-card p-6 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden shadow-subtle-card flex flex-col h-full"
                    style={{ borderTop: `2px solid ${exp.accent}` }}
                  >
                    
                    {/* Número decorativo tenue */}
                    <div className="absolute -bottom-3 -right-3 text-[90px] font-black text-white/[0.03] select-none pointer-events-none font-inter">
                      {exp.number}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      
                      {/* Cabecera de Tarjeta */}
                      <div className="flex justify-between items-start mb-5">
                        <div 
                          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: `${exp.accent}15`, color: exp.accent, border: `1px solid ${exp.accent}30` }}
                        >
                          {exp.icon}
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md text-slate-200">
                            <Calendar size={10} style={{ color: exp.accent }} /> 
                            {exp.date}
                          </span>
                          <span className="text-[10px] text-titanium font-medium mt-1">{exp.duration}</span>
                        </div>
                      </div>
                      
                      {/* Título y Empresa */}
                      <div className="mb-5 flex-grow">
                        <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-sapphire-light transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-semibold mb-3" style={{ color: exp.accent }}>
                          {exp.company}
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>

                      {/* Etiquetas */}
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.06]">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-[10px] font-medium rounded-md bg-white/[0.02] border border-white/[0.06] text-slate-300 flex items-center gap-1"
                          >
                            <ChevronRight size={10} style={{ color: exp.accent }} />
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
