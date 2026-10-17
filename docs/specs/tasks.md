# Tareas de Implementación SDD — Portafolio Estándar

Tareas ordenadas por dependencia, acotadas (< 30 min cada una), vinculadas a sus RF y con condición "Hecho cuando" verificable.

---

### [x] Tarea 1: Base de Diseño Corporativo y Tokens
- **RFs cubiertos**: RNF-1, RNF-2, RNF-3
- **Archivos a modificar**: `tailwind.config.js`, `src/index.css`
- **Descripción**: Definir nueva paleta ejecutiva (obsidiana, zafiro, platino), eliminar clases específicas de terminal/código y circuitos cyberpunk estridentes, configurando efectos de cristal esmerilado corporativo.
- **Hecho cuando**: La paleta y las clases de estilo compilan limpiamente y los fondos reflejan el nuevo tono obsidiana/azul cobalto. (Completado y verificado)

---

### [x] Tarea 2: Navbar y Hero con Propuesta de Valor Ejecutiva
- **RFs cubiertos**: RF-1, RF-2
- **Archivos a modificar**: `src/components/Navbar.jsx`, `src/components/Hero.jsx`
- **Descripción**: Actualizar menú de navegación con nombres de secciones estándar. Reformular el Hero con propuesta de valor de liderazgo de proyectos y consultoría integral; cambiar badges de frameworks por sellos de excelencia y experiencia; actualizar CTAs orientados a negocio.
- **Hecho cuando**: El Hero muestra la propuesta ejecutiva de Luis Mario Rocha Vela sin badges de lenguajes ni circuitos, con CTAs operativos y Navbar sincronizada con las secciones. (Completado y verificado)

---

### [x] Tarea 3: Carrusel de Capacidades Estratégicas
- **RFs cubiertos**: RF-3
- **Archivos a modificar**: `src/components/TechCarousel.jsx`
- **Descripción**: Reemplazar la lista exclusiva de logos de programación por capacidades y áreas estratégicas clave (Dirección Estratégica, Consultoría de Negocios, Transformación Digital, Optimización Operativa, Soluciones a Medida, Liderazgo de Equipos).
- **Hecho cuando**: El carrusel se desplaza en bucle infinito mostrando las áreas y capacidades corporativas con tipografía e iconos refinados. (Completado y verificado)

---

### [x] Tarea 4: Servicios y Soluciones Empresariales
- **RFs cubiertos**: RF-7
- **Archivos a modificar**: `src/components/Services.jsx`
- **Descripción**: Reformular las tarjetas de servicios hacia consultoría estratégica, dirección de proyectos, soluciones digitales integradas y eficiencia operativa, manteniendo el efecto Tilt y micro-animaciones.
- **Hecho cuando**: Las 4 tarjetas de servicios presentan títulos y beneficios empresariales con diseño interactivo impecable. (Completado y verificado)

---

### [x] Tarea 5: Casos de Éxito y Proyectos de Alto Impacto
- **RFs cubiertos**: RF-4, RF-5
- **Archivos a modificar**: `src/components/Projects.jsx`
- **Descripción**: Transformar la sección de proyectos eliminando ramas de git, stars/forks de GitHub y terminología técnica cerrada. Categorizar por *Consultoría*, *Transformación Digital*, *Plataformas Integradas*, *Soluciones Operativas*, destacando objetivo, solución y métricas de impacto.
- **Hecho cuando**: Los proyectos se muestran con métricas de valor de negocio y los filtros de categorías funcionan con animaciones fluidas de Framer Motion. (Completado y verificado)

---

### [x] Tarea 6: Matriz de Competencias Profesionales
- **RFs cubiertos**: RF-6
- **Archivos a modificar**: `src/components/Skills.jsx`
- **Descripción**: Reestructurar las categorías técnicas puras hacia competencias integrales: *Liderazgo & Gestión*, *Pensamiento Analítico & Estratégico*, *Soluciones Digitales & Ejecución*, y *Comunicación & Relaciones Profesionales*.
- **Hecho cuando**: La sección despliega las 4 áreas de competencias profesionales con iconos elegantes y tarjetas interactivas. (Completado y verificado)

---

### [x] Tarea 7: Trayectoria Profesional y Certificaciones
- **RFs cubiertos**: RF-8, H3
- **Archivos a modificar**: `src/components/Experience.jsx`, `src/components/Certificates.jsx`
- **Descripción**: Adaptar los hitos laborales y académicos hacia roles de coordinación, consultoría y formación integral en `Experience.jsx`, y verificar el diseño sobrio de `Certificates.jsx`.
- **Hecho cuando**: La línea de tiempo presenta una narrativa profesional coherente y elegante con roles ejecutivos e hitos alcanzados. (Completado y verificado)

---

