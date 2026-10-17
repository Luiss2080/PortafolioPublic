# portfolio-identity Specification

## Purpose
Define la identidad visual del portafolio de Luis Enrique Abri Fernández: base obsidiana premium con acentos esmeralda (marketing/crecimiento) y dorado champán (finanzas), coherente en fondos, superficies y micro-animaciones.

## Requirements

### Requirement: Paleta de identidad marketing-finanzas
El sistema SHALL renderizar toda la interfaz con base obsidiana profunda (`#0A0D14` / `#0F141C`) y acentos primarios en verde esmeralda (crecimiento/marketing) y secundarios en dorado champán (finanzas), sin residuos del azul zafiro de la versión anterior.

#### Scenario: Render de la nueva paleta
- **WHEN** el visitante carga cualquier sección del sitio
- **THEN** fondos, botones principales, badges y acentos usan exclusivamente la paleta esmeralda/dorada sobre obsidiana

#### Scenario: Sin residuos de paleta anterior
- **WHEN** se audita el CSS compilado y las clases de los componentes
- **THEN** no existen clases activas con la paleta zafiro/cobalto anterior (`sapphire-blue`, `cyan-glow`)

### Requirement: Contraste accesible
El sistema SHALL garantizar contraste WCAG AA (≥ 4.5:1 en texto normal) en todos los textos sobre fondos y superficies del tema, incluidos estados hover y botones.

#### Scenario: Auditoría de contraste
- **WHEN** se audita el sitio con Chrome DevTools en las secciones principales
- **THEN** todos los textos de contenido cumplen la relación de contraste AA

### Requirement: Tipografía y superficies premium
El sistema SHALL conservar Inter/Syne como tipografías, superficies glassmorphism sutiles y micro-animaciones de Framer Motion, sin introducir estilos ajenos al minimalismo premium.

#### Scenario: Coherencia tipográfica
- **WHEN** se comparan títulos y cuerpo de las secciones
- **THEN** usan la escala definida (Syne para títulos, Inter para cuerpo) sin fuentes nuevas

### Requirement: Fondo animado temático v2
El fondo de partículas SHALL usar tonos esmeralda y dorados de baja opacidad, manteniéndose por debajo del contenido sin afectar la legibilidad ni el rendimiento a 60 FPS.

#### Scenario: Legibilidad sobre partículas
- **WHEN** se visualiza el Hero y las secciones con fondo animado en móvil y escritorio
- **THEN** el contenido permanece legible y las partículas usan la paleta v2 sin patrones de terminal, circuitos ni jerga de software
