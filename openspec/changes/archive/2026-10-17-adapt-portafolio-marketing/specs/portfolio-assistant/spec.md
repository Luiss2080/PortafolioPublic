# Spec Delta

## Purpose

Define el asistente conversacional y los canales de contacto del portafolio, con respuestas alineadas al perfil de marketing y finanzas y salvaguardas de contenido educativo.

## ADDED Requirements

### Requirement: Asistente responde sobre el perfil de marketing y finanzas
El asistente SHALL responder consultas sobre servicios de marketing, mentoría en mercados financieros, trayectoria, competencias y contacto, con tono cercano-profesional en español y sin jerga técnica de software.

#### Scenario: Consulta de servicios
- **WHEN** el visitante pregunta por servicios o cómo trabajar con Luis Enrique
- **THEN** el asistente describe las áreas de marketing y mentoría y ofrece agendar una asesoría

#### Scenario: Consulta de mercados financieros
- **WHEN** el visitante pregunta por inversiones o activos
- **THEN** el asistente responde con framing educativo, sin recomendaciones personalizadas ni promesas de rendimiento

### Requirement: Respuesta por defecto y derivación a contacto
SI el asistente no comprende la consulta, ENTONCES SHALL responder cordialmente e invitar a contactar por WhatsApp o correo con enlaces directos.

#### Scenario: Mensaje no contemplado
- **WHEN** el visitante envía un mensaje fuera del árbol de respuestas
- **THEN** recibe una respuesta cordial con enlaces a WhatsApp y correo

### Requirement: Canales de contacto directo
El sistema SHALL exponer accesos de contacto a WhatsApp y correo en navbar, hero, footer y widget flotante; los destinos sin confirmar SHALL permanecer registrados en `docs/specs/datos-pendientes.md` y no provocar errores de navegación.

#### Scenario: Contacto visible
- **WHEN** el visitante busca cómo contactar
- **THEN** encuentra al menos un enlace a WhatsApp y uno a correo en la página

#### Scenario: Destino pendiente
- **WHEN** un enlace de contacto aún no tiene destino confirmado
- **THEN** el sitio no dispara errores 404 en consola y el pendiente aparece en el registro de datos
