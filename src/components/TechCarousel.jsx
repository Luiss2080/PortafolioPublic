import React from 'react';
import { 
  Megaphone,
  Clapperboard,
  ScanSearch,
  Users,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const strategicAreas = [
  { 
    name: 'Comunicación y Difusión', 
    desc: 'Mensajes que conectan', 
    Icon: Megaphone,
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.45)'
  },
  { 
    name: 'Contenido para Redes', 
    desc: 'Imagen y video con intención', 
    Icon: Clapperboard,
    color: '#D4AF37',
    glow: 'rgba(212, 175, 55, 0.45)'
  },
  { 
    name: 'Análisis FODA & PESTEL', 
    desc: 'Diagnóstico con visión', 
    Icon: ScanSearch,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.45)'
  },
  { 
    name: 'Segmentación de Público', 
    desc: 'Audiencia precisa', 
    Icon: Users,
    color: '#E7C873',
    glow: 'rgba(231, 200, 115, 0.45)'
  },
  { 
    name: 'Soluciones para Emprendedores', 
    desc: 'Respuestas a medida', 
    Icon: Lightbulb,
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.45)'
  },
  { 
    name: 'Mercados Financieros', 
    desc: 'Mentoría paso a paso', 
    Icon: TrendingUp,
    color: '#D4AF37',
    glow: 'rgba(212, 175, 55, 0.45)'
  },
];

const TechCarousel = () => {
  return (
    <section id="enfoques" className="w-full bg-transparent border-y border-white/[0.06] py-7 overflow-hidden relative flex items-center z-20 backdrop-blur-sm">
      
      {/* Luz ambiental sutil y etérea */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/[0.03] via-transparent to-emerald-deep/[0.03] pointer-events-none z-0"></div>
      
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
