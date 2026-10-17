import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  Briefcase, 
  Zap, 
  CheckCircle2,
  Award
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const businessPillars = [
  {
    icon: <Target size={22} />,
    title: 'Orientación a Resultados',
    desc: 'Compromiso directo con la rentabilidad, ahorro de costos y cumplimiento de metas del cliente.',
    accent: '#34D399'
  },
  {
    icon: <Zap size={22} />,
    title: 'Versatilidad Total',
    desc: 'Facilidad comprobada para resolver desafíos en cualquier industria, rubro o escala de negocio.',
    accent: '#60A5FA'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Rigor y Seriedad',
    desc: 'Puntualidad en los compromisos, transparencia en las entregas y altos estándares de calidad.',
    accent: '#818CF8'
  },
  {
    icon: <Users size={22} />,
    title: 'Cercanía y Trato Directo',
    desc: 'Comunicación fluida y humana para transformar requerimientos en soluciones tangibles.',
    accent: '#34D399'
  }
];

const ExecutiveProfile = () => {
  return (
    <section id="about" className="py-24 bg-obsidian-black relative overflow-hidden border-t border-white/[0.08] corporate-grid">
      
      {/* Luz Ambiental Suave */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-deep/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-light/[0.05] rounded-full blur-[140px] -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 xl:px-12 max-w-7xl relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
          >
            <Sparkles size={14} className="text-emerald-light" />
            <span className="text-titanium text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Perfil & Filosofía
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-inter mb-3 leading-tight tracking-tight"
          >
            Capacidad para Resolver{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-gold-light">
              Cualquier Iniciativa
            </span>
          </motion.h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed">
            Una propuesta de valor fundamentada en versatilidad, orden y certidumbre para quienes confían en mi trabajo.
          </p>
        </div>

        {/* Contenido en 2 Bloques Editoriales */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bloque Izquierdo: Manifiesto Ejecutivo Conciso (7 cols) */}
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
                  Visión Profesional
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  Gestión integral, mentalidad práctica y adaptabilidad a cualquier rubro o tamaño de empresa.
                </h3>
                
                <div className="space-y-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>
                    Mi nombre es <strong className="text-white font-semibold">Luis Mario Rocha Vela</strong>. Cuento con una formación y experiencia transversales que me permiten desempeñarme con soltura en estrategia comercial, dirección de proyectos, optimización operativa y despliegue de herramientas de vanguardia.
                  </p>
                  <p>
                    No me limito a un único sector: trabajo con empresas comerciales, industrias, firmas de servicios o clientes independientes. Mi prioridad es comprender el negocio, resolver cuellos de botella con rapidez y asegurar que cada entregable produzca valor tangible.
                  </p>
                </div>
              </div>

              {/* Insignias de Valores con Iconos */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02]">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Resolutivo & Proactivo</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02]">
                  <Award size={16} className="text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Alto Estándar de Entrega</span>
                </div>
              </div>

              {/* Cita Editorial */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                <div className="w-1.5 h-10 bg-emerald-deep rounded-full"></div>
                <p className="text-slate-200 text-xs sm:text-sm italic font-medium">
                  "El valor de un buen profesional radica en dar tranquilidad, orden y resultados a quien confía en su capacidad."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bloque Derecho: 4 Pilares Comerciales con Iconos (5 cols) */}
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
