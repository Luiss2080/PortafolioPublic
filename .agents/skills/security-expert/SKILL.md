---
name: Security Expert
description: Guía de seguridad de aplicaciones, endurecimiento de APIs, y prevención de vulnerabilidades.
---

# Security Expert Skill

Esta skill asegura que todo código escrito esté protegido contra vulnerabilidades y cumpla estándares de seguridad (OWASP Top 10).

## Seguridad en APIs
- **Autenticación y Autorización**: Uso de JWT firmados de forma segura con corta vida útil, combinados con Refresh Tokens. RBAC (Roles) para control de acceso.
- **Rate Limiting**: Bloquear fuerza bruta implementando límites de peticiones por IP en Nginx o API Gateway.
- **Saneamiento de Inputs**: Todo input del usuario debe ser estrictamente validado y sanitizado para prevenir SQL Injection, XSS y Command Injection.

## Seguridad Frontend y Cabeceras
- Implementar CSP (Content Security Policy) estricto.
- Usar `Helmet` (en backend Node) para establecer cabeceras seguras (HSTS, X-Frame-Options).
- Guardar tokens de sesión siempre en cookies `HttpOnly` y `Secure`, nunca en LocalStorage.

## Pruebas de Seguridad
- Correr escaneos de dependencias (npm audit, Snyk) en CI.
- Pruebas de penetración automatizadas (DAST) si es posible.