### [x] Tarea 8: Presentación "Sobre Mí" Ejecutiva y Footer
- **RFs cubiertos**: RF-9, RF-1
- **Archivos a modificar**: `src/components/About.jsx`, `src/components/Footer.jsx`
- **Descripción**: Reemplazar la consola simulada de código en `About.jsx` por una presentación editorial de pilares de valor, filosofía de trabajo y visión profesional. Alinear el Footer con la identidad institucional.
- **Hecho cuando**: "Sobre Mí" muestra los pilares de valor corporativos con diseño de revista/editorial de lujo sin fragmentos de código, y el Footer muestra enlaces actualizados. (Completado y verificado)

---

### [x] Tarea 9: Asistente Virtual Interactivo y Adaptable
- **RFs cubiertos**: RF-10, RF-11
- **Archivos modificados**: `src/components/FloatingWidgets.jsx`
- **Descripción**: 
  1. Posicionar la ventana del chat al nivel inferior (`bottom-6 right-6`), con alternancia fluida del botón gatillador.
  2. Eliminación de las píldoras de preguntas predeterminadas para permitir una conversación natural y limpia.
  3. Mayor área de mensajes y respuestas del bot que enfatizan la versatilidad de Luis ("sabe resolver de todo y se adapta con rapidez a cualquier sector").
- **Hecho cuando**: El chat opera de manera natural, limpia y directa, alternando su visibilidad con el botón inferior derecho. (Completado y verificado)

---

### [x] Tarea 11: Transformación Comercial, Renombrado Semántico y Síntesis Concisa
- **RFs cubiertos**: RF-1, RF-2, RF-4, RF-6, RF-7, RF-8, RF-9, RNF-1, RNF-3
- **Archivos creados y actualizados**:
  - `src/components/CommercialHero.jsx`: Presentación comercial concisa, micro-puntos de valor con iconos y botones clave.
  - `src/components/CommercialProjects.jsx`: Casos de negocio centrados con iconos temáticos y métricas de ROI.
  - `src/components/BusinessSolutions.jsx`: Soluciones estructuradas para generar ingresos y orden operacional.
  - `src/components/ProfessionalSkills.jsx`: Competencias centradas de gestión, analítica y versatilidad total.
  - `src/components/ProfessionalTrajectory.jsx`: Línea de hitos de liderazgo, consultoría y formación sistémica.
  - `src/components/ExecutiveProfile.jsx`: Manifiesto editorial conciso, pilares comerciales y cotas de valor.
  - `src/App.jsx`: Integración ordenada de los nuevos módulos.
- **Descripción**: Reducción sustancial del volumen de texto para evitar fatiga de lectura, adición de iconos en cada tarjeta y métrica, y diseño adaptable para cualquier dispositivo (320px hasta 4K).
- **Hecho cuando**: El bundle compila limpiamente (`npm run build` en 4.41s) y la experiencia es directa, ágil y visualmente atractiva en móviles y pantallas de escritorio. (Completado y verificado)

---

# Sprint 002 — Adaptación Marketing: Luis Enrique Abri Fernández

> **Fuente canónica**: `openspec/changes/adapt-portafolio-marketing/tasks.md` · **Spec**: [002-portafolio-marketing.md](002-portafolio-marketing.md) · **Roadmap**: [../roadmap.md](../roadmap.md)
> Se marcan al cerrar cada fase (gate: `npm run build` OK + escenario verificado). Los datos sintetizados se registran en [datos-pendientes.md](datos-pendientes.md).

## Fase 1 — Design System v2 (Esmeralda & Oro)

### [x] Tarea 1.1: Tokens v2 — paleta esmeralda/dorada
- **RFs cubiertos**: RNF-1 · **Archivos**: `tailwind.config.js`, `src/index.css`
- **Hecho cuando**: la nueva paleta compila sin errores ni clases huérfanas. (Completado y verificado)

### [x] Tarea 1.2: Reemplazo de clases en componentes
- **RFs cubiertos**: RNF-1 · **Archivos**: `src/components/*`
- **Hecho cuando**: cero ocurrencias de `sapphire-blue`/`cyan-glow` en `src/`. (Completado y verificado)

### [x] Tarea 1.3: Fondo de partículas v2
- **Archivos**: `src/components/ParticlesBackground.jsx` · **RFs**: RNF-2
- **Hecho cuando**: partículas esmeralda/doradas con legibilidad y fluidez verificadas en dev. (Integrado en el Hero; API v4 corregida con `ParticlesProvider`)

### [x] Tarea 1.4: Auditoría de contraste WCAG AA
- **RFs cubiertos**: RNF-3 · **Herramienta**: Chrome DevTools MCP
- **Hecho cuando**: Hero, Servicios, Casos y Footer sin incidencias de contraste. (Lighthouse Accesibilidad 100/100; `emerald-deep` ajustado a `#047857` y hover `#057A58`)

## Fase 2 — Identidad y datos del perfil

### [ ] Tarea 2.1: Registro de datos sintetizados actualizado
- **RFs cubiertos**: RNF-4 · **Archivos**: `docs/specs/datos-pendientes.md`
- **Hecho cuando**: todo dato sintetizado de la fase queda registrado con ubicación y estado.

