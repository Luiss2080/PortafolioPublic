import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Users
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const businessPillars = [
  {
    icon: <Target size={22} />,
    title: 'Orientación a Resultados',
    desc: 'Compromiso con problemas reales del negocio y soluciones que producen resultados visibles.',
    accent: '#34D399'
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Claridad ante Todo',
    desc: 'Explico cada concepto y cada decisión de forma simple, sin tecnicismos innecesarios.',
    accent: '#D4AF37'
  },
  {
    icon: <Users size={22} />,
    title: 'Cercanía y Trato Directo',
    desc: 'Comunicación fluida y humana: entiendo tu contexto antes de proponer.',
    accent: '#10B981'
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Aprendizaje Continuo',
    desc: 'Formación constante en marketing, contenido y mercados financieros para darte lo mejor.',
    accent: '#E7C873'
  }
];

const ExecutiveProfile = () => {
  return (
    <section id="about" className="py-24 bg-obsidian-black relative overflow-hidden section-sep corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <span aria-hidden="true" className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 -z-10 text-[110px] sm:text-[170px] font-black font-inter leading-none text-white/[0.03]">06</span>
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              06 · Sobre mí
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Dos mundos que trabajan juntos:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-gold-light">
              marketing y finanzas
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Quién soy, cómo trabajo y por qué combino la creatividad del marketing con la disciplina de los mercados.
          </p>
        </div>

        {/* Contenido en 2 Bloques Editoriales */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bloque Izquierdo: Manifiesto (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="glass-card p-6 sm:p-8 md:p-9 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] shadow-subtle-card flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-emerald-light uppercase tracking-wider block mb-2">
                  Mi enfoque
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  Escucho primero, propongo después: nada de recetas genéricas.
                </h3>
                
                <div className="space-y-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>
                    Mi nombre es <strong className="text-white font-semibold">Luis Enrique Albis Fernández</strong>. Estudio Marketing, Publicidad y Comercio y soy mentor en mercados financieros. Conecto necesidades reales de emprendedores con soluciones prácticas y medibles.
                  </p>
                  <p>
                    Trabajo con diagnóstico antes que con opiniones: cada propuesta se apoya en el contexto del negocio y se cuenta en palabras simples. La marca y las decisiones financieras son dos caras del mismo proyecto.
                  </p>
                </div>
              </div>

              {/* Cita Editorial */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                <div className="w-1.5 h-10 bg-gradient-to-b from-emerald-deep to-gold-champagne rounded-full"></div>
                <p className="text-slate-200 text-xs sm:text-sm italic font-medium">
                  "Entender el problema exacto y entregar una solución clara: esa es la base de un trabajo bien hecho."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bloque Derecho: 4 Pilares (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-1 gap-3.5"
          >
            {businessPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-4 sm:p-5 rounded-2xl bg-obsidian-card/85 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-center gap-4 shadow-subtle-card group"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
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
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5 leading-snug group-hover:text-emerald-light transition-colors">
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

export default ExecutiveProfile;
