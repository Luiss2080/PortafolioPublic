# portfolio-content Specification

## Purpose
Define el contenido y la estructura de las secciones que presentan a Luis Enrique Albis Fernández como estudiante de Marketing, Publicidad y Comercio y mentor en Mercados Financieros, incluida la política de datos sintetizados.

## Requirements

### Requirement: Propuesta de valor dual en la portada
La portada (Hero) SHALL presentar a Luis Enrique Albis Fernández con su enfoque dual — marketing para hacer crecer marcas y visión financiera para decidir con inteligencia — y su lema "Identifico el problema → Diseño la solución → La entrego de forma clara".

#### Scenario: Lectura inmediata del perfil
- **WHEN** el visitante carga la página
- **THEN** en los primeros segundos ve nombre, rol (Marketing, Publicidad y Comercio | Mentor en Mercados Financieros), la propuesta dual y CTAs de asesoría

#### Scenario: Sin jerga de software
- **WHEN** se auditan los textos del Hero
- **THEN** no existen referencias a programación, frameworks, repositorios ni terminales

### Requirement: Áreas de conocimiento en carrusel
El sistema SHALL mostrar un carrusel continuo con las seis áreas de conocimiento del perfil: estrategias de comunicación, edición de contenido para redes, análisis FODA/PESTEL, segmentación de público, soluciones para emprendedores y mercados financieros con mentoría.

#### Scenario: Bucle continuo
- **WHEN** el usuario observa el carrusel
- **THEN** las áreas se desplazan en bucle infinito sin saltos ni cortes visuales

### Requirement: Servicios del perfil
El sistema SHALL presentar cuatro servicios: Estrategia de Comunicación, Gestión de Redes y Contenido, Asesoría Estratégica para Emprendedores (FODA/PESTEL + segmentación) y Mentoría en Mercados Financieros con comunidad de aprendizaje.

#### Scenario: Tarjetas de servicio
- **WHEN** el usuario explora la sección de servicios
- **THEN** ve las cuatro tarjetas con beneficio claro para el emprendedor y micro-animaciones funcionales

#### Scenario: Aviso educativo en mentoría
- **WHEN** el usuario lee la tarjeta de mercados financieros
- **THEN** encuentra el aviso "Contenido educativo; no constituye recomendación de inversión"

### Requirement: Casos de éxito con estructura desafío-solución-resultado
El sistema SHALL exponer fichas de casos que detallan el desafío del emprendedor, la solución aplicada y el resultado obtenido, clasificadas por categoría (Comunicación, Redes y Contenido, Estrategia, Mercados Financieros), con filtrado animado.

#### Scenario: Filtrado de casos
- **WHEN** el usuario selecciona una categoría
- **THEN** las tarjetas se filtran con transiciones fluidas de Framer Motion sin romper el layout

### Requirement: Matriz de competencias
El sistema SHALL exhibir una matriz de cuatro áreas: Estrategia de Marketing y Análisis, Contenido y Redes Sociales, Soluciones para Emprendedores y Mercados Financieros y Mentoría.

#### Scenario: Grid responsivo de competencias
- **WHEN** el usuario visualiza la matriz en móvil, tablet y escritorio
- **THEN** las cuatro áreas se reorganizan sin desbordar horizontalmente

### Requirement: Trayectoria coherente con el perfil
El sistema SHALL presentar una línea de tiempo con la formación académica (Marketing, Publicidad y Comercio), su rol como mentor en mercados financieros y su experiencia práctica con emprendedores, sin roles de desarrollo de software.

#### Scenario: Lectura de la trayectoria
- **WHEN** el usuario recorre la línea de tiempo
- **THEN** los hitos aparecen en orden cronológico y reflejan el perfil de marketing y finanzas

### Requirement: Credenciales verificables
El sistema SHALL listar credenciales y certificaciones del titular; toda credencial sintetizada SHALL quedar registrada en `docs/specs/datos-pendientes.md` con estado "pendiente de validación".

#### Scenario: Credenciales pendientes
- **WHEN** el titular revisa el registro de datos pendientes
- **THEN** encuentra cada credencial sintetizada con su ubicación en el código para confirmarla o reemplazarla

### Requirement: Perfil editorial sin jerga técnica
El sistema SHALL presentar "Sobre mí" como bloque editorial con el manifiesto, los pilares de trabajo y el enfoque dual del titular, sin consolas de código ni fragmentos de programación.

#### Scenario: Revisión editorial
- **WHEN** se audita la sección de perfil
- **THEN** contiene manifiesto, pilares y cotas de valor, y cero elementos de software puro

### Requirement: Política de datos sintetizados
Todo dato completado por el asistente a partir de la base entregada SHALL registrarse en `docs/specs/datos-pendientes.md` (dato, ubicación y estado) y validarse con el titular antes de cualquier despliegue público.

#### Scenario: Gate de validación previa a publicación
- **WHEN** se prepara un despliegue a producción
- **THEN** el registro no contiene pendientes sin validar o el usuario aprueba explícitamente el estado actual
