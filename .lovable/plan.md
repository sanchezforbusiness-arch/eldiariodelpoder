# Estética propia para Newsletter

## Objetivo
Aplicar únicamente a `/newsletter` y sus ediciones un lenguaje visual inspirado en Clay, sin alterar el resto del sitio ni el HTML maquetado que llega desde el motor.

## Cambios
- Crear un ámbito visual exclusivo de newsletter con los neutros oat, tinta, filete, acentos de fruta, radios y sombra indicados.
- Rediseñar la portada con una cabecera clara, llamada de alta, tarjetas de secciones en rejilla y archivo de ediciones en tarjetas visuales de dos columnas.
- Ajustar la cabecera de cada edición con migas, píldora de metadatos, titular equilibrado y entradilla secundaria.
- Mantener intacta la compatibilidad: `cuerpo_html` se insertará sin estilos editoriales añadidos y las ediciones antiguas seguirán usando sus secciones actuales.
- Comprobar escritorio y móvil, además del estado de compilación.

## Detalles técnicos
- Los nuevos colores y efectos serán variables semánticas bajo una clase exclusiva de newsletter en `src/styles.css`.
- Solo se modificarán `src/styles.css`, `src/routes/newsletter.index.tsx`, `src/routes/newsletter.$slug.tsx` y el seguimiento de tareas.
- No se cambiarán datos, rutas, navegación, servicios ni contenido visible fuera de newsletter.
