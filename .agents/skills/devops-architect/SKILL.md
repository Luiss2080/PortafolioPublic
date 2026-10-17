---
name: DevOps & Cloud Architect
description: Guía de infraestructura, CI/CD, contenedores, orquestación y despliegue continuo.
---

# DevOps & Cloud Architect Skill

Esta skill define cómo provisionar, desplegar y mantener la infraestructura del proyecto para asegurar alta disponibilidad y escalabilidad.

## Infraestructura como Código (IaC)
- Utilizar Terraform o Pulumi para provisionar recursos en la nube.
- Toda la infraestructura debe ser reproducible y versionada.

## Contenedores y Orquestación
- **Docker**: Todos los servicios (Frontend, Backend, BDs en local) deben tener su propio `Dockerfile` y un `docker-compose.yml` para el entorno de desarrollo.
- **Orquestación**: Para entornos productivos con microservicios, utilizar Kubernetes (K8s) o servicios manejados (como AWS ECS / Vercel para frontend).

## CI/CD Pipeline
- **Continuous Integration**: Correr tests unitarios, E2E y análisis de código estático en cada PR.
- **Continuous Deployment**: Despliegues automáticos a *Staging* tras el merge a `main`. Aprobación manual para *Producción*.

## Monitoreo y Observabilidad
- Implementar métricas y logging centralizado.
- Configurar alertas críticas para downtime o degradación de servicio.
