# SDD Spec: Transformación a Portafolio Estándar y Adaptable

## 1. Contexto y Visión de Negocio
- **Objetivo**: Transformar el portafolio técnico actual (enfocado exclusivamente en desarrollo de software, código y tecnología dura) en un **portafolio estándar, adaptable, empresarial y elegante**.
- **Audiencia Objetivo**: Clientes corporativos, empresas de consultoría, reclutadores ejecutivos, instituciones y clientes generales de cualquier rubro (no restringido a tecnología).
- **Esencia Visual**: Minimalismo de alto nivel, refinamiento corporativo, contrastes sobrios y sofisticados (grafito profundo/obsidiana con toques de platino, titanio y acentos sutiles de oro blanco o zafiro pulido), manteniendo fluidez interactiva y micro-animaciones premium con Framer Motion.

---

## 2. Requerimientos Funcionales (RF)

- **RF-01: Redefinición del Hero y Propuesta de Valor**
  - Eliminar etiquetas puramente técnicas ("Desarrollador de Software", badges de frameworks).
  - Adoptar una propuesta de valor ejecutiva: Consultor, Estratega Digital, Creador de Soluciones y Líder de Proyectos con visión integral.
  - Call To Actions (CTAs) orientados a negocio: "Explorar Trayectoria", "Servicios & Soluciones", "Contactar".

- **RF-02: Conversión del Carrusel Tecnológico a Carrusel de Competencias / Enfoques Estratégicos**
  - Reemplazar la galería estricta de iconos de frameworks/lenguajes (Node, Mongo, Docker) por un carrusel dinámico de **Áreas de Enfoque Estratégico y Capacidades Clave**: Gestión Estratégica, Consultoría Digital, Innovación Tecnológica, Optimización de Procesos, Soluciones a Medida, Liderazgo y Ejecución.

- **RF-03: Reestructuración de Proyectos a Casos de Éxito Multidisciplinarios**
  - En lugar de filtrar por Frontend/Backend/Web3/SaaS técnico con badges de Git y ramas, presentar **Casos de Éxito & Soluciones de Impacto**.
  - Categorías ejecutivas: *Estrategia & Consultoría*, *Transformación Digital*, *Optimización de Negocios*, *Plataformas Integradas*, *Soluciones de Alto Impacto*.
  - Enfoque de cada ficha: Desafío de negocio, Solución implementada, Resultados/Métricas clave y Enlace/Demostración.

- **RF-04: Adaptación de Habilidades a Competencias Profesionales**
  - Agrupar en:
    1. *Liderazgo & Gestión*: Dirección de proyectos, planeación estratégica, toma de decisiones.
    2. *Capacidad Analítica & Resolución*: Pensamiento crítico, diagnóstico de necesidades, optimización de flujos.
    3. *Habilidades Digitales & Ejecución*: Implementación de herramientas modernas, metodologías ágiles, control de calidad.
    4. *Comunicación & Relaciones*: Negociación efectiva, trabajo colaborativo, atención y consultoría de clientes.

- **RF-05: Rediseño de Servicios hacia Soluciones Empresariales**
  - Servicios con orientación ejecutiva:
    1. *Consultoría y Asesoramiento Integral*: Diagnóstico de necesidades y hoja de ruta estratégica.
    2. *Dirección y Gestión de Proyectos*: Metodologías estructuradas para cumplimiento en tiempo y calidad.
    3. *Desarrollo de Soluciones Integradas*: Creación de herramientas personalizadas para potenciar marcas y negocios.
    4. *Optimización y Eficiencia de Procesos*: Análisis y mejora continua para maximizar productividad.

- **RF-06: Perfil Personal y Experiencia Profesional Adaptable**
  - Línea de tiempo equilibrada: Hitos de liderazgo, trayectoria profesional, formación universitaria y proyectos de impacto.
  - Sección Sobre Mí: Sustituir la consola interactiva de código por un resumen ejecutivo elegante con presentación de visión profesional, valores, pilares de trabajo y logros clave.

- **RF-07: Asistente Interactivo Adaptable (Chatbot Flotante)**
  - Ajustar el asistente IA (`FloatingWidgets.jsx`) para responder desde una perspectiva corporativa y ejecutiva integral, informando sobre servicios, experiencia, proyectos y formas de contacto sin sesgo técnico cerrado.

---

## 3. Requerimientos No Funcionales (RNF)

- **RNF-01: Estética Minimalista y Empresarial**
  - Paleta sobria: Fondo oscuro elegante (`#0B0F17` / `#0E131F`), tonos carbón, superficies de cristal sutil (*matte glass* con borde micro-luminoso), acentos en azul ejecutivo (`#2563EB` / `#38BDF8`) o dorado suave (`#D4AF37` / `#E5C07B`) en lugar de colores cyberpunk saturados.
  - Tipografía refinada: Inter, Syne / Plus Jakarta Sans con pesos balanceados.
- **RNF-02: Rendimiento y Fluidez**
  - Mantener 60 FPS en animaciones y transiciones de Framer Motion.
  - Totalmente responsivo en móviles, tablets y monitores ultrawide.
- **RNF-03: SEO y Accesibilidad**
  - Contraste WCAG AA en todas las combinaciones de texto y fondos.
  - Metadatos y etiquetas semánticas claras para presentación pública y corporativa.

---

## 4. Plan de Implementación SDD en Fases

1. **Fase 1: Configuración de Sistema de Diseño y Tokens (`tailwind.config.js`, `index.css`)**
   - Actualizar colores, gradientes, efectos de brillo y sombras hacia una paleta corporativa y refinada.
2. **Fase 2: Rediseño de Navbar y Hero**
   - Nuevo copy corporativo, selector de secciones ajustado, eliminación de referencias técnicas cerradas.
3. **Fase 3: Carrusel Estratégico y Servicios Empresariales**
   - Adaptación de `TechCarousel.jsx` a carrusel de competencias/enfoques clave y refactorización de `Services.jsx`.
4. **Fase 4: Transformación de Proyectos y Sección de Habilidades/Competencias**
   - Redefinición de `Projects.jsx` hacia casos de impacto y de `Skills.jsx` hacia habilidades ejecutivas/profesionales.
5. **Fase 5: Experiencia, Sobre Mí, FloatingWidgets y Footer**
   - Adaptación de la trayectoria en `Experience.jsx`, renovación de `About.jsx` (formato corporativo) y calibración de respuestas de `FloatingWidgets.jsx`.
6. **Fase 6: Validación SDD & Testing Visual**
   - Auditoría visual, pruebas de responsive, consistencia tipográfica y verificación de accesibilidad.
