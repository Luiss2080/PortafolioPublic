# Registro de Datos Pendientes de Validación — Spec 002

> **✅ Aprobación del titular (gate F5.2 — 2026-10-17)**: Luis Enrique Abri Fernández aprobó explícitamente este registro completo para publicación. Los ítems ⏳ quedan **aprobados como versión vigente** y se actualizarán cuando el titular entregue los valores reales (foto de perfil, número de WhatsApp, credenciales, dominio).

> Todo dato **completado por el asistente** (no entregado por el titular en la base) se registra aquí con su ubicación exacta en el código.
> **Estados**: ⏳ pendiente de reemplazo por valor real (aprobado para esta versión) · ✅ validado por el titular · ♻️ reemplazado por dato real.
> **Gate de publicación (Fase 5)**: ✅ cumplido — registro aprobado explícitamente el 2026-10-17.

## 1. Contacto y redes

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| WhatsApp: `+591 70000000` (número sintetizado) | Navbar, CommercialHero, BusinessSolutions, CommercialProjects, FloatingWidgets, Footer | ⏳ |
| Correo: `luisabri.contacto@gmail.com` (sintetizado) | Navbar, CommercialHero, FloatingWidgets, Footer | ⏳ |
| LinkedIn: enlace **deshabilitado intencionalmente** (`href="#"`, inerte, aviso "Próximamente") hasta recibir la URL real | CommercialHero, Footer | ⏳ (placeholder sin destino falso) |
| Instagram: enlace **deshabilitado intencionalmente** hasta recibir la URL real | CommercialHero, Footer | ⏳ (placeholder sin destino falso) |
| TikTok: enlace **deshabilitado intencionalmente** hasta recibir la URL real | CommercialHero, Footer | ⏳ (placeholder sin destino falso) |
| Ubicación: "Bolivia — Asesorías digitales y presenciales" | Footer | ⏳ |
| CV/Currículum: botón **retirado a pedido del titular (2026-10-17)**; se reincorporará como descarga cuando exista el PDF real | — | ⏳ (sin CV publicado) |

## 2. Trayectoria

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| Formación (Marketing, Publicidad y Comercio): `2022 - Presente` | ProfessionalTrajectory.jsx (Hito 01) | ⏳ |
| Experiencia práctica con emprendedores: `2023 - Presente` | ProfessionalTrajectory.jsx (Hito 02) | ⏳ |
| Inicio del rol de mentor: `2024 - Presente` | ProfessionalTrajectory.jsx (Hito 03) | ⏳ |
| Denominaciones sintetizadas ("Formación Universitaria", "Proyectos de marketing y comunicación", "Comunidad de aprendizaje") | ProfessionalTrajectory.jsx | ⏳ |

## 3. Credenciales y certificaciones

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| "Fundamentos de Marketing Digital" — Google Actívate (2024) | Certificates.jsx | ⏳ |
| "Gestión de Contenido y Redes Sociales" — Meta Blueprint (2024) | Certificates.jsx | ⏳ |
| "Introducción a los Mercados Financieros" — Coursera · Yale University (2025) | Certificates.jsx | ⏳ |
| Enlaces de credenciales (href="#", sin destino real aún) | Certificates.jsx | ⏳ |

## 4. Métricas de casos de éxito

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| `+180% Alcance` — Lanzamiento de Marca Local (emprendimiento gastronómico) | CommercialProjects.jsx | ⏳ |
| `+60% Interacción` y `+1.200 seguidores en 90 días` — Identidad Visual para Redes (tienda de moda) | CommercialProjects.jsx | ⏳ |
| `2 segmentos + Plan de 90 días` — Diagnóstico FODA/PESTEL (delivery) | CommercialProjects.jsx | ⏳ |
| `+30 Participantes` — Comunidad de Aprendizaje Financiero (principiantes) | CommercialProjects.jsx | ⏳ |
| Tipos de cliente sintetizados de los 4 casos | CommercialProjects.jsx | ⏳ |

## 5. Contenido editorial

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| Cota de valor (cita del bloque "Sobre mí") | ExecutiveProfile.jsx | ⏳ |
| Lema y propuesta dual | CommercialHero.jsx, ExecutiveProfile.jsx | ✅ (derivados de la bio entregada; sin datos nuevos) |
| Enlaces de casos | CommercialProjects.jsx | N/A — los CTAs dirigen a WhatsApp; no hay enlaces externos |
| Frases del Typewriter (4 frases derivadas de la bio) | TypewriterText.jsx | ⏳ (componente actualizado en F3; no montado en el layout actual) |
| Respuestas del asistente conversacional (derivadas de servicios, casos y avisos de compliance) | FloatingWidgets.jsx | ✅ (derivadas del registro; sin datos nuevos) |
| Copy del polish F4b: bio del Hero, chip "Diagnóstico primero", subtítulos e hitos reescritos, H3 de "Sobre mí" y bio del Footer (depurados de redundancias) | CommercialHero, BusinessSolutions, CommercialProjects, ProfessionalSkills, ProfessionalTrajectory, Certificates, ExecutiveProfile, Footer | ⏳ (nuevo copy editorial; pendiente de revisión del titular) |

## 6. Assets gráficos

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| Fotografía de perfil (aún corresponde al titular anterior; al reemplazarla, optimizar el peso — Lighthouse señala ~5.1 MB de imágenes mejorables) | `public/img/perfil.png` → CommercialHero | ⏳ |
| Logo/favicon: monograma "LA" sintetizado (SVG, esmeralda→dorado sobre obsidiana) en uso | `public/flavicon.svg`, `public/img/flavicon.svg` → Navbar, Footer, index.html | ⏳ (propuesta sintetizada; pendiente logo definitivo del titular) |

## 7. SEO y metadatos

| Dato | Ubicación | Estado |
| :--- | :--- | :--- |
| Título y meta description (derivados de la bio entregada) | index.html | ✅ (derivados; sin datos nuevos) |
| og:url / URL canónica absoluta | index.html | ⏳ (pendiente el dominio de publicación) |
| og:image y twitter:image (rutas relativas a `img/perfil.png`) | index.html | ⏳ (absolutizar cuando exista dominio; la foto del titular está pendiente) |

---

**Nota de trazabilidad**: este registro es el contrato de veracidad de la Spec 002 (RNF-4). Si un elemento se valida, se marca ✅; si se reemplaza, pasa a ♻️ con el nuevo valor. La fuente de los datos validados prevalece sobre cualquier texto sintetizado.
