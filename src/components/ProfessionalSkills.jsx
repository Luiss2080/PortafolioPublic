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
  FileCheck,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

const competenceCategories = [
  {
    id: 'gestion',
    title: 'Gestión Comercial & Dirección',
    icon: <Users size={24} />,
    accent: '#38BDF8',
    desc: 'Liderazgo de proyectos y alineación de equipos para alcanzar metas de ventas y entrega.',
    competences: [
      { name: 'Dirección de Proyectos', icon: <Target size={15} /> },
      { name: 'Estrategia de Crecimiento', icon: <Layers size={15} /> },
      { name: 'Toma de Decisiones', icon: <CheckCircle2 size={15} /> },
      { name: 'Coordinación Multidisciplinar', icon: <Users size={15} /> },
      { name: 'Control Presupuestario', icon: <ShieldCheck size={15} /> },
      { name: 'Metodologías Ágiles', icon: <Workflow size={15} /> }
    ]
  },
  {
    id: 'analitica',
    title: 'Análisis de Rentabilidad & Negocio',
    icon: <LineChart size={24} />,
    accent: '#60A5FA',
    desc: 'Diagnóstico de cuellos de botella y diseño de soluciones basadas en números e impacto real.',
    competences: [
      { name: 'Diagnóstico de Procesos', icon: <LineChart size={15} /> },
      { name: 'Resolución de Problemas', icon: <Lightbulb size={15} /> },
      { name: 'Métricas & KPIs Comerciales', icon: <Target size={15} /> },
      { name: 'Modelado de Negocio', icon: <Layers size={15} /> },
      { name: 'Optimización de Costos', icon: <Workflow size={15} /> },
      { name: 'Informes Ejecutivos', icon: <FileCheck size={15} /> }
    ]
  },
  {
    id: 'adaptabilidad',
    title: 'Versatilidad & Soluciones Prácticas',
    icon: <Zap size={24} />,
    accent: '#818CF8',
    desc: 'Capacidad de aprender, adaptarse y resolver problemas operativos y técnicos en cualquier sector.',
    competences: [
      { name: 'Resolución Integral de Problemas', icon: <Sparkles size={15} /> },
      { name: 'Automatización de Tareas', icon: <Workflow size={15} /> },
      { name: 'Ecosistemas Cloud y Digitales', icon: <Cpu size={15} /> },
      { name: 'Diseño Centrado en Cliente', icon: <Target size={15} /> },
      { name: 'Adaptación a Todo Rubro', icon: <CheckCircle2 size={15} /> },
      { name: 'Control de Estándares', icon: <ShieldCheck size={15} /> }
    ]
  },
  {
    id: 'relaciones',
    title: 'Negociación & Atención a Clientes',
    icon: <MessageSquare size={24} />,
    accent: '#34D399',
    desc: 'Habilidad para generar confianza, negociar acuerdos y articular relaciones de largo plazo.',
    competences: [
      { name: 'Consultoría con Clientes', icon: <Users size={15} /> },
      { name: 'Presentaciones Ejecutivas', icon: <MessageSquare size={15} /> },
      { name: 'Negociación Comercial', icon: <CheckCircle2 size={15} /> },
      { name: 'Gestión de Expectativas', icon: <Target size={15} /> },
      { name: 'Cierre de Acuerdos', icon: <TrendingUp size={15} /> },
      { name: 'Atención Personalizada', icon: <ShieldCheck size={15} /> }
    ]
  }
];

const ProfessionalSkills = () => {
  return (
    <section id="skills" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luces de Fondo Sutiles */}
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
            <Sparkles size={14} className="text-sapphire-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Competencias Integrales
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Capacidades para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-light via-blue-400 to-indigo-300">
              Cualquier Rubro
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Un perfil todoterreno que une liderazgo, visión de negocio, disciplina metodológica y adaptabilidad total.
          </p>
        </div>

        {/* Rejilla de Competencias Centradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
          {competenceCategories.map((category, index) => (
            <motion.div 
              key={category.id} 
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
                    className="absolute top-0 right-0 w-28 h-28 rounded-bl-[90px] -z-10 opacity-5 group-hover:opacity-20 transition-all duration-500" 
                    style={{ backgroundColor: category.accent }}
                  ></div>

                  {/* Encabezado Centrado */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div 
                      className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mb-2.5 shadow-md"
                      style={{ 
                        backgroundColor: `${category.accent}15`,
                        borderColor: `${category.accent}40`,
                        borderWidth: '1px',
                        color: category.accent,
                        boxShadow: `0 0 16px ${category.accent}25`
                      }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-sapphire-light transition-colors mb-1">
                        {category.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto">
                        {category.desc}
                      </p>
                    </div>
                  </div>

                  {/* Lista de Competencias */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto pt-3 border-t border-white/[0.06]">
                    {category.competences.map((comp, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300 group-hover:border-white/15 transition-all duration-200"
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

export default ProfessionalSkills;
