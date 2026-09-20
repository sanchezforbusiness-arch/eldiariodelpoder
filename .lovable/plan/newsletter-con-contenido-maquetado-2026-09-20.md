# Newsletter con contenido maquetado

## Cambios
- Ampliar el contenido de newsletter con el campo opcional `cuerpo_html`, conservando todos los campos antiguos como compatibilidad.
- En cada edición, mantener la cabecera actual y añadir la entradilla bajo el titular.
- Cuando exista `cuerpo_html`, mostrar ese HTML sin estilos editoriales añadidos y ocultar únicamente las secciones antiguas; cuando no exista, mantener el renderizado actual completo.
- En el archivo de ediciones, añadir una miniatura 16:9 a la izquierda cuando haya imagen social, apilada sobre el texto en móvil.

## Comprobación
- Verificar que la edición antigua sigue mostrándose igual salvo por la nueva entradilla.
- Comprobar el archivo en móvil y escritorio y confirmar que la compilación queda correcta.

## Detalles técnicos
- El HTML se insertará con `dangerouslySetInnerHTML` dentro de la columna existente de 68ch, sin `prose` ni colores forzados.
- No se cambiarán datos, navegación ni ninguna otra página.
