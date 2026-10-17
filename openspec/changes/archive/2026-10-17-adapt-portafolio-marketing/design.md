# Design

## Context

Ver `proposal.md` — Why. Estado actual: portafolio corporativo del titular anterior (spec 001 completada), React 18 + Vite 5 + Tailwind 3.4 + Framer Motion; los contenidos viven como constantes embebidas dentro de cada componente de `src/components/`. OpenSpec 1.14.2 inicializado (schema spec-driven, idioma es); MCP `context7` y `chrome-devtools` configurados a nivel proyecto en `opencode.jsonc`; Playwright disponible desde la configuración global de opencode.

## Goals / Non-Goals

**Goals:**
- Tokens v2: obsidiana + esmeralda + dorado, con reemplazo total de las clases de la paleta anterior.
- Adaptación de datos de los 12 componentes visibles y SEO básico del `index.html`.
- Asistente alineado al perfil con cumplimiento financiero (sin promesas ni asesoría).
- Trazabilidad de datos sintetizados mediante registro + gate de validación.

**Non-Goals:**
- CMS, backend, blog, multi-idioma, analytics o pasarelas de pago.
- Refactor estructural de la arquitectura de componentes (se mantiene el patrón de datos embebidos).
- Nuevas dependencias de runtime o librerías de UI.

## Decisions

### Decisión 1: Variante cromática aprobada por el titular
La base obsidiana se conserva; los acentos pasan a `emerald` (superficies sólidas `#047857` con hover `#057A58` para cumplir AA; acentos luminosos `#10B981`/`#34D399`) y `gold` (`#D4AF37`/`#E7C873`). Alternativas descartadas: coral/ámbar (más rupturista y menos ligada a finanzas) y tema claro editorial (pierde profundidad premium). Se documenta como variante permitida por el principio de adaptabilidad de la constitución.

### Decisión 2: Reemplazo directo de tokens, sin capa de compatibilidad
Se renombran los colores en `tailwind.config.js` y se actualizan todas las clases en la misma fase. Se descarta mantener alias de la paleta anterior: la spec exige cero residuos (`sapphire-blue`, `cyan-glow`) y los alias serían deuda técnica permanente.

### Decisión 3: Datos embebidos + registro de sintetizados
Los textos se reescriben in-place en cada componente respetando el patrón actual. Todo dato inventado a partir de la base entregada se registra en `docs/specs/datos-pendientes.md` (dato, ubicación, estado). Alternativa descartada: capa centralizada `src/data/*` — refactor mayor sin beneficio inmediato; queda como mejora futura.

### Decisión 4: Cumplimiento financiero embebido en contenido y chatbot
Aviso "Contenido educativo; no constituye recomendación de inversión" en la tarjeta de mentoría y en las respuestas financieras del asistente. Las reglas de redacción operan mediante la skill `financial-education-content`.

### Decisión 5: Verificación por fase con tooling instalado
Cada fase cierra con `npm run build` exitoso. QA visual y responsive con Playwright (heredado global); contraste, consola, red y performance con Chrome DevTools MCP; APIs de React/Tailwind/Framer verificadas contra Context7 cuando exista duda de versión.

## Risks / Trade-offs

- [Datos sintetizados publicados sin validar] → Registro `docs/specs/datos-pendientes.md` + gate de la Fase 5: sin validación del titular no se despliega.
- [Residuos de la paleta antigua] → Tarea de auditoría por búsqueda de tokens antiguos en Fase 1, verificada con build limpio.
- [Rendimiento del fondo de partículas con la nueva paleta] → Se conserva la configuración de partículas; auditoría de performance en Fase 4.
- [Tono indebido en contenido de inversión] → Skill de compliance + revisión contra los escenarios de la spec en la validación SDD.
- [Regresión visual por reescritura masiva de textos] → Capturas Playwright por viewport al cierre de cada fase.

## Migration Plan

1. Fases F1–F5 in-place; cada fase cierra con `npm run build` y verificación visual.
2. Rollback: `git revert` del commit de la fase o checkout del commit anterior (el histórico conserva el estado corporativo previo).
3. Cierre: archivar el change con `openspec archive`, sincronizar `docs/specs/tasks.md` y `docs/specs/validation.md`, y commit final.

## Open Questions

- Ninguna que afecte el diseño o las tareas. Los datos concretos del titular (enlaces de contacto, certificaciones, métricas) se resuelven vía `docs/specs/datos-pendientes.md` sin cambiar el enfoque.
