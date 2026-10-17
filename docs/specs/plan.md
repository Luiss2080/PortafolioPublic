# Plan de Implementación SDD — Portafolio Estándar

Basado en: [Constitución](file:///c:/laragon/www/PortafolioEstandar/docs/constitution.md) y [Spec 001](file:///c:/laragon/www/PortafolioEstandar/docs/specs/001-portafolio-estandar.md).
Principio rector: *"El código dice la verdad y la especificación también"*.

---

## 1. Módulos del Sistema y Correspondencia RF

| Módulo / Archivo | Responsabilidad | Requisitos Funcionales Cubiertos |
| :--- | :--- | :--- |
| `tailwind.config.js` e `index.css` | Sistema de tokens, paleta corporativa minimalista (obsidiana, cristal, zafiro/cobalto), utilidades. | RNF-1, RNF-2 |
| `src/components/Navbar.jsx` | Barra de navegación corporativa, enlaces fluidos y botón de contacto. | RF-1 |
| `src/components/Hero.jsx` | Encabezado principal, propuesta de valor ejecutiva, métricas de impacto y CTAs de negocio. | RF-2 |
| `src/components/TechCarousel.jsx` | Carrusel continuo de capacidades estratégicas, consultoría y metodologías de valor. | RF-3 |
| `src/components/Projects.jsx` | Fichas de casos de éxito y soluciones de impacto categorizadas con filtrado fluido. | RF-4, RF-5 |
| `src/components/Skills.jsx` | Matriz de competencias profesionales (Liderazgo, Analítica, Digital, Comunicación). | RF-6 |
| `src/components/Services.jsx` | Catálogo de soluciones empresariales con efecto Tilt y descripción de beneficios. | RF-7 |
| `src/components/Experience.jsx` | Línea de tiempo de trayectoria y liderazgo profesional e hitos académicos. | RF-8 |
| `src/components/About.jsx` | Presentación ejecutiva, pilares de valor, visión profesional y estadísticas. | RF-9 |
| `src/components/Certificates.jsx` | Credenciales, certificaciones y validaciones profesionales. | H3, RF-1 |
| `src/components/FloatingWidgets.jsx`| Chatbot interactivo corporativo con árbol de respuestas versátil y botón de WhatsApp. | RF-10, RF-11 |
| `src/components/Footer.jsx` | Cierre institucional, enlaces de navegación, redes profesionales y contacto directo. | RF-1 |

---

## 2. Decisiones Técnicas y de Diseño Justificadas

### Decisión 1: Paleta de Colores Corporativa
- **Decisión**: Reemplazar los colores neón cian (`#00F2FE`) y verde terminal por una paleta de **Obsidiana Profundo (`#0A0D14` / `#0E131F`)**, superficies de **Cristal Esmerilado (Glassmorphism sobrio)** y acentos en **Azul Zafiro / Cobalto Ejecutivo (`#2563EB` / `#38BDF8`)** complementados con platino y titanio.
- **Alternativa Descartada**: Fondo claro tradicional. Se descartó porque perdería el dinamismo visual, profundidad y elegancia premium que el usuario solicitó conservar del portafolio original.

### Decisión 2: Reemplazo del Bloque de Código en "Sobre Mí"
- **Decisión**: Sustituir el mockup de código (`import Developer from 'luis-core'`) por un panel editorial ejecutivo que presenta los 4 pilares de trabajo (Visión Estratégica, Excelencia Operativa, Innovación Continua y Compromiso con el Cliente), junto a métricas y síntesis personal.
- **Alternativa Descartada**: Mantener el código con texto más general. Se descartó porque contradice el objetivo de desvincular el portafolio del sesgo exclusivo de programación.

### Decisión 3: Estructura de Casos de Éxito en Proyectos
- **Decisión**: Reemplazar etiquetas de repositorios Git (branches, commits, stars de GitHub) por métricas de valor (Impacto, Escalabilidad, Optimización de Tiempo/Costos) y categorías de negocio (*Consultoría*, *Transformación Digital*, *Plataformas Integradas*, *Soluciones Operativas*).
- **Alternativa Descartada**: Borrar proyectos y poner textos genéricos. Se descartó para mantener la robustez, completitud y dinamismo interactivo del portafolio.

---

## 3. Estrategia de Verificación y Testing
- **Verificación Estática**: Validación de tipos en build con `npm run build`.
- **Verificación Dinámica**: Validación en navegador de navegación fluida, filtros de proyectos, interacción del chatbot y adaptabilidad en responsive.
- **Auditoría de Contrato**: Revisión punto a punto de cada RF de la especificación frente a las interfaces generadas.
