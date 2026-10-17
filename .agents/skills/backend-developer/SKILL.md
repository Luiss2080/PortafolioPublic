---
name: Backend Developer (DDD/Clean Architecture)
description: Guía para implementar microservicios o monolitos modulares robustos.
---

# Backend Developer Skill

Esta skill define cómo programar APIs sólidas y escalables.

## Arquitectura (Clean Architecture / DDD)
- **Domain Layer**: Entidades puras y reglas de negocio. Sin dependencias externas.
- **Use Cases Layer**: Lógica de aplicación. Orquesta entidades y repositorios.
- **Interface/Adapter Layer**: Controladores HTTP, Graphql Resolvers.
- **Infrastructure Layer**: Base de datos, servicios de terceros, TypeORM/Prisma.

## Patrones Obligatorios
- **Inyección de Dependencias**: Toda clase debe recibir sus dependencias por constructor.
- **DTOs (Data Transfer Objects)**: Validar TODAS las entradas (con Zod, Class-Validator, Joi) antes de que lleguen a los casos de uso.
- **Manejo de Errores Centralizado**: No retornar códigos HTTP en la capa de negocio. Lanzar excepciones de dominio y atraparlas en un filtro global HTTP.

## Escalabilidad
- **Paginación**: Nunca devolver un array infinito. Siempre implementar paginación (Offset o Cursor based).
- **Caché**: Cachear resultados inmutables (ej. Catálogo de productos) en Redis.
- **Idempotencia**: APIs de creación (ej. pagos, pedidos) deben ser idempotentes.
