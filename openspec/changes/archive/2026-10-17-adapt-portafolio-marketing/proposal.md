# Proposal

## Why
El portafolio actual está personalizado con una identidad corporativa genérica y datos de otro titular. Debe reutilizarse para **Luis Enrique Abri Fernández** — estudiante de Marketing, Publicidad y Comercio y mentor en Mercados Financieros — de modo que la identidad, los mensajes y todos los datos reflejen su perfil real (principio SDD: *"el código dice la verdad y la especificación también"*).

## What Changes
- **Identidad visual v2**: se mantiene la base obsidiana premium; los acentos pasan de azul zafiro a **verde esmeralda** (crecimiento/marketing) y **dorado champán** (finanzas).
- **Adaptación integral de datos**: Navbar, Hero, carrusel de conocimiento, servicios, casos, competencias, trayectoria, credenciales, perfil editorial y footer se reescriben para el perfil de Luis Enrique.
- **Contenido nuevo**: mentoría en mercados financieros y comunidad de aprendizaje, con aviso educativo (sin promesas de rendimiento).
- **Asistente conversacional** reprogramado para responder sobre marketing, finanzas, trayectoria y contacto; CTAs hacia WhatsApp y correo.
- **Gobernanza de datos**: todo dato sintetizado (completado por el asistente a partir de la base entregada) queda registrado en `docs/specs/datos-pendientes.md` para validación del titular antes de publicar.
- **BREAKING**: los tokens de acento (`sapphire-blue`, `cyan-glow`, etc.) se sustituyen por la nueva paleta; los textos de la versión anterior dejan de existir.

## Capabilities

### New Capabilities
- `portfolio-identity`: identidad visual y de marca del sitio (paleta esmeralda/dorada sobre obsidiana, tipografía, fondos animados, superficies).
- `portfolio-content`: contenido y estructura de las secciones que presentan el perfil profesional (hero, áreas de conocimiento, servicios, casos, competencias, trayectoria, credenciales, perfil editorial).
- `portfolio-assistant`: asistente conversacional y canales de contacto directo (WhatsApp/correo) alineados al perfil de marketing y finanzas.

### Modified Capabilities
Ninguna: `openspec/specs/` aún no contiene capacidades archivadas (la spec 001 vive en `docs/specs/` como documentación histórica del portafolio estándar).

## Impact
- **Código**: `tailwind.config.js`, `src/index.css`, `src/components/*` (Hero, TechCarousel, BusinessSolutions, CommercialProjects, ProfessionalSkills, ProfessionalTrajectory, Certificates, ExecutiveProfile, FloatingWidgets, Navbar, Footer, ParticlesBackground, TypewriterText), `index.html` (SEO).
- **Docs**: `docs/specs/002-portafolio-marketing.md`, `docs/specs/datos-pendientes.md`, `docs/specs/tasks.md`, `docs/validation.md`, `docs/roadmap.md`, `AGENTS.md`, `docs/constitution.md` (aclaración de variante cromática).
- **Dependencias**: sin nuevas dependencias de runtime; se conservan React 18, Vite 5, Tailwind 3.4, Framer Motion, lucide-react.
- **Operación**: cambios in-place en este repositorio; el histórico git conserva el estado anterior y sirve de rollback.
