# Spec 001 — Transformación a Portafolio Estándar y Adaptable

## Contexto y objetivo
El portafolio actual se encuentra exclusivamente orientado al desarrollo de software y tecnología pura (código en pantalla, circuitos, ramas de Git, métricas de repositorios y stacks técnicos). Se requiere transformarlo en un **portafolio estándar, adaptable, empresarial y elegante**, capaz de funcionar como carta de presentación ante cualquier tipo de cliente o empresa, transmitiendo valor estratégico, liderazgo, resolución de problemas e innovación, sin perder el dinamismo visual ni las animaciones interactivas fluidas.

## Usuarios / actores
- **Clientes Corporativos / Empresas**: Buscan proveedores o aliados estratégicos con visión integral de proyectos y resultados de negocio.
- **Reclutadores y Directores de Proyecto**: Evalúan perfil profesional, versatilidad, trayectoria, competencias y certificados.
- **Clientes Generales / PYMEs**: Buscan soluciones prácticas a sus necesidades de transformación y presencia profesional.

## Historias de usuario
- **H1**: Como cliente empresarial o evaluador, quiero visualizar una propuesta de valor clara y ejecutiva en el inicio, para entender de inmediato el impacto y los servicios que ofrece el profesional sin jerga técnica restrictiva.
- **H2**: Como visitante interesado, quiero explorar áreas de enfoque, servicios y proyectos destacados organizados por valor de negocio y resultados, para evaluar si se ajusta a las necesidades de mi organización.
- **H3**: Como cliente potencial, quiero poder consultar competencias clave, trayectoria y credenciales verificables, para validar la seriedad y calidad del trabajo.
- **H4**: Como usuario interactivo, quiero poder hacer consultas a través del asistente virtual y botones de contacto directo (WhatsApp, Correo, Redes), para recibir orientación ágil y personalizada adaptada a cualquier temática corporativa.

## Requisitos funcionales (criterios de aceptación en notación EARS)
- **RF-1**: CUANDO el usuario accede al portal, EL SISTEMA muestra un encabezado (*Navbar*) con navegación limpia hacia las secciones clave (Inicio, Trayectoria, Competencias, Soluciones, Proyectos, Credenciales, Sobre mí) y acceso a contacto directo.
- **RF-2**: EL SISTEMA presenta en la sección principal (*Hero*) una propuesta de valor ejecutiva centrada en liderazgo de proyectos, consultoría estratégica y soluciones de impacto, omitiendo títulos restrictivos como "Desarrollador de Software" o circuitos cyberpunk de fondo.
- **RF-3**: MIENTRAS el usuario recorre la página, EL SISTEMA despliega un carrusel dinámico continuo de capacidades estratégicas y enfoques de valor (Dirección de Proyectos, Consultoría Estratégica, Transformación Digital, Optimización de Procesos, Innovación y Soluciones a Medida).
- **RF-4**: CUANDO el usuario navega a la sección de Proyectos/Casos de Éxito, EL SISTEMA expone fichas estructuradas que detallan el desafío empresarial, la solución implementada y el impacto obtenido, clasificadas en categorías estratégicas (Estrategia, Transformación Digital, Soluciones Integradas, Innovación).
- **RF-5**: SI el usuario interactúa con los filtros de proyectos, ENTONCES EL SISTEMA filtra suavemente las tarjetas correspondientes con transiciones fluidas de Framer Motion.
- **RF-6**: EL SISTEMA exhibe en la sección de Competencias una matriz equilibrada dividida en 4 áreas fundamentales: *Liderazgo & Gestión*, *Pensamiento Analítico & Estratégico*, *Soluciones Digitales & Ejecución*, y *Comunicación & Relaciones Profesionales*.
- **RF-7**: EL SISTEMA presenta un catálogo de Servicios / Soluciones Empresariales estructurado con tarjetas interactivas de efecto Tilt y micro-animaciones, describiendo servicios de Consultoría, Dirección de Proyectos, Soluciones Digitales y Optimización Operativa.
- **RF-8**: EL SISTEMA presenta la sección de Trayectoria (*Experience*) con una línea de tiempo ejecutiva que refleja hitos profesionales, dirección de iniciativas y formación académica sin sesgo cerrado de programación pura.
- **RF-9**: EL SISTEMA presenta la sección *Sobre Mí* mediante una estructura editorial ejecutiva, sustituyendo el bloque simulador de código por una síntesis de visión profesional, valores, pilares metodológicos y estadísticas clave.
- **RF-10**: CUANDO el usuario interactúa con el widget flotante de chat, EL SISTEMA responde preguntas generales, de servicios, experiencia, trayectoria y contacto con tono profesional, cortés y versátil, sin restringirse exclusivamente a programación técnica.
- **RF-11**: SI el usuario envía un mensaje o consulta en el chat flotante, ENTONCES EL SISTEMA procesa la consulta y ofrece sugerencias contextuales con opción de enlace a WhatsApp oficial y correo de contacto.

## Requisitos no funcionales
- **RNF-1 (Estética y Estilo)**: Paleta corporativa sobria (fondo obsidiana mate `#0A0D14` / `#0F141C`, superficies de cristal esmerilado con acento azul cobalto/zafiro `#1E40AF` / `#38BDF8` y toques platino), tipografía Inter / Syne.
- **RNF-2 (Rendimiento y Fluidez)**: Carga y transiciones a 60 FPS con Framer Motion y `@tsparticles` optimizadas, sin caídas de frame ni layouts rotos.
- **RNF-3 (Compatibilidad y Responsive)**: 100% adaptable a pantallas móviles (320px+), tablets y escritorios, cumpliendo estándares de contraste WCAG AA.
- **RNF-4 (Veracidad del Contrato SDD)**: El código fuente en `src/components/` debe reflejar con exactitud lo pactado en la presente especificación ("que el código diga la verdad y la especificación también").

## Casos límite
- Visualización en pantallas ultra-pequeñas (< 360px): El carrusel de competencias y los modales/widgets no deben desbordar horizontalmente (`overflow-x-hidden`).
- Mensajes no contemplados en el Chatbot: Respuesta por defecto cordial invitando a contactar directamente vía correo o WhatsApp corporativo.
- Enlaces de proyectos y certificados sin URL externa: Deben manejar estado desactivado o interactivo descriptivo sin generar errores 404.

## Fuera de alcance
- Conexión a pasarelas de pago reales o backend transaccional en este sprint (se mantiene frontend reactivo estático de alta fidelidad en Vite).
- Panel de administración CMS para modificar contenidos en tiempo real (los datos residen en las estructuras tipadas y modulares de componentes).

## Criterios de finalización
- 100% de los requisitos funcionales (RF-1 a RF-11) implementados en los componentes respectivos.
- Build de producción ejecutado con éxito sin errores (`npm run build`).
- Auditoría visual que certifique la eliminación completa de patrones exclusivos de software duro y la adopción de una presencia corporativa elegante y versátil.

## Dudas abiertas
- Ninguna. Alcance y dirección estratégica consensuados.
