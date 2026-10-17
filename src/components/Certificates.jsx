import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Gestión Estratégica & Liderazgo de Proyectos",
    issuer: "Institución Internacional Certificadora",
    year: "2024",
    tags: ["Gestión Ágil", "Liderazgo Directivo", "Entrega Continua"],
    link: "#"
  },
  {
    id: 2,
    title: "Especialización en Transformación & Arquitectura Digital",
    issuer: "Programa de Innovación Empresarial",
    year: "2023",
    tags: ["Estrategia Digital", "Procesos Cloud", "Seguridad"],
    link: "#"
  },
  {
    id: 3,
    title: "Diseño de Experiencia & Metodologías Centradas en el Cliente",
    issuer: "Certificación Corporativa Global",
    year: "2024",
    tags: ["Experiencia de Usuario", "Prototipado", "Validación"],
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] min-h-[750px] flex items-center corporate-grid">
      
      {/* Luz Ambiental Suave */}
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
            <Award size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Credenciales & Avales
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Certificaciones &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-gold-light">
              Respaldo Profesional
            </span>
          </motion.h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Acreditaciones que validan competencias, rigor metodológico y un compromiso permanente con la actualización profesional continua.
          </p>
        </div>

        {/* Rejilla de Certificados */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7 relative z-20"
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-7 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-subtle-card group relative overflow-hidden flex flex-col h-full">
                  
                  {/* Encabezado */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-deep/15 border border-emerald-light/30 flex-shrink-0 flex items-center justify-center text-emerald-light transition-transform duration-300 group-hover:scale-105">
                        <Award size={22} />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-titanium uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-emerald-400 font-medium">
                          <ShieldCheck size={13} />
                          <span>Certificación Verificada</span>
                        </div>
                      </div>
                    </div>

                    <span className="font-black text-2xl text-white/20 font-inter group-hover:text-emerald-light/60 transition-colors">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug mb-4 group-hover:text-emerald-light transition-colors">
                    {cert.title}
                  </h3>

                  {/* Etiquetas */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                    {cert.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.02] border border-white/[0.06] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Enlace */}
                  <div className="mt-auto pt-3 border-t border-white/[0.06]">
                    <a 
                      href={cert.link} 
                      className="w-full py-2.5 rounded-xl border border-white/10 hover:border-emerald-light/40 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Consultar Credencial</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
