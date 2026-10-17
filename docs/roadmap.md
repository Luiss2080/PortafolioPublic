# Roadmap — Adaptación del Portafolio a Luis Enrique Abri Fernández

> **Perfil destino**: Estudiante de Marketing, Publicidad y Comercio | Mentor en Mercados Financieros.
> **Spec activa**: [002-portafolio-marketing.md](specs/002-portafolio-marketing.md) · **Change OpenSpec**: `adapt-portafolio-marketing`
> **Regla de oro**: ninguna fase inicia sin que la anterior cumpla su Gate. Cada fase cierra con `npm run build` exitoso.

---

## 0. Resumen ejecutivo

| Punto | Decisión consensuada |
| :--- | :--- |
| Diseño | Base obsidiana premium + acentos **esmeralda** (marketing/crecimiento) y **dorado champán** (finanzas) |
| Datos | Bio entregada por el titular + datos sintetizados por el asistente, registrados en `docs/specs/datos-pendientes.md` |
| Alcance | In-place en este repositorio; el histórico git conserva el estado anterior |
| Herramientas | OpenSpec 1.14.2 (`/opsx-*`), MCP Context7, MCP Chrome DevTools, Playwright (global) |
| Skills nuevas | `marketing-brand-voice`, `financial-education-content` |

### Herramientas instaladas en la Fase 0

| Herramienta | Tipo | Uso |
| :--- | :--- | :--- |
| OpenSpec 1.14.2 | CLI + skills + comandos | SDD: proposal, specs, design, tasks, apply, archive |
| MCP `context7` | Remoto (opencode.jsonc) | Docs en vivo de React, Tailwind, Framer Motion, lucide-react |
| MCP `chrome-devtools` | Local (opencode.jsonc) | Contraste WCAG, consola, red y performance en vivo |
| MCP `playwright` | Global | QA visual, responsive y capturas por viewport |
| Skill `marketing-brand-voice` | `.opencode/skills/` | Tono, pilares y reglas de copy del titular |
| Skill `financial-education-content` | `.opencode/skills/` | Redacción segura de contenido financiero (compliance) |

---

## Fase 0 — Gobernanza, herramientas y planificación ✅

**Objetivo**: dejar el proyecto listo para desarrollar por fases con trazabilidad SDD.

- **Entregables**: `openspec/` inicializado; `opencode.jsonc` (MCP + skills); spec 002; este roadmap; esqueleto de `docs/specs/datos-pendientes.md`; Sprint 002 en `docs/specs/tasks.md`; change `adapt-portafolio-marketing` con proposal/specs/design/tasks; `AGENTS.md` actualizado.
- **Gate**: `openspec validate adapt-portafolio-marketing --strict` OK y `npm run build` OK.

---

## Fase 1 — Design System v2 (Esmeralda & Oro) ✅

**Objetivo**: sustituir la paleta zafiro/cobalto por la identidad esmeralda/dorada sobre obsidiana.

- **Archivos**: `tailwind.config.js`, `src/index.css`, `src/components/ParticlesBackground.jsx`.
- **Tareas OpenSpec**: 1.1 – 1.3.
- **Gate**:
  - `npm run build` sin errores ni clases huérfanas.
  - Cero ocurrencias de `sapphire-blue` / `cyan-glow` en `src/`.
  - Contraste WCAG AA verificado con Chrome DevTools en Hero, Servicios y Footer.

---

## Fase 2 — Identidad y datos del perfil (contenido integral) ✅

**Objetivo**: reemplazar el 100% de los datos del titular anterior por el perfil de Luis Enrique en los 10 componentes de contenido.

- **Archivos**: `Navbar`, `CommercialHero`, `TechCarousel`, `BusinessSolutions`, `CommercialProjects`, `ProfessionalSkills`, `ProfessionalTrajectory`, `Certificates`, `ExecutiveProfile`, `Footer` + actualización de `docs/specs/datos-pendientes.md`.
- **Tareas OpenSpec**: 2.1 – 2.11.
- **Gate**:
  - Cero referencias al titular anterior o a perfiles de software.
  - Las 6 áreas, 4 servicios, 4 casos, 4 competencias y la trayectoria reflejan el perfil de marketing/finanzas.
  - Aviso educativo presente en la tarjeta de mentoría.
  - Registro de datos sintetizados creado y completo.
  - Filtros y animaciones funcionando; responsive base sin overflow.

---

## Fase 3 — Asistente, contacto y SEO ✅

**Objetivo**: reprogramar el asistente conversacional, los CTAs y los metadatos para el nuevo perfil.

- **Archivos**: `FloatingWidgets.jsx`, `TypewriterText.jsx`, `Navbar.jsx`, `Footer.jsx`, `index.html`.
- **Tareas OpenSpec**: 3.1 – 3.4.
- **Gate**:
  - 5 conversaciones de prueba (servicios, precios, mentoría, finanzas, fuera de alcance) con respuestas correctas.
  - Respuestas financieras con framing educativo y sin promesas.
  - Enlaces de contacto sin errores 404 (pendientes registrados).
  - Metadatos SEO actualizados en build.

---

## Fase 4 — QA visual, accesibilidad y performance

**Objetivo**: certificar la calidad técnica y visual del resultado completo.

- **Herramientas**: Playwright (viewports 320/375/768/1024/1440/4K) + Chrome DevTools MCP.
- **Tareas OpenSpec**: 4.1 – 4.3.
- **Gate**:
  - Cero overflow horizontal en todos los viewports.
  - Auditoría de accesibilidad sin incidencias críticas.
  - Consola sin errores; build de producción íntegro.

---

## Fase 5 — Validación SDD y cierre

**Objetivo**: demostrar que el código dice la verdad y archivar el change.

- **Archivos**: `docs/specs/validation.md`, `docs/specs/tasks.md`, registro de datos pendientes.
- **Tareas OpenSpec**: 5.1 – 5.3.
- **Gate**:
  - Cada RF/RNF de la spec 002 verificado con evidencia.
  - Titular valida o aprueba el registro de datos sintetizados (gate de publicación).
  - `openspec archive adapt-portafolio-marketing` ejecutado y specs vivas actualizadas.
  - `npm run build` final OK + commit de cierre.

---

## Matriz de trazabilidad

| Fase | Requisitos spec 002 | Estado |
| :--- | :--- | :--- |
| F0 | Gobernanza (RNF-4) | ✅ Completada |
| F1 | RNF-1, RNF-2, RNF-3 | ✅ Completada |
| F2 | RF-2 … RF-9, RNF-4 | ✅ Completada |
| F3 | RF-1, RF-10, RF-11, RNF-5 | ✅ Completada |
| F4 | RNF-2, RNF-3 | pendiente |
| F5 | Criterios de finalización | pendiente |

## Riesgos principales

| Riesgo | Mitigación |
| :--- | :--- |
| Publicar datos sintetizados sin validar | Registro `datos-pendientes.md` + gate F5 (no deploy sin validación) |
| Residuos de la paleta antigua | Auditoría de tokens en F1 + build limpio |
| Tono indebido en contenido de inversión | Skill `financial-education-content` + revisión contra escenarios |
| Regresión visual por reescritura masiva | Capturas Playwright por fase |

## Cómo retomar el trabajo (fase a fase)

```bash
npm run dev                                              # desarrollo local
openspec status --change adapt-portafolio-marketing      # progreso del change
/opsx-apply                                              # ejecutar la siguiente fase (o pedir "aplica la Fase 1")
openspec validate adapt-portafolio-marketing --strict    # verificar artefactos
openspec archive adapt-portafolio-marketing              # al cerrar la F5
```
