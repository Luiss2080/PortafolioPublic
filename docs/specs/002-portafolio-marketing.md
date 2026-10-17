# Spec 002 — Adaptación a Portafolio de Marketing y Mercados Financieros (Luis Enrique Abri Fernández)

## Contexto y objetivo
El portafolio estándar (Spec 001) debe adaptarse in-place para presentar a **Luis Enrique Abri Fernández**, estudiante de Marketing, Publicidad y Comercio y mentor en Mercados Financieros. El objetivo es que la identidad visual, los mensajes y la totalidad de los datos reflejen su perfil dual — marketing para hacer crecer marcas y visión financiera para decidir con inteligencia — conservando la elegancia premium, el dinamismo visual y la arquitectura del portafolio base. Aplica el principio SDD: *"el código dice la verdad y la especificación también"*.

## Perfil del titular (fuente de verdad entregada)
- **Nombre**: Luis Enrique Abri Fernández.
- **Rol**: Estudiante de Marketing, Publicidad y Comercio | Mentor en Mercados Financieros.
- **Sobre mí**: persona proactiva y orientada a resultados; conecta necesidades reales de emprendedores con soluciones prácticas (digitales y presenciales); valora entender el problema exacto y entregar una solución clara y efectiva.
- **Áreas de conocimiento**: estrategias de comunicación y difusión; edición básica de imagen y video para redes; análisis FODA y PESTEL; definición y segmentación de público objetivo; identificación de problemas y soluciones a medida para emprendedores; análisis del mercado financiero y comportamiento de activos; proceso de compra y venta de activos; mentoría y gestión de comunidad de aprendizaje; explicación paso a paso de conceptos y operativa.
- **Enfoque**: *"Identifico el problema → Diseño la solución → La entrego de forma clara, ya sea digital o presencial"*.
- **Visión**: combinar marketing + visión financiera para emprendedores que quieren crecer con inteligencia.

## Usuarios / actores
- **Emprendedores y PYMEs**: buscan hacer crecer su marca, conectar con más personas y ordenar sus decisiones.
- **Personas interesadas en mercados financieros**: quieren entender el mercado y su operativa paso a paso con acompañamiento.
- **Comunidad de aprendizaje**: participantes de mentorías y actividades guiadas.
- **Aliados y clientes de servicios presenciales/digitales**: evalúan seriedad, áreas de conocimiento y resultados.

## Historias de usuario
- **H1**: Como emprendedor, quiero entender en segundos qué hace Luis Enrique y cómo puede ayudarme, para decidir si contactarlo.
- **H2**: Como visitante, quiero explorar sus áreas de conocimiento, servicios y casos, para evaluar si encaja con lo que necesito.
- **H3**: Como interesado en finanzas, quiero ver cómo enseña y qué ofrece la mentoría/comunidad, sin sentirme presionado con promesas de dinero.
- **H4**: Como usuario interactivo, quiero consultar dudas por el asistente y contactar por WhatsApp o correo fácilmente.

