import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Compass, 
  Layers, 
  Workflow, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    num: "01",
    icon: <Compass size={24} />,
    title: "Consultoría & Estrategia Integral",
    desc: "Diagnóstico profundo de necesidades, formulación de hojas de ruta ejecutivas y asesoramiento para toma de decisiones de alto impacto.",
    tags: ["Diagnóstico Estratégico", "Modelos de Valor", "Hoja de Ruta"],
    accent: "#34D399" // Esmeralda
  },
  {
    num: "02",
    icon: <Layers size={24} />,
    title: "Dirección & Gestión de Proyectos",
    desc: "Liderazgo metodológico integral para planificar, coordinar y entregar proyectos complejos dentro de tiempo, presupuesto y estándares de excelencia.",
    tags: ["Gestión Ágil & Rigurosa", "Control de Hitos", "Mitigación de Riesgos"],
    accent: "#60A5FA" // Blue
  },
  {
    num: "03",
    icon: <Workflow size={24} />,
    title: "Soluciones Digitales a Medida",
    desc: "Conceptualización e implementación de herramientas modernas, plataformas corporativas y canales interactivos adaptados al modelo de negocio.",
    tags: ["Experiencia de Usuario", "Arquitectura Moderna", "Escalabilidad"],
    accent: "#818CF8" // Indigo
  },
  {
    num: "04",
    icon: <LineChart size={24} />,
    title: "Optimización & Eficiencia Operativa",
    desc: "Reingeniería de procesos, sistematización de flujos y análisis de rendimiento para potenciar la productividad y rentabilidad de la organización.",
    tags: ["Automatización de Flujos", "Métricas & KPIs", "Mejora Continua"],
    accent: "#34D399" // Emerald
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] min-h-[750px] flex items-center corporate-grid">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.06] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4"
          >
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Soluciones & Servicios
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Capacidades Diseñadas para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-gold-light">
              Generar Resultados
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed"
          >
            Servicios estructurados con visión ejecutiva para resolver problemáticas complejas, optimizar la operación y elevar el posicionamiento de tu marca o empresa.
          </motion.p>
        </div>

        {/* Rejilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-20">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-6 md:p-7 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-subtle-card">
                  
                  {/* Destello decorativo de esquina */}
                  <div 
                    className="absolute top-0 right-0 w-28 h-28 rounded-bl-[90px] -z-10 opacity-5 group-hover:opacity-20 transition-all duration-500" 
                    style={{ backgroundColor: service.accent }}
                  ></div>

                  <div className="relative z-10 flex flex-col flex-grow items-center text-center">
                    
                    {/* Encabezado: Icono Centrado con Glow + Número */}
                    <div className="flex flex-col items-center mb-4">
                      <div 
                        className="w-14 h-14 p-3.5 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 relative mb-2"
                        style={{ 
                          backgroundColor: `${service.accent}15`,
                          borderColor: `${service.accent}40`,
                          borderWidth: '1px',
                          color: service.accent,
                          boxShadow: `0 0 20px ${service.accent}25`
                        }}
                      >
                        {service.icon}
                      </div>
                      
                      <span 
                        className="text-[11px] font-black tracking-widest uppercase font-inter opacity-70"
                        style={{ color: service.accent }}
                      >
                        Solución {service.num}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-light transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                      {service.desc}
                    </p>

                    {/* Etiquetas Centradas */}
                    <div className="flex flex-wrap justify-center gap-1.5 mt-auto mb-6">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300 flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={11} style={{ color: service.accent }} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-auto w-full pt-2 border-t border-white/[0.06]">
                      <a 
                        href="https://wa.me/59175728767?text=Hola%20Luis%20Enrique,%20quisiera%20consultar%20sobre%20tus%20servicios%20y%20soluciones."
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-semibold font-inter transition-all flex items-center justify-center gap-2 group/btn hover:bg-white/5 text-slate-200 hover:text-white hover:border-emerald-light/50"
                      >
                        <span>Consultar Solución</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>

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

export default Services;
