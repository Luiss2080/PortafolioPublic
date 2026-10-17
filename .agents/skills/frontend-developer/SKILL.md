---
name: Frontend Developer (React/Next.js)
description: Guía de buenas prácticas y arquitectura para desarrollo frontend en React/Next.js/Nuxt.
---

# Frontend Developer Skill

Esta skill define la arquitectura escalable y las mejores prácticas para el desarrollo de la interfaz de usuario.

## Arquitectura de Componentes
- **Patrón de Presentación vs Contenedor**: Separar la lógica de estado de la presentación pura.
- **Server Components**: Aprovechar React Server Components (Next.js App Router) para reducir el JS enviado al cliente.
- **Atomics Design**: Organizar componentes en Átomos, Moléculas y Organismos si el proyecto escala mucho.

## Gestión de Estado
- Evitar Context API para datos de alta mutación.
- Usar Zustand o Redux Toolkit para estado local complejo.
- Usar React Query (o SWR) EXCLUSIVAMENTE para sincronización con el servidor (data fetching, caching, revalidation).

## Rendimiento y Accesibilidad
- **Lazy Loading**: Usar carga diferida (dynamic imports) para modales y componentes pesados.
- **a11y**: Todos los elementos interactivos deben tener `aria-labels` y soporte para navegación por teclado.
- **Imágenes**: Usar el componente `<Image />` optimizado con `sizes` y `priority` para el LCP.

## Validaciones
Nunca hacer un Pull Request sin antes correr:
```bash
npm run lint && npm run test
```