## Requisitos funcionales (criterios de aceptación en notación EARS)
- **RF-1**: CUANDO el usuario accede al portal, EL SISTEMA muestra una Navbar con navegación a las secciones (Inicio, Conocimientos, Servicios, Casos, Competencias, Trayectoria, Credenciales, Sobre mí) y CTA de contacto "Agenda una asesoría".
- **RF-2**: EL SISTEMA presenta en el Hero el nombre, el rol (Marketing, Publicidad y Comercio | Mentor en Mercados Financieros), la propuesta dual y el lema "Identifico el problema → Diseño la solución → La entrego de forma clara", con CTAs operativos.
- **RF-3**: MIENTRAS el usuario recorre la página, EL SISTEMA despliega un carrusel continuo con las 6 áreas de conocimiento (comunicación, contenido para redes, FODA/PESTEL, segmentación, soluciones a emprendedores, mercados financieros/mentoría).
- **RF-4**: CUANDO el usuario navega a Casos, EL SISTEMA expone fichas con desafío, solución y resultado, clasificadas en categorías (Comunicación, Redes y Contenido, Estrategia, Mercados Financieros).
- **RF-5**: SI el usuario interactúa con los filtros de casos, ENTONCES EL SISTEMA filtra suavemente las tarjetas con Framer Motion.
- **RF-6**: EL SISTEMA exhibe una matriz de competencias en 4 áreas: Estrategia de Marketing y Análisis, Contenido y Redes Sociales, Soluciones para Emprendedores, Mercados Financieros y Mentoría.
- **RF-7**: EL SISTEMA presenta 4 servicios con efecto Tilt: Estrategia de Comunicación, Gestión de Redes y Contenido, Asesoría Estratégica para Emprendedores, Mentoría en Mercados Financieros; la tarjeta de mentoría incluye el aviso educativo.
- **RF-8**: EL SISTEMA presenta la Trayectoria con línea de tiempo: formación académica (Marketing, Publicidad y Comercio), rol de mentor en mercados financieros y experiencia práctica con emprendedores.
- **RF-9**: EL SISTEMA presenta "Sobre mí" como bloque editorial con manifiesto, pilares de trabajo y enfoque dual, sin consolas ni fragmentos de código.
- **RF-10**: CUANDO el usuario interactúa con el asistente flotante, EL SISTEMA responde sobre servicios, áreas de conocimiento, mentoría, trayectoria y contacto con tono cercano-profesional; en finanzas responde con framing educativo.
- **RF-11**: SI el usuario envía una consulta no contemplada, ENTONCES EL SISTEMA responde cordialmente e invita a WhatsApp/correo con enlaces directos.

## Requisitos no funcionales
- **RNF-1 (Identidad v2)**: Base obsidiana (`#0A0D14` / `#0F141C`) con acentos esmeralda (familia `#059669`–`#34D399`) y dorado champán (`#D4AF37` / `#E7C873`); esta variante sustituye los acentos zafiro/cobalto de la Spec 001, conforme al principio de adaptabilidad de la constitución.
- **RNF-2 (Rendimiento y Fluidez)**: 60 FPS en animaciones y partículas; sin caídas de frame ni layouts rotos.
- **RNF-3 (Responsive y Accesibilidad)**: 100% adaptable (320px → 4K) con contraste WCAG AA.
- **RNF-4 (Veracidad SDD)**: Los componentes reflejan esta spec; todo dato sintetizado queda registrado en `docs/specs/datos-pendientes.md` hasta validación del titular.
- **RNF-5 (Compliance financiero)**: El contenido de mercados es educativo; sin recomendaciones de inversión ni promesas de rendimiento; aviso visible en sección de mentoría y respuestas del asistente.

## Política de datos sintetizados
- Los datos no entregados por el titular (certificaciones, métricas de casos, años, enlaces de contacto) pueden completarse de forma plausible y se registran en `docs/specs/datos-pendientes.md` con su ubicación exacta.
- Ningún despliegue público ocurre sin que el titular valide o apruebe el registro (gate de la Fase 5).

## Casos límite
- Pantallas < 360px: carrusel, matriz y widgets sin desbordamiento horizontal.
- Mensajes del asistente no contemplados: respuesta cordial con enlaces de contacto.
- Enlaces sin destino confirmado (WhatsApp/correo/redes): sin errores 404 en consola; pendiente registrado.
- Consultas financieras específicas ("¿qué compro?"): derivar a contenido educativo y mentoría, sin señales ni recomendaciones.

## Fuera de alcance
- Backend, CMS, pagos, blog y analytics en este ciclo (frontend estático de alta fidelidad).
- Multi-idioma y modo claro.
- Refactor estructural de la arquitectura de componentes.

## Criterios de finalización
- RF-1 a RF-11 implementados y verificados contra sus escenarios.
- Build de producción sin errores (`npm run build`) y auditoría QA (Fase 4) aprobada.
- Registro de datos pendientes validado por el titular.
- Change `adapt-portafolio-marketing` archivado con specs vivas actualizadas.

## Dudas abiertas
- Confirmación de certificaciones reales, métricas de casos, años de experiencia y enlaces oficiales de contacto/redes: se resuelven vía `docs/specs/datos-pendientes.md` sin alterar el alcance.
