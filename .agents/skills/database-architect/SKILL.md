---
name: Database Architect
description: Guía de modelado y optimización de bases de datos relacionales y en memoria.
---

# Database Architect Skill

## Modelado
- **Normalización vs Desnormalización**: Normalizar hasta 3NF para datos transaccionales (pedidos, stock). Desnormalizar datos para lecturas rápidas si es estrictamente necesario.
- **Claves Foráneas**: Siempre definir restricciones de FK para mantener integridad referencial. ON DELETE RESTRICT por defecto.
- **Soft Deletes**: Nunca hacer `DELETE` físico en registros críticos (pedidos, usuarios). Usar `deleted_at`.

## Optimización
- **Índices**: Todo campo usado frecuentemente en `WHERE`, `JOIN` u `ORDER BY` debe tener un índice.
- **Tipos de Datos**: Usar el tipo de dato más pequeño y estricto posible (ej. VARCHAR(50) en lugar de TEXT, SMALLINT en lugar de INT si aplica).
- **Consultas N+1**: Usar siempre Eager Loading o DataLoaders en GraphQL para evitar N+1 en las consultas de relaciones.

## Migraciones
- Todo cambio estructural DEBE realizarse mediante archivos de migración versionados.
- Nunca modificar la estructura directamente en la consola SQL.
