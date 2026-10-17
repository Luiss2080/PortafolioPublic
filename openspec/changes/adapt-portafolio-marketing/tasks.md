# Tasks

## 1. Fase 1 — Design System v2 (Esmeralda & Oro)

- [x] 1.1 Actualizar tokens de color y superficies en `tailwind.config.js` e `src/index.css` y verificar que `npm run build` compila sin errores
- [x] 1.2 Reemplazar en todos los componentes las clases de la paleta anterior (zafiro/cobalto) por la v2 y verificar que la búsqueda de `sapphire-blue` y `cyan-glow` en `src/` devuelve cero resultados
- [x] 1.3 Ajustar `ParticlesBackground.jsx` a la paleta esmeralda/dorada y verificar en `npm run dev` la legibilidad del contenido sobre el fondo
- [x] 1.4 Auditar contraste WCAG AA con Chrome DevTools en Hero, Servicios, Casos y Footer y verificar que no hay incidencias de contraste

## 2. Fase 2 — Identidad y datos del perfil

- [x] 2.1 Actualizar el registro `docs/specs/datos-pendientes.md` con cada dato sintetizado de esta fase (dato, ubicación, estado) y verificar que no queda ningún dato sintetizado fuera del registro
- [x] 2.2 Reescribir `Navbar.jsx` con las secciones del perfil y el CTA "Agenda una asesoría" y verificar que cada enlace ancla navega a su sección
- [x] 2.3 Reescribir `CommercialHero.jsx` con nombre, rol, propuesta dual, lema y CTAs y verificar visualmente en 320px y 1440px que no hay jerga de software
- [x] 2.4 Reescribir `TechCarousel.jsx` con las 6 áreas de conocimiento y verificar el bucle continuo sin cortes
- [x] 2.5 Reescribir `BusinessSolutions.jsx` con los 4 servicios (incluido el aviso educativo en mentoría) y verificar tilt y micro-animaciones de las tarjetas
- [x] 2.6 Reescribir `CommercialProjects.jsx` con 4 casos desafío→solución→resultado y verificar que los filtros por categoría animan sin romper el layout
- [x] 2.7 Reescribir `ProfessionalSkills.jsx` con la matriz de 4 áreas y verificar el grid en móvil, tablet y escritorio
- [x] 2.8 Reescribir `ProfessionalTrajectory.jsx` con la trayectoria académica y de mentoría y verificar el orden cronológico de los hitos
- [x] 2.9 Reescribir `Certificates.jsx` con credenciales plausibles y verificar que cada una queda registrada como pendiente en `datos-pendientes.md`
- [x] 2.10 Reescribir `ExecutiveProfile.jsx` (manifiesto, pilares, enfoque dual) y verificar que no existen bloques de código ni consolas
- [x] 2.11 Actualizar `Footer.jsx` con contacto y redes del perfil y verificar enlaces sin errores 404 en consola

## 3. Fase 3 — Asistente, contacto y SEO

- [x] 3.1 Reprogramar respuestas de `FloatingWidgets.jsx` (servicios, precios, mentoría, finanzas, contacto) y verificar 5 conversaciones de prueba con framing educativo en finanzas
- [x] 3.2 Actualizar `TypewriterText.jsx` con frases del perfil y verificar la rotación fluida
- [x] 3.3 Actualizar los enlaces de WhatsApp/correo en Navbar, Hero, Footer y widget y verificar apertura correcta y registro de destinos pendientes
- [x] 3.4 Actualizar `index.html` (title, description, Open Graph) y verificar los metadatos en el `dist/index.html` generado por el build

## 4. Fase 4 — QA visual, accesibilidad y performance

- [x] 4.1 Capturar con Playwright los viewports 320/375/768/1024/1440 y 4K de las secciones principales y verificar cero overflow horizontal
- [x] 4.2 Auditar accesibilidad (semántica, foco, aria, contraste) con Chrome DevTools y verificar ausencia de incidencias críticas
- [x] 4.3 Verificar consola limpia y performance del build de producción (`npm run preview`) y confirmar ausencia de errores y de caídas de frame visibles

## 5. Fase 5 — Validación SDD y cierre

- [ ] 5.1 Verificar cada RF/RNF de `docs/specs/002-portafolio-marketing.md` contra su escenario y registrar evidencia en `docs/specs/validation.md`
- [ ] 5.2 Presentar `docs/specs/datos-pendientes.md` al titular y verificar su validación o aprobación explícita (gate de publicación)
- [ ] 5.3 Ejecutar `npm run build` final y `openspec validate adapt-portafolio-marketing --strict` y verificar ambos sin errores

## Workflow follow-up

- Archivar el change con `openspec archive adapt-portafolio-marketing` y verificar las specs archivadas.
- Sincronizar `docs/specs/tasks.md` (Sprint 002) con los resultados finales.
- Commit de cierre con mensaje convencional.
