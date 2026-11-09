# Consejo asesor: fichas y descubrimiento

- Centralizar los cuatro advisors, fotos, LinkedIn, biografías y FAQ en `src/data/advisors.ts`, conservando el orden Federica, David, Iñigo, Jordi.
- Crear las fichas de Iñigo, Jordi y David en `/advisors/<slug>` con la presentación de invitados, enlaces internos, preguntas visibles y metadatos propios.
- Conectar nombres y fotos de `/nosotros`; corregir el cargo de Jordi y añadir el consejo al marcado de Nosotros y a la organización global.
- Añadir a la ficha existente de Federica su función de advisor y la relación con el consejo, sin crear otra página.
- Añadir la sección del consejo a llms.txt y las tres fichas al sitemap con fecha de contenido 2026-11-09 y prioridad 0.7. No modificar el pie ni publicar.
- Verificar las cinco páginas en navegador, enlaces, fotos, marcado y todas las pruebas; informar archivos y commit disponible.

## Detalles técnicos y precisiones

- Las nuevas entidades usan `#persona`. Federica conserva su identificador actual `https://eldiariodelpoder.com/invitados/federica-fornaciari#person`, como exige la conservación de su entidad; no se alteran los identificadores de otros invitados. La comprobación de `#person` distinguirá esas entidades existentes de errores nuevos.
- Los títulos nuevos seguirán la fórmula literal solicitada aunque superen 60 caracteres. No se inventarán perfiles ni cargos.
- Se reutilizarán las fotos actuales; los metadatos de imagen apuntarán a la misma foto con una dirección pública absoluta.
- Se revisará el origen de los lastmod existentes sin cambiar fechas cuyo origen no pueda determinarse; nunca se introducirán fechas automáticas de generación.