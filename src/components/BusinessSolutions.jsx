import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Building2, 
  Layers, 
  Workflow, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShoppingBag,
  Zap,
  Target
} from 'lucide-react';

const businessServices = [
  {
    num: "01",
    icon: <Building2 size={24} />,
    title: "Estrategia & Consultoría Comercial",
    desc: "Diagnóstico de modelos de negocio, apertura de canales y planificación estratégica para maximizar ventas.",
    tags: ["Diagnóstico", "Modelos Comerciales", "Hoja de Ruta"],
    accent: "#38BDF8"
  },
  {
    num: "02",
    icon: <Layers size={24} />,
    title: "Dirección & Gestión de Proyectos",
    desc: "Liderazgo de iniciativas de principio a fin asegurando entrega a tiempo, control presupuestario y calidad.",
    tags: ["Gestión Ágil", "Control de Hitos", "Riesgos"],
    accent: "#60A5FA"
  },
  {
    num: "03",
    icon: <Workflow size={24} />,
    title: "Sistemas & Soluciones a Medida",
    desc: "Implementación de herramientas dinámicas, canales digitales y plataformas para potenciar marcas y ventas.",
    tags: ["Canales Digitales", "Automatización", "Escalabilidad"],
    accent: "#818CF8"
  },
  {
    num: "04",
    icon: <LineChart size={24} />,
    title: "Optimización Operativa & Procesos",
    desc: "Sistematización de tareas repetitivas y reducción de costos para elevar la rentabilidad diaria.",
    tags: ["Eficiencia", "Métricas KPIs", "Mejora Continua"],
    accent: "#34D399"
  }
];

const BusinessSolutions = () => {
  return (
    <section id="services" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] flex items-center corporate-grid">
      
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sapphire-blue/[0.06] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sapphire-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Sparkles size={14} className="text-sapphire-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Soluciones para Empresas
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Servicios Diseñados para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-light to-blue-400">
              Generar Ingresos y Orden
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Propuestas prácticas y adaptables a cualquier volumen de operación e industria.
          </p>
        </div>

        {/* Rejilla de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {businessServices.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-6 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col h-full shadow-subtle-card">
                  
                  {/* Destello decorativo */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] -z-10 opacity-5 group-hover:opacity-20 transition-all duration-500" 
                    style={{ backgroundColor: service.accent }}
                  ></div>

                  <div className="relative z-10 flex flex-col flex-grow items-center text-center">
                    
                    {/* Icono Centrado con Glow */}
                    <div className="flex flex-col items-center mb-3">
                      <div 
                        className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 relative mb-1.5"
                        style={{ 
                          backgroundColor: `${service.accent}15`,
                          borderColor: `${service.accent}40`,
                          borderWidth: '1px',
                          color: service.accent,
                          boxShadow: `0 0 16px ${service.accent}25`
                        }}
                      >
                        {service.icon}
                      </div>
                      
                      <span 
                        className="text-[10px] font-black tracking-widest uppercase font-inter opacity-60"
                        style={{ color: service.accent }}
                      >
                        Solución {service.num}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-sapphire-light transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                      {service.desc}
                    </p>

                    {/* Etiquetas Centradas */}
                    <div className="flex flex-wrap justify-center gap-1 mt-auto mb-4">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 flex items-center gap-1"
                        >
                          <CheckCircle2 size={10} style={{ color: service.accent }} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-auto w-full pt-2 border-t border-white/[0.06]">
                      <a 
                        href="https://wa.me/59168832828?text=Hola%20Luis,%20quisiera%20consultar%20sobre%20tus%20soluciones%20empresariales."
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-xl border border-white/10 text-xs font-semibold font-inter transition-all flex items-center justify-center gap-1.5 group/btn hover:bg-white/5 text-slate-200 hover:text-white hover:border-sapphire-light/50"
                      >
                        <span>Consultar Solución</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
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

export default BusinessSolutions;
