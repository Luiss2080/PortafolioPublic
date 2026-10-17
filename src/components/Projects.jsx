import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  LineChart, 
  Briefcase, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Target
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const allProjects = [
  // ESTRATEGIA & CONSULTORÍA
  {
    id: 1,
    title: 'Transformación del Modelo Operativo B2B',
    category: 'Estrategia',
    impact: '+45% Eficiencia Operativa',
    clientType: 'Sector Corporativo',
    tags: ['Reingeniería de Procesos', 'Gobernanza', 'KPIs'],
    challenge: 'Reducción de tiempos de entrega y alineación departamental en empresa de servicios.',
    solution: 'Implementación de marco ágil corporativo y automatización de flujos de aprobación.',
    accent: '#34D399',
    link: '#projects'
  },
  {
    id: 2,
    title: 'Plan Estratégico de Expansión Digital',
    category: 'Estrategia',
    impact: 'Escalabilidad Multi-Región',
    clientType: 'Retail & Distribución',
    tags: ['Estrategia de Mercado', 'Arquitectura Comercial', 'Roadmap'],
    challenge: 'Estructuración de hoja de ruta para lanzamiento en 3 nuevos mercados regionales.',
    solution: 'Auditoría competitiva, definición de canales y modelo de servicio integrado.',
    accent: '#60A5FA',
    link: '#projects'
  },
  {
    id: 3,
    title: 'Diagnóstico & Optimización de Cartera',
    category: 'Estrategia',
    impact: 'Retorno de Inversión Maximizado',
    clientType: 'Fondo de Inversiones',
    tags: ['Análisis Financiero', 'Mitigación de Riesgos', 'Reporting'],
    challenge: 'Consolidación de indicadores dispersos para comités de dirección ejecutiva.',
    solution: 'Dashboard ejecutivo en tiempo real con alertas predictivas y modelos de impacto.',
    accent: '#818CF8',
    link: '#projects'
  },

  // TRANSFORMACIÓN DIGITAL
  {
    id: 4,
    title: 'Ecosistema de Gestión y CRM Unificado',
    category: 'Transformación',
    impact: '-60% Tiempo de Respuesta',
    clientType: 'Servicios Profesionales',
    tags: ['Automatización', 'Integración Cloud', 'Experiencia 360°'],
    challenge: 'Gestión fragmentada de clientes potenciales y pérdida de trazabilidad en ventas.',
    solution: 'Despliegue de plataforma centralizada con flujos automáticos de seguimiento.',
    accent: '#34D399',
    link: '#projects'
  },
  {
    id: 5,
    title: 'Modernización de Canales Transaccionales',
    category: 'Transformación',
    impact: '99.9% Disponibilidad Operativa',
    clientType: 'Servicios Financieros',
    tags: ['Alta Disponibilidad', 'Seguridad Corporativa', 'UX Ejecutiva'],
    challenge: 'Modernización de interfaces de usuario y aceleración de transacciones.',
    solution: 'Arquitectura modular resiliente con estándares estrictos de ciberseguridad.',
    accent: '#34D399',
    link: '#projects'
  },
  {
    id: 6,
    title: 'Portal de autoservicio & Facturación Automatizada',
    category: 'Transformación',
    impact: '+70% Autogestión de Clientes',
    clientType: 'Logística & Comercio',
    tags: ['Facturación Electrónica', 'Autogestión', 'SLA Garantizado'],
    challenge: 'Saturación del equipo de soporte en tareas administrativas repetitivas.',
    solution: 'Plataforma intuitiva de autoservicio para consulta de estados y facturas.',
    accent: '#F59E0B',
    link: '#projects'
  },

  // PLATAFORMAS INTEGRADAS
  {
    id: 7,
    title: 'Suite de Control Logístico & Cadena de Suministro',
    category: 'Plataformas',
    impact: 'Trazabilidad 100% en Vivo',
    clientType: 'Cadena de Distribución',
    tags: ['Monitoreo Continuo', 'Control de Rutas', 'Gestión de Flota'],
    challenge: 'Falta de visibilidad sobre despachos y tiempos de entrega a nivel nacional.',
    solution: 'Sistema integrado con paneles de control geográfico y métricas por ruta.',
    accent: '#60A5FA',
    link: '#projects'
  },
  {
    id: 8,
    title: 'Campus Digital de Capacitación Corporativa',
    category: 'Plataformas',
    impact: '+1,200 Colaboradores Activos',
    clientType: 'Recursos Humanos / Talento',
    tags: ['E-Learning', 'Evaluación Continua', 'Métricas de Talento'],
    challenge: 'Estandarización del onboarding y planes de formación continua para personal.',
    solution: 'Entorno de aprendizaje dinámico con rutas personalizadas y analíticas de avance.',
    accent: '#818CF8',
    link: '#projects'
  },
  {
    id: 9,
    title: 'Plataforma Inmobiliaria de Alta Gama',
    category: 'Plataformas',
    impact: '+3.5x Conversión Calificada',
    clientType: 'Desarrollos Inmobiliarios',
    tags: ['Catálogo Interactivo', 'Filtros Dinámicos', 'Presentación Premium'],
    challenge: 'Exhibición interactiva de proyectos residenciales de lujo para inversionistas.',
    solution: 'Experiencia inmersiva con fichas detalladas, visualización guiada y contacto ágil.',
    accent: '#34D399',
    link: '#projects'
  },

  // SOLUCIONES DE IMPACTO
  {
    id: 10,
    title: 'Centro de Inteligencia & Analítica Ejecutiva',
    category: 'Impacto',
    impact: 'Decisiones Basadas en Datos',
    clientType: 'Dirección General',
    tags: ['Business Intelligence', 'Visualización de Datos', 'Previsión'],
    challenge: 'Toma de decisiones con reportes obsoletos y procesos manuales de extracción.',
    solution: 'Cuadros de mando consolidados con KPIs clave para comités de gerencia.',
    accent: '#34D399',
    link: '#projects'
  },
  {
    id: 11,
    title: 'Optimización de Procesos de Cobranza',
    category: 'Impacto',
    impact: '-35% Cartera Vencida',
    clientType: 'Empresa de Servicios',
    tags: ['Gestión de Recaudación', 'Automatización de Avisos', 'Flujos'],
    challenge: 'Retrasos recurrentes en pagos por recordatorios tardíos y dispersos.',
    solution: 'Sistema multicanal de notificaciones programadas con enlace de pago seguro.',
    accent: '#F59E0B',
    link: '#projects'
  },
  {
    id: 12,
    title: 'Sistema de Agendamiento & Atención al Cliente',
    category: 'Impacto',
    impact: 'Cero Tiempos Muertos',
    clientType: 'Clínica & Salud Privada',
    tags: ['Gestión de Turnos', 'Recordatorios SMS/WA', 'Experiencia Paciente'],
    challenge: 'Inasistencias a citas programadas y sobrecarga de personal en recepción.',
    solution: 'Portal de reserva autónoma con confirmaciones automáticas y sincronización de agenda.',
    accent: '#34D399',
    link: '#projects'
  }
];

