import React from 'react';
import { 
  Compass, 
  Target, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Award, 
  BarChart3, 
  Workflow, 
  Sparkles,
  Zap
} from 'lucide-react';

const strategicAreas = [
  { 
    name: 'Dirección Estratégica', 
    desc: 'Planificación & Visión Integral', 
    Icon: Compass,
    color: '#38BDF8', // Cyan Sapphire
    glow: 'rgba(56, 189, 248, 0.45)'
  },
  { 
    name: 'Consultoría Multidisciplinar', 
    desc: 'Diagnóstico & Crecimiento', 
    Icon: Target,
    color: '#818CF8', // Indigo
    glow: 'rgba(129, 140, 248, 0.45)'
  },
  { 
    name: 'Transformación Digital', 
    desc: 'Modernización de Procesos', 
    Icon: TrendingUp,
    color: '#34D399', // Emerald
    glow: 'rgba(52, 211, 153, 0.45)'
  },
  { 
    name: 'Gestión Integral de Proyectos', 
    desc: 'Metodologías & Entrega a Tiempo', 
    Icon: Layers,
    color: '#60A5FA', // Sky Blue
    glow: 'rgba(96, 165, 250, 0.45)'
  },
  { 
    name: 'Optimización Operativa', 
    desc: 'Eficiencia & Escalabilidad', 
    Icon: Workflow,
    color: '#F472B6', // Rose
    glow: 'rgba(244, 114, 182, 0.45)'
  },
  { 
    name: 'Innovación & Adaptabilidad', 
    desc: 'Soluciones Rápidas a Medida', 
    Icon: Lightbulb,
    color: '#FBBF24', // Amber Gold
    glow: 'rgba(251, 191, 36, 0.45)'
  },
  { 
    name: 'Liderazgo & Coordinación', 
    desc: 'Articulación de Equipos y Metas', 
    Icon: Users,
    color: '#A78BFA', // Violet
    glow: 'rgba(167, 139, 250, 0.45)'
  },
  { 
    name: 'Calidad & Rigor Profesional', 
    desc: 'Excelencia y Altos Estándares', 
    Icon: ShieldCheck,
    color: '#2DD4BF', // Teal
    glow: 'rgba(45, 212, 191, 0.45)'
  },
  { 
    name: 'Análisis de Rendimiento', 
    desc: 'Métricas Reales de Impacto', 
    Icon: BarChart3,
    color: '#FB923C', // Orange
    glow: 'rgba(251, 146, 60, 0.45)'
  },
];

const TechCarousel = () => {
  return (
    <section id="enfoques" className="w-full bg-transparent border-y border-white/[0.06] py-7 overflow-hidden relative flex items-center z-20 backdrop-blur-sm">
      
      {/* Luz ambiental sutil y etérea */}
      <div className="absolute inset-0 bg-gradient-to-r from-sapphire-blue/[0.03] via-transparent to-sapphire-blue/[0.03] pointer-events-none z-0"></div>
      
      {/* Difuminados de bordes para transición suave */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-obsidian-black via-obsidian-black/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-obsidian-black via-obsidian-black/90 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex items-center whitespace-nowrap animate-marquee relative z-10">
        {[...strategicAreas, ...strategicAreas].map((area, index) => {
          const AreaIcon = area.Icon;
          return (
            <div key={index} className="flex items-center group cursor-default">
              
              {/* Elemento de Enfoque Flotante (Sin contenedor/caja rígida) */}
              <div className="flex items-center gap-3.5 px-6 sm:px-8 py-2 transition-transform duration-300 group-hover:scale-105">
                
                {/* Icono con brillo vibrante y micro-animación */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
                  style={{
                    filter: `drop-shadow(0 0 10px ${area.glow})`
                  }}
                >
                  <AreaIcon size={24} style={{ color: area.color }} className="transition-transform duration-300" />
                </div>
                
                {/* Textos del Área */}
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-colors duration-300">
                    {area.name}
                  </span>
                  <span 
                    className="font-inter text-xs font-medium tracking-normal mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{ color: area.color }}
                  >
                    {area.desc}
                  </span>
                </div>
              </div>
              
              {/* Línea suave y elegante de separación vertical */}
              <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent mx-2 select-none"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechCarousel;