### [ ] Tarea 2.2: Navbar del perfil
- **RFs cubiertos**: RF-1 · **Archivos**: `src/components/Navbar.jsx`
- **Hecho cuando**: secciones del perfil y CTA "Agenda una asesoría" funcionan (anclas verificadas).

### [ ] Tarea 2.3: Hero con propuesta dual
- **RFs cubiertos**: RF-2 · **Archivos**: `src/components/CommercialHero.jsx`
- **Hecho cuando**: nombre, rol, propuesta dual y lema visibles, sin jerga de software, responsive 320–1440.

### [ ] Tarea 2.4: Carrusel de áreas de conocimiento
- **RFs cubiertos**: RF-3 · **Archivos**: `src/components/TechCarousel.jsx`
- **Hecho cuando**: las 6 áreas giran en bucle continuo sin cortes.

### [ ] Tarea 2.5: Servicios con aviso educativo
- **RFs cubiertos**: RF-7, RNF-5 · **Archivos**: `src/components/BusinessSolutions.jsx`
- **Hecho cuando**: 4 servicios con tilt operativo y aviso educativo en la tarjeta de mentoría.

### [ ] Tarea 2.6: Casos desafío→solución→resultado
- **RFs cubiertos**: RF-4, RF-5 · **Archivos**: `src/components/CommercialProjects.jsx`
- **Hecho cuando**: 4 casos categorizados y filtros animados sin romper el layout.

### [ ] Tarea 2.7: Matriz de competencias
- **RFs cubiertos**: RF-6 · **Archivos**: `src/components/ProfessionalSkills.jsx`
- **Hecho cuando**: 4 áreas en grid responsivo sin desbordar.

### [ ] Tarea 2.8: Trayectoria académica y de mentoría
- **RFs cubiertos**: RF-8 · **Archivos**: `src/components/ProfessionalTrajectory.jsx`
- **Hecho cuando**: hitos en orden cronológico y coherentes con el perfil.

### [ ] Tarea 2.9: Credenciales
- **RFs cubiertos**: H3 · **Archivos**: `src/components/Certificates.jsx`
- **Hecho cuando**: credenciales plausibles visibles y registradas como pendientes.

### [ ] Tarea 2.10: Perfil editorial
- **RFs cubiertos**: RF-9 · **Archivos**: `src/components/ExecutiveProfile.jsx`
- **Hecho cuando**: manifiesto, pilares y enfoque dual sin bloques de código.

### [ ] Tarea 2.11: Footer y contacto
- **RFs cubiertos**: RF-1 · **Archivos**: `src/components/Footer.jsx`
- **Hecho cuando**: contacto y redes del perfil sin errores 404 en consola.

## Fase 3 — Asistente, contacto y SEO

### [ ] Tarea 3.1: Asistente conversacional del perfil
- **RFs cubiertos**: RF-10, RF-11, RNF-5 · **Archivos**: `src/components/FloatingWidgets.jsx`
- **Hecho cuando**: 5 conversaciones de prueba correctas, con framing educativo en finanzas.

### [ ] Tarea 3.2: Frases del Typewriter
- **Archivos**: `src/components/TypewriterText.jsx`
- **Hecho cuando**: rotación fluida de frases del perfil.

### [ ] Tarea 3.3: Enlaces de contacto
- **RFs cubiertos**: RF-11 · **Archivos**: Navbar, Hero, Footer, FloatingWidgets
- **Hecho cuando**: WhatsApp/correo abren correctamente; destinos pendientes registrados.

### [ ] Tarea 3.4: SEO y metadatos
- **Archivos**: `index.html`
- **Hecho cuando**: title, description y Open Graph verificados en `dist/index.html`.

## Fase 4 — QA visual, accesibilidad y performance

### [ ] Tarea 4.1: QA responsive multi-viewport
- **RFs cubiertos**: RNF-3 · **Herramienta**: Playwright
- **Hecho cuando**: 320/375/768/1024/1440/4K sin overflow horizontal.

### [ ] Tarea 4.2: Auditoría de accesibilidad
- **RFs cubiertos**: RNF-3 · **Herramienta**: Chrome DevTools MCP
- **Hecho cuando**: sin incidencias críticas de semántica, foco, aria y contraste.

### [ ] Tarea 4.3: Consola y performance
- **RFs cubiertos**: RNF-2 · **Herramienta**: `npm run preview` + DevTools
- **Hecho cuando**: consola limpia y sin caídas de frame visibles.

## Fase 5 — Validación SDD y cierre

### [ ] Tarea 5.1: Verificación EARS con evidencias
- **Archivos**: `docs/specs/validation.md`
- **Hecho cuando**: cada RF/RNF de la Spec 002 con evidencia registrada.

### [ ] Tarea 5.2: Validación del titular (gate de publicación)
- **Archivos**: `docs/specs/datos-pendientes.md`
- **Hecho cuando**: registro validado o aprobado explícitamente.

### [ ] Tarea 5.3: Cierre técnico y archivado
- **Comandos**: `npm run build` + `openspec validate adapt-portafolio-marketing --strict` + `openspec archive`
- **Hecho cuando**: build OK, validación estricta OK y change archivado.