const filters = [
  { id: 'Estrategia', label: 'Estrategia & Consultoría', icon: <Briefcase size={14} /> },
  { id: 'Transformación', label: 'Transformación Digital', icon: <TrendingUp size={14} /> },
  { id: 'Plataformas', label: 'Plataformas Integradas', icon: <Layers size={14} /> },
  { id: 'Impacto', label: 'Soluciones de Impacto', icon: <Target size={14} /> },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Estrategia');

  const filteredProjects = allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] min-h-[900px] corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4"
          >
            <Briefcase size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Casos de Éxito & Resultados
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Iniciativas &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light via-emerald-bright to-gold-champagne">
              Proyectos de Valor
            </span>
          </motion.h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Una muestra de soluciones desarrolladas con enfoque en rentabilidad, optimización y resolución práctica de problemas para diversos sectores e industrias.
          </p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 relative z-20">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 backdrop-blur-md relative ${
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

        {/* Rejilla de Proyectos con Animación */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-20">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
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
                  tiltMaxAngleX={6} 
                  tiltMaxAngleY={6}
                  scale={1.02}
                  transitionSpeed={2500}
                  className="w-full h-full flex"
                >
                  <div 
                    className="glass-card w-full rounded-2xl bg-obsidian-card/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden shadow-subtle-card flex flex-col h-full"
                    style={{ borderTop: `2px solid ${project.accent}` }}
                  >
                    
                    {/* Barra Superior con Tipo de Cliente y Métrica */}
                    <div className="bg-white/[0.02] border-b border-white/[0.06] px-6 py-3.5 flex justify-between items-center z-20">
                      <span className="text-[11px] font-semibold text-titanium uppercase tracking-wider">
                        {project.clientType}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-[11px] font-bold">
                        <TrendingUp size={12} />
                        {project.impact}
                      </span>
                    </div>

                    {/* Contenido Principal Centrado y Estructurado */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-20 text-center items-center">
                      
                      {/* Icono Distintivo de la Card */}
                      <div 
                        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md"
                        style={{ 
                          backgroundColor: `${project.accent}15`,
                          borderColor: `${project.accent}40`,
                          borderWidth: '1px',
                          color: project.accent,
                          boxShadow: `0 0 16px ${project.accent}25`
                        }}
                      >
                        {project.category === 'Estrategia' ? (
                          <Target size={24} />
                        ) : project.category === 'Transformación' ? (
                          <TrendingUp size={24} />
                        ) : project.category === 'Plataformas' ? (
                          <Layers size={24} />
                        ) : (
                          <Briefcase size={24} />
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold font-inter text-white leading-snug mb-4 group-hover:text-emerald-light transition-colors max-w-sm">
                        {project.title}
                      </h3>

                      <div className="space-y-3 mb-5 w-full flex-grow text-left">
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                          <strong className="text-titanium block mb-1 uppercase text-[10px] tracking-wider text-center sm:text-left">Desafío:</strong>
                          {project.challenge}
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                          <strong className="text-emerald-light block mb-1 uppercase text-[10px] tracking-wider text-center sm:text-left">Solución Aplicada:</strong>
                          {project.solution}
                        </div>
                      </div>

                      {/* Etiquetas de Áreas */}
                      <div className="flex flex-wrap justify-center gap-1.5 mb-6 w-full">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Botón de Enlace/Detalle */}
                      <div className="mt-auto w-full pt-3 border-t border-white/[0.06]">
                        <a 
                          href="https://wa.me/59168832828?text=Hola%20Luis,%20me%20interesa%20conversar%20sobre%20una%20iniciativa%20similar%20a%20este%20caso%20de%20estudio." 
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-emerald-light/50 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn shadow-sm"
                        >
                          <span>Consultar Caso Similar</span>
                          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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

export default Projects;
