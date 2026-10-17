import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  LineChart, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Target,
  Building,
  Store,
  Factory,
  Globe2,
  BarChart3
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const businessCases = [
  // ESTRATEGIA Y GESTIÓN COMERCIAL
  {
    id: 1,
    title: 'Transformación Operativa B2B',
    category: 'Estrategia',
    impact: '+45% Eficiencia Operativa',
    clientType: 'Servicios Corporativos',
    icon: <Building size={24} />,
    tags: ['Reingeniería de Procesos', 'Gobernanza', 'KPIs'],
    challenge: 'Reducción de tiempos de entrega y sincronización departamental.',
    solution: 'Marco ágil corporativo y automatización de flujos de aprobación.',
    accent: '#38BDF8'
  },
  {
    id: 2,
    title: 'Expansión Comercial & Mercado',
    category: 'Estrategia',
    impact: 'Escalabilidad Multi-Región',
    clientType: 'Retail & Distribución',
    icon: <Store size={24} />,
    tags: ['Estrategia de Mercado', 'Canales Comerciales', 'Roadmap'],
    challenge: 'Hoja de ruta para apertura en 3 nuevas plazas comerciales.',
    solution: 'Auditoría competitiva, optimización de canales y modelo de servicio.',
    accent: '#60A5FA'
  },
  {
    id: 3,
    title: 'Optimización Financiera de Cartera',
    category: 'Estrategia',
    impact: 'ROI Maximizado',
    clientType: 'Finanzas & Inversión',
    icon: <BarChart3 size={24} />,
    tags: ['Control de Rentabilidad', 'Mitigación de Riesgos', 'Reporting'],
    challenge: 'Indicadores dispersos para comités de gerencia general.',
    solution: 'Tablero ejecutivo en tiempo real con alertas predictivas.',
    accent: '#818CF8'
  },

  // DIGITALIZACIÓN DE NEGOCIOS
  {
    id: 4,
    title: 'Ecosistema Comercial & CRM',
    category: 'Digitalización',
    impact: '-60% Tiempo de Respuesta',
    clientType: 'Consultoría & Ventas',
    icon: <Target size={24} />,
    tags: ['Automatización CRM', 'Atención Ágil', 'Trazabilidad 360°'],
    challenge: 'Gestión dispersa de clientes y pérdida de oportunidades de venta.',
    solution: 'Plataforma centralizada con seguimiento automático de prospectos.',
    accent: '#38BDF8'
  },
  {
    id: 5,
    title: 'Canal Transaccional Seguro',
    category: 'Digitalización',
    impact: '99.9% Disponibilidad',
    clientType: 'Servicios Financieros',
    icon: <Globe2 size={24} />,
    tags: ['Seguridad Bancaria', 'Alta Concurrencia', 'UX Comercial'],
    challenge: 'Modernización de cobros y transacciones sin fricción.',
    solution: 'Arquitectura modular resiliente con protocolos de seguridad.',
    accent: '#34D399'
  },
  {
    id: 6,
    title: 'Portal de Autoservicio y Cobranza',
    category: 'Digitalización',
    impact: '+70% Autogestión',
    clientType: 'Logística & Comercio',
    icon: <Factory size={24} />,
    tags: ['Facturación Ágil', 'Autogestión Clientes', 'Cero Filas'],
    challenge: 'Sobrecarga administrativa en emisión de órdenes y cobros.',
    solution: 'Portal dinámico de autoservicio para consulta y pagos directos.',
    accent: '#F59E0B'
  },

  // SISTEMAS INTEGRADOS
  {
    id: 7,
    title: 'Control Logístico de Flota',
    category: 'Operaciones',
    impact: 'Trazabilidad 100% en Vivo',
    clientType: 'Cadena de Suministro',
    icon: <Factory size={24} />,
    tags: ['Rutas Eficientes', 'Monitoreo de Flota', 'Control Despachos'],
    challenge: 'Falta de visibilidad sobre despachos y tiempos de entrega.',
    solution: 'Panel central con geolocalización y métricas de desempeño.',
    accent: '#60A5FA'
  },
  {
    id: 8,
    title: 'Campus de Formación de Personal',
    category: 'Operaciones',
    impact: '+1,200 Colaboradores',
    clientType: 'Recursos Humanos',
    icon: <Building size={24} />,
    tags: ['Onboarding Digital', 'Capacitación Continua', 'Desempeño'],
    challenge: 'Entrenamiento tardío y disperso para nuevas incorporaciones.',
    solution: 'Entorno dinámico de aprendizaje con rutas de avance personalizadas.',
    accent: '#818CF8'
  },
  {
    id: 9,
    title: 'Catálogo Interactivo Comercial',
    category: 'Operaciones',
    impact: '+3.5x Conversión',
    clientType: 'Sector Inmobiliario',
    icon: <Store size={24} />,
    tags: ['Catálogo de Alto Valor', 'Filtros Ágiles', 'Cierre de Ventas'],
    challenge: 'Presentación estática y poco atractiva de propiedades.',
    solution: 'Fichas interactivas con contacto directo a WhatsApp de ventas.',
    accent: '#38BDF8'
  }
];

const filters = [
  { id: 'Estrategia', label: 'Estrategia de Negocios', icon: <Briefcase size={14} /> },
  { id: 'Digitalización', label: 'Digitalización Comercial', icon: <TrendingUp size={14} /> },
  { id: 'Operaciones', label: 'Operaciones & Sistemas', icon: <Layers size={14} /> },
];

const CommercialProjects = () => {
  const [activeFilter, setActiveFilter] = useState('Estrategia');
  const filteredProjects = businessCases.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sapphire-blue/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sapphire-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Encabezado Conciso */}
        <div className="flex flex-col items-center justify-center text-center mb-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Briefcase size={14} className="text-sapphire-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Resultados Comprobados
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Casos de Éxito en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-light via-blue-400 to-indigo-300">
              Diversos Sectores
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Iniciativas ejecutadas con foco en ahorro de costos, aumento de ventas y orden operacional.
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
                  ? 'bg-sapphire-blue text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] border border-sapphire-light/50' 
                  : 'bg-obsidian-card/80 border border-white/[0.08] text-titanium hover:text-white hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Rejilla de Proyectos Centrados con Iconos */}
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
                    <div className="bg-white/[0.02] border-b border-white/[0.06] px-5 py-3 flex justify-between items-center z-20">
                      <span className="text-[11px] font-semibold text-titanium uppercase tracking-wider">
                        {project.clientType}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-bold">
                        <TrendingUp size={11} />
                        {project.impact}
                      </span>
                    </div>

                    {/* Contenido Principal Centrado */}
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

                      <h3 className="text-base sm:text-lg font-bold font-inter text-white leading-snug mb-3 group-hover:text-sapphire-light transition-colors">
                        {project.title}
                      </h3>

                      <div className="space-y-2 mb-4 w-full flex-grow text-left">
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                          <strong className="text-titanium block text-[10px] uppercase tracking-wider">Desafío:</strong>
                          {project.challenge}
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                          <strong className="text-sapphire-light block text-[10px] uppercase tracking-wider">Solución:</strong>
                          {project.solution}
                        </div>
                      </div>

                      {/* Etiquetas de Áreas */}
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
                          href="https://wa.me/59168832828?text=Hola%20Luis,%20me%20interesa%20un%20caso%20similar%20a%20este%20proyecto." 
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-3 rounded-xl border border-white/10 hover:border-sapphire-light/50 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn shadow-sm"
                        >
                          <span>Consultar Iniciativa</span>
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
      </div>
    </section>
  );
};

export default CommercialProjects;
