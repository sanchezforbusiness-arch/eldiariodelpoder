# Marcas: estado actual (solo lectura, sin cambios)

1. BRANDS vive en `src/components/ddp/BrandsMarquee.tsx`. Tipo: `{ name: string; domain?: string; logo?: string }`. No hay campo de tipo/rol ni url de enlace.
2. Lo usan la cinta de portada (`BrandsMarquee`, vía `HomeLanding`), `Sponsors.tsx` (`const sponsors = BRANDS`) y `/patrocinadores` (listado + FAQ con los nombres). Todos pintan con `BrandMark`. Ninguno distingue patrocinador de colaborador: es una sola lista.
3. Logos: con `logo` se usa un asset propio (SVG importado como URL en `src/assets`, p. ej. Palantir, o `.png.asset.json` con `.url`, p. ej. APD y PROEDUCA); sin `logo`, se usa el favicon de Google por `domain`; si no hay ninguno, solo el nombre. Sin filtros de color: el logo se muestra tal cual (alto 24 px, 28-32 px en patrocinadores, opacidad 70 % en la cinta). El SVG de Palantir no lleva `fill`, así que sale negro sobre fondo oscuro.
4. Entrada de Palantir, literal:
   `{ name: "Palantir", domain: "palantir.com", logo: palantirLogo },`

Si quieres cambiar algo (rol, enlaces, color de logos), dime qué y preparo el plan.
