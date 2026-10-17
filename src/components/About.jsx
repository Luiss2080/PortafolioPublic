import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Lightbulb,
  Award,
  Users
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const pillars = [
  {
    icon: <Target size={20} />,
    title: 'Visión Estratégica',
    desc: 'Comprender el negocio antes de actuar para asegurar que cada acción responda a un objetivo claro.',
    accent: '#34D399'
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Rigor & Excelencia',
    desc: 'Compromiso inquebrantable con la calidad, la puntualidad en los compromisos y la atención al detalle.',
    accent: '#60A5FA'
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Innovación Continua',
    desc: 'Adopción de tendencias, metodologías modernas y herramientas para mantener ventaja competitiva.',
    accent: '#818CF8'
  },
  {
    icon: <Users size={20} />,
    title: 'Cercanía con el Cliente',
    desc: 'Comunicación fluida, transparente y empática para convertir expectativas en realidades tangibles.',
    accent: '#34D399'
  }
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
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
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs md:text-sm font-semibold tracking-wider uppercase">
              Identidad & Valores
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-4 leading-tight tracking-tight"
          >
            Filosofía de Trabajo &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-gold-light">
              Compromiso
            </span>
          </motion.h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Una perspectiva profesional sustentada en principios firmes para agregar valor real y duradero en cada proyecto u organización.
          </p>
        </div>

        {/* Contenido en 2 Bloques Editoriales */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bloque Izquierdo: Manifiesto Ejecutivo (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="glass-card p-8 md:p-10 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] shadow-subtle-card flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-emerald-light uppercase tracking-wider block mb-2">
                  Presentación Personal
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                  Especialista en estructurar iniciativas, coordinar voluntades y entregar soluciones completas.
                </h3>
                
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Mi nombre es <strong className="text-white font-semibold">Luis Enrique Albis Fernández</strong>. A lo largo de mi trayectoria y formación profesional, he desarrollado una visión integral que se adapta con facilidad a las exigencias de emprendimientos y proyectos de marketing, comunicación y educación financiera.
                  </p>
                  <p>
                    Parto de un principio fundamental: el éxito de cualquier iniciativa no depende de tecnicismos complejos ni de fórmulas rígidas, sino de comprender a fondo el modelo de valor del cliente, diagnosticar cuellos de botella con precisión y ejecutar soluciones prácticas que eleven la rentabilidad y la eficiencia.
                  </p>
                  <p className="text-slate-400">
                    Aplico marcos de trabajo ordenados que garantizan certidumbre en los entregables, transparencia en la comunicación y un estándar de calidad riguroso en cada etapa del proyecto.
                  </p>
                </div>
              </div>

              {/* Cita Editorial */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-4">
                <div className="w-1.5 h-12 bg-emerald-deep rounded-full"></div>
                <p className="text-slate-200 text-sm italic font-medium">
                  "El profesionalismo no es solo un estándar técnico, es la promesa cumplida de generar tranquilidad y resultados a quienes confían en tu trabajo."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bloque Derecho: 4 Pilares de Excelencia (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-center gap-4 shadow-subtle-card group"
              >
                <div 
                  className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ 
                    backgroundColor: `${pillar.accent}15`,
                    borderColor: `${pillar.accent}40`,
                    borderWidth: '1px',
                    color: pillar.accent,
                    boxShadow: `0 0 15px ${pillar.accent}20`
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-emerald-light transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
