import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Users, 
  LineChart, 
  Cpu, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Layers, 
  Workflow, 
  FileCheck 
} from 'lucide-react';

const competenceCategories = [
  {
    id: 'liderazgo',
    title: 'Liderazgo & Gestión',
    icon: <Users size={24} />,
    accent: '#34D399', // Esmeralda
    desc: 'Capacidad para liderar iniciativas, alinear equipos y cumplir metas estratégicas.',
    competences: [
      { name: 'Dirección de Proyectos', icon: <Target size={16} /> },
      { name: 'Planeación Estratégica', icon: <Layers size={16} /> },
      { name: 'Toma de Decisiones', icon: <CheckCircle2 size={16} /> },
      { name: 'Gestión de Equipos', icon: <Users size={16} /> },
      { name: 'Control de Riesgos', icon: <ShieldCheck size={16} /> },
      { name: 'Metodologías Ágiles', icon: <Workflow size={16} /> }
    ]
  },
  {
    id: 'analitica',
    title: 'Pensamiento Analítico & Estratégico',
    icon: <LineChart size={24} />,
    accent: '#60A5FA', // Blue
    desc: 'Análisis de problemáticas complejas y diseño de soluciones basadas en datos.',
    competences: [
      { name: 'Diagnóstico de Procesos', icon: <LineChart size={16} /> },
      { name: 'Resolución de Problemas', icon: <Lightbulb size={16} /> },
      { name: 'Métricas & KPIs', icon: <Target size={16} /> },
      { name: 'Modelado de Negocio', icon: <Layers size={16} /> },
      { name: 'Optimización Operativa', icon: <Workflow size={16} /> },
      { name: 'Inteligencia de Negocio', icon: <FileCheck size={16} /> }
    ]
  },
  {
    id: 'digital',
    title: 'Soluciones Digitales & Innovación',
    icon: <Cpu size={24} />,
    accent: '#818CF8', // Indigo
    desc: 'Dominio de tecnologías y herramientas para construir plataformas de vanguardia.',
    competences: [
      { name: 'Ecosistemas Cloud & Web', icon: <Cpu size={16} /> },
      { name: 'Automatización de Tareas', icon: <Workflow size={16} /> },
      { name: 'Diseño Centrado en Usuario', icon: <Target size={16} /> },
      { name: 'Integración de Plataformas', icon: <Layers size={16} /> },
      { name: 'Arquitectura de Información', icon: <ShieldCheck size={16} /> },
      { name: 'Seguridad & Estándares', icon: <CheckCircle2 size={16} /> }
    ]
  },
  {
    id: 'comunicacion',
    title: 'Comunicación & Relaciones Profesionales',
    icon: <MessageSquare size={24} />,
    accent: '#34D399', // Emerald
    desc: 'Habilidad para articular visiones, negociar con clientes y facilitar acuerdos.',
    competences: [
      { name: 'Consultoría con Clientes', icon: <Users size={16} /> },
      { name: 'Presentaciones Ejecutivas', icon: <MessageSquare size={16} /> },
      { name: 'Negociación Estratégica', icon: <CheckCircle2 size={16} /> },
      { name: 'Gestión de Expectativas', icon: <Target size={16} /> },
      { name: 'Trabajo Colaborativo', icon: <Users size={16} /> },
      { name: 'Atención Personalizada', icon: <ShieldCheck size={16} /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] min-h-[850px] corporate-grid">
      
      {/* Luces de Fondo Sutiles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4"
          >
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Competencias Profesionales
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Matriz de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
              Habilidades Estratégicas
            </span>
          </motion.h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Un conjunto balanceado de competencias directivas, analíticas, tecnológicas y humanas orientadas a la entrega de resultados consistentes.
          </p>
        </div>

        {/* Rejilla de Competencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative z-20">
          {competenceCategories.map((category, index) => (
            <motion.div 
              key={category.id} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-7 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-subtle-card">
                  
                  {/* Destello decorativo */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -z-10 opacity-5 group-hover:opacity-20 transition-all duration-500" 
                    style={{ backgroundColor: category.accent }}
                  ></div>

                  {/* Encabezado de la Tarjeta Centrado */}
                  <div className="flex flex-col items-center text-center mb-5">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mb-3 shadow-md"
                      style={{ 
                        backgroundColor: `${category.accent}15`,
                        borderColor: `${category.accent}40`,
                        borderWidth: '1px',
                        color: category.accent,
                        boxShadow: `0 0 20px ${category.accent}25`
                      }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-light transition-colors mb-1.5">
                        {category.title}
                      </h3>
                      <p className="text-slate-300 text-xs max-w-sm mx-auto">
                        {category.desc}
                      </p>
                    </div>
                  </div>

                  {/* Nube de Competencias Clave */}
                  <div className="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-white/[0.06]">
                    {category.competences.map((comp, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300 group-hover:border-white/15 transition-all duration-200"
                      >
                        <span style={{ color: category.accent }} className="flex-shrink-0">
                          {comp.icon}
                        </span>
                        <span className="text-xs font-medium text-slate-200 truncate">{comp.name}</span>
                      </div>
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

export default Skills;
