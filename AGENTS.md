# AGENTS.md — Portafolio Luis Enrique Abri Fernández (Marketing & Mercados Financieros)

## Proyecto
Portafolio personal de **Luis Enrique Abri Fernández** — Estudiante de Marketing, Publicidad y Comercio | Mentor en Mercados Financieros.
Adaptado in-place desde el portafolio estándar corporativo (Spec 001) mediante la [Spec 002](docs/specs/002-portafolio-marketing.md) y el change OpenSpec `adapt-portafolio-marketing`.
Desarrollado en React 18, Vite 5, Tailwind CSS y Framer Motion con arquitectura modular de componentes.

## Comandos
- Iniciar desarrollo: `npm run dev`
- Compilar producción: `npm run build`
- Previsualizar build: `npm run preview`
- Estado del change SDD: `openspec status --change adapt-portafolio-marketing`
- Validar artefactos SDD: `openspec validate adapt-portafolio-marketing --strict`
- Ejecutar siguiente fase: `/opsx-apply` · Proponer cambios nuevos: `/opsx-propose "idea"`

## Flujo de trabajo por fases (SDD)
1. El plan vive en [docs/roadmap.md](docs/roadmap.md); la spec activa en [docs/specs/002-portafolio-marketing.md](docs/specs/002-portafolio-marketing.md); el change en `openspec/changes/adapt-portafolio-marketing/`.
2. Ninguna fase inicia sin que la anterior cumpla su Gate; cada fase cierra con `npm run build` exitoso.
3. Los datos sintetizados se registran en [docs/specs/datos-pendientes.md](docs/specs/datos-pendientes.md); nada se despliega sin validación del titular.
4. Mantener sincronizados: Spec 002 ↔ `openspec/changes/adapt-portafolio-marketing/tasks.md` ↔ [docs/specs/tasks.md](docs/specs/tasks.md).

## Estilo y convenciones
- React funcional con hooks y componentes desacoplados en `src/components/`.
- Tailwind con tokens estandarizados. Identidad v2: base obsidiana profunda + acentos esmeralda (marketing/crecimiento) y dorado champán (finanzas).
- Idioma del contenido: Español cercano-profesional, claro y orientado a resultados para emprendedores (skill `marketing-brand-voice`).
- Contenido financiero: educativo, en paso a paso, sin promesas de rendimiento ni recomendaciones (skill `financial-education-content`).
- Animaciones fluidas con Framer Motion y `react-parallax-tilt`.

## Skills y MCP disponibles
- Skills del proyecto: `.opencode/skills/` (openspec-*, `marketing-brand-voice`, `financial-education-content`) y `.agents/skills/` (frontend, ui-ux, seo, sdd, etc.).
- MCP: `context7` (docs en vivo de React/Tailwind/Framer), `chrome-devtools` (contraste, consola, performance), `playwright` (global; QA visual y responsive).

## Reglas
- SDD estricto: *"Que el código diga la verdad y la especificación también"*.
- Leer `docs/constitution.md`, la spec activa y el roadmap antes de modificar cualquier componente.
- Prohibido: jerga o visuales de software puro (consolas de código, circuitos, ramas git); promesas de rentabilidad; datos sin registrar en `datos-pendientes.md`.
- Toda variante cromática requiere quedar aprobada en la spec activa (Spec 002: esmeralda + dorado champán).

## Al terminar cualquier tarea
- Ejecutar `npm run build` para certificar que el bundle compila sin errores.
- Verificar el cumplimiento del escenario EARS correspondiente y actualizar el registro de datos si se sintetizó alguno.
