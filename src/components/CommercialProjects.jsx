import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Megaphone, 
  Clapperboard, 
  SearchCheck, 
  TrendingUp, 
  Briefcase
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const whatsappUrl = 'https://wa.me/59170000000?text=Hola%20Luis%20Enrique,%20me%20interesa%20un%20caso%20como%20los%20que%20vi%20en%20tu%20portafolio.';

const businessCases = [
  {
    id: 1,
    title: 'Lanzamiento de Marca Local',
    category: 'Comunicación',
    impact: '+180% Alcance',
    result: 'La marca pasó de cero presencia a ser reconocida en su zona en 3 meses.',
    clientType: 'Emprendimiento gastronómico',
    icon: <Megaphone size={24} />,
    tags: ['Mensajes clave', 'Plan de difusión', 'Identidad'],
    challenge: 'Marca nueva sin plan de difusión ni mensajes definidos.',
    solution: 'Mensajes clave, piezas de comunicación y plan de difusión digital y presencial.',
    accent: '#34D399'
  },
  {
    id: 2,
    title: 'Identidad Visual para Redes',
    category: 'Redes y Contenido',
    impact: '+60% Interacción',
    result: 'Comunidad activa y constante: +60% de interacción y +1.200 seguidores en 90 días.',
    clientType: 'Tienda de moda local',
    icon: <Clapperboard size={24} />,
    tags: ['Contenido visual', 'Edición de video', 'Calendario'],
    challenge: 'Redes sin línea visual ni constancia de publicación.',
    solution: 'Identidad visual, calendario de contenido y edición de imagen y video.',
    accent: '#E7C873'
  },
  {
    id: 3,
    title: 'Diagnóstico Estratégico FODA/PESTEL',
    category: 'Estrategia',
    impact: 'Plan de 90 días',
    result: 'Dos segmentos prioritarios definidos y un plan de acción claro para 90 días.',
    clientType: 'Servicio de delivery',
    icon: <SearchCheck size={24} />,
    tags: ['FODA/PESTEL', 'Segmentación', 'Propuesta de valor'],
    challenge: 'Decisiones sin datos: público y ventaja competitiva poco claros.',
    solution: 'Análisis FODA y PESTEL, segmentación de público y propuesta de valor.',
    accent: '#10B981'
  },
  {
    id: 4,
    title: 'Comunidad de Aprendizaje Financiero',
    category: 'Mercados Financieros',
    impact: '+30 Participantes',
    result: 'Principiantes que ganan base y confianza, sesión a sesión. Contenido educativo.',
    clientType: 'Grupo de principiantes',
    icon: <TrendingUp size={24} />,
    tags: ['Educación financiera', 'Análisis de activos', 'Comunidad'],
    challenge: 'Personas curiosas del mercado sin base para entender la operativa.',
    solution: 'Sesiones guiadas paso a paso, análisis de activos y práctica acompañada.',
    accent: '#D4AF37'
  }
];

const filters = [
  { id: 'Todos', label: 'Todos', icon: <Layers size={14} /> },
  { id: 'Comunicación', label: 'Comunicación', icon: <Megaphone size={14} /> },
  { id: 'Redes y Contenido', label: 'Redes y Contenido', icon: <Clapperboard size={14} /> },
  { id: 'Estrategia', label: 'Estrategia', icon: <SearchCheck size={14} /> },
  { id: 'Mercados Financieros', label: 'Mercados Financieros', icon: <TrendingUp size={14} /> },
];

const CommercialProjects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filteredProjects = activeFilter === 'Todos'
    ? businessCases
    : businessCases.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center justify-center text-center mb-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Briefcase size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              01 · Casos
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Casos que muestran el proceso:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
              desafío, solución y resultado
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Así se trabajó: contexto real, decisiones tomadas y el cambio medido.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 relative z-20">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md ${
                activeFilter === filter.id 
                  ? 'bg-emerald-deep text-white shadow-[0_4px_20px_rgba(5,150,105,0.4)] border border-emerald-light/50' 
                  : 'bg-obsidian-card/80 border border-white/[0.08] text-titanium hover:text-white hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Rejilla de Casos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <Tilt 
                  tiltMaxAngleX={5} 
                  tiltMaxAngleY={5}
                  scale={1.01}
                  transitionSpeed={2500}
                  className="w-full h-full flex"
                >
                  <div 
                    className="glass-card w-full rounded-2xl bg-obsidian-card/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/25 transition-all duration-300 group relative overflow-hidden shadow-subtle-card flex flex-col h-full"
                    style={{ borderTop: `2px solid ${project.accent}` }}
                  >
                    
                    {/* Barra Superior con Tipo de Cliente y Métrica */}
                    <div className="bg-white/[0.02] border-b border-white/[0.06] px-5 py-3 flex justify-between items-center gap-2 z-20">
                      <span className="text-[11px] font-semibold text-titanium uppercase tracking-wider truncate">
                        {project.clientType}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-bold whitespace-nowrap">
                        <TrendingUp size={11} />
                        {project.impact}
                      </span>
                    </div>

                    {/* Contenido Principal */}
                    <div className="p-6 flex flex-col flex-grow relative z-20 text-center items-center">
                      
                      {/* Icono Distintivo */}
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-md"
                        style={{ 
                          backgroundColor: `${project.accent}15`,
                          borderColor: `${project.accent}40`,
                          borderWidth: '1px',
                          color: project.accent,
                          boxShadow: `0 0 16px ${project.accent}25`
                        }}
                      >
                        {project.icon}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-inter text-white leading-snug mb-3 group-hover:text-emerald-light transition-colors">
                        {project.title}
                      </h3>

                      <div className="space-y-2 mb-4 w-full flex-grow text-left">
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                          <strong className="text-titanium block text-[10px] uppercase tracking-wider">Desafío:</strong>
                          {project.challenge}
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                          <strong className="text-emerald-light block text-[10px] uppercase tracking-wider">Solución:</strong>
                          {project.solution}
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed bg-gold-champagne/[0.04] p-2.5 rounded-xl border border-gold-champagne/15">
                          <strong className="text-gold-light block text-[10px] uppercase tracking-wider">Resultado:</strong>
                          {project.result}
                        </div>
                      </div>

                      {/* Etiquetas */}
                      <div className="flex flex-wrap justify-center gap-1 mb-5 w-full">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Botón de Enlace/Detalle */}
                      <div className="mt-auto w-full pt-2.5 border-t border-white/[0.06]">
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-3 rounded-xl border border-white/10 hover:border-emerald-light/50 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn shadow-sm"
                        >
                          <span>Consultar iniciativa</span>
                          <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>

                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Nota de cumplimiento financiero */}
        <p className="text-center text-[11px] text-titanium mt-8 relative z-20">
          Los contenidos de mercados financieros son educativos y no constituyen recomendación de inversión.
        </p>
      </div>
    </section>
  );
};

export default CommercialProjects;
