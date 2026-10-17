import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  SearchCheck,
  Clapperboard,
  Lightbulb,
  TrendingUp,
  ScanSearch, 
  Search,
  Users, 
  Target, 
  CheckCircle2, 
  Image,
  Video,
  CalendarDays,
  Palette,
  MessageSquare,
  BarChart3,
  ClipboardList,
  ListChecks,
  Globe,
  LineChart,
  ShieldCheck,
  GraduationCap,
  Workflow,
  Sparkles
} from 'lucide-react';

const competenceCategories = [
  {
    id: 'marketing',
    title: 'Estrategia de Marketing y Análisis',
    icon: <SearchCheck size={24} />,
    accent: '#34D399',
    desc: 'Entiendo el negocio y el mercado para decidir con base: análisis, segmentación y planes claros.',
    competences: [
      { name: 'FODA & PESTEL', icon: <ScanSearch size={15} /> },
      { name: 'Investigación de mercado', icon: <Search size={15} /> },
      { name: 'Segmentación de público', icon: <Users size={15} /> },
      { name: 'Propuesta de valor', icon: <Target size={15} /> },
      { name: 'Objetivos & KPIs', icon: <TrendingUp size={15} /> },
      { name: 'Toma de decisiones', icon: <CheckCircle2 size={15} /> }
    ]
  },
  {
    id: 'contenido',
    title: 'Contenido y Redes Sociales',
    icon: <Clapperboard size={24} />,
    accent: '#E7C873',
    desc: 'Creo contenido que conecta: imagen, video y copy con una línea visual coherente.',
    competences: [
      { name: 'Edición de imagen', icon: <Image size={15} /> },
      { name: 'Edición de video', icon: <Video size={15} /> },
      { name: 'Calendario de contenido', icon: <CalendarDays size={15} /> },
      { name: 'Identidad visual', icon: <Palette size={15} /> },
      { name: 'Copy para redes', icon: <MessageSquare size={15} /> },
      { name: 'Métricas de redes', icon: <BarChart3 size={15} /> }
    ]
  },
  {
    id: 'emprendedores',
    title: 'Soluciones para Emprendedores',
    icon: <Lightbulb size={24} />,
    accent: '#10B981',
    desc: 'Traduzco las necesidades del negocio en soluciones concretas y priorizadas.',
    competences: [
      { name: 'Diagnóstico del negocio', icon: <ClipboardList size={15} /> },
      { name: 'Soluciones a medida', icon: <Lightbulb size={15} /> },
      { name: 'Priorización de acciones', icon: <ListChecks size={15} /> },
      { name: 'Digital y presencial', icon: <Globe size={15} /> },
      { name: 'Acompañamiento cercano', icon: <Users size={15} /> },
      { name: 'Planes de crecimiento', icon: <TrendingUp size={15} /> }
    ]
  },
  {
    id: 'mercados',
    title: 'Mercados Financieros y Mentoría',
    icon: <TrendingUp size={24} />,
    accent: '#D4AF37',
    desc: 'Explico el mercado paso a paso y acompaño el aprendizaje con comunidad y práctica guiada.',
    competences: [
      { name: 'Análisis del mercado', icon: <LineChart size={15} /> },
      { name: 'Comportamiento de activos', icon: <BarChart3 size={15} /> },
      { name: 'Compra y venta paso a paso', icon: <Workflow size={15} /> },
      { name: 'Gestión de riesgo', icon: <ShieldCheck size={15} /> },
      { name: 'Explicación didáctica', icon: <GraduationCap size={15} /> },
      { name: 'Comunidad de aprendizaje', icon: <Users size={15} /> }
    ],
    notice: 'Contenido educativo; no constituye recomendación de inversión.'
  }
];

const ProfessionalSkills = () => {
  return (
    <section id="skills" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luces de Fondo Sutiles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              03 · Competencias
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Un perfil que une{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
              marketing y visión financiera
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Estrategia, contenido, soluciones para emprendedores y educación financiera: cuatro áreas que se refuerzan entre sí.
          </p>
        </div>

        {/* Rejilla de Competencias */}
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
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-emerald-light transition-colors mb-1">
                        {category.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto">
                        {category.desc}
                      </p>
                    </div>
                  </div>

                  {/* Lista de Competencias */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 mt-auto pt-3 border-t border-white/[0.06]">
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

                  {/* Aviso educativo (compliance) */}
                  {category.notice && (
                    <p className="text-[10px] text-gold-light/90 italic mt-3 leading-relaxed">
                      {category.notice}
                    </p>
                  )}

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
