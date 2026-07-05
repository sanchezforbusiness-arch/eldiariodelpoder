# Rediseño integral — Diario del Poder

Sustituimos el tema oscuro por una identidad editorial clara tipo prensa, con el podcast como protagonista. Sin tocar SEO ni enlaces existentes.

## 1. Nuevo sistema visual (`src/styles.css`)

Tokens (modo claro forzado en toda la web):
- `--background: #FAF7F2` (papel cálido)
- `--foreground: #141414` (tinta)
- `--primary: #6E1423` (burdeos, único acento) + `--primary-foreground: #FAF7F2`
- `--card: #FFFFFF`, `--border: #E8E2D6` (borde sutil papel)
- `--muted: #F2ECE0`, `--muted-foreground: #5A5651`
- Elimino `--gold`, glows dorados, grain oscuro, ken-burns pesado.

Tipografía:
- Serif display para titulares: **Fraunces** (peso 300/400, ya editorial-prensa) vía `<link>` en `__root.tsx`.
- Sans cuerpo: **Inter** (ya cargada) para UI y párrafos.
- Escala grande y jerárquica (h1 ~72–96px desktop, h2 ~48px), tracking apretado.

Animaciones:
- Solo `fade-up` sutil al entrar en viewport y `hover` discreto (elevación 1–2px, cambio de color).
- Elimino `shimmer-gold`, `float-slow`, `bounce-down`, `ken-burns`, marquee múltiple. Un único marquee lento en invitados.

Botones (redefinidos):
- `.btn-primary`: burdeos sólido, texto papel, radius 2px, tracking editorial, sin sombra pesada.
- `.btn-outline`: borde tinta 1px, texto tinta, hover invierte a burdeos.
- Aplicar en toda la web.

## 2. Home — nuevo orden (`src/routes/index.tsx`)

```text
Navbar (claro sticky, CTA "Escuchar" burdeos siempre)
Hero (claro, 2 CTAs + badges plataformas)
CredibilityStrip (nuevo, "En medios")
FeaturedEpisode (nuevo, Jordi Juan — sección estrella)
RecentEpisodes (4 cards horizontales limpias)
GuestsCarousel (un único marquee lento, tema claro)
Backstage (una fila / grid 4x2, sin duplicación)
Team + Advisory (nuevo, "Quiénes somos")
ClubTeaser (compacto)
Newsletter (fondo burdeos, cierre editorial)
Footer (tema claro)
```

## 3. Cambios por componente

- **Navbar**: fondo papel + blur, sticky. Links: Episodios · Invitados · Quiénes somos · Club · Patrocinadores. Botón "Escuchar" burdeos. Manifiesto y Prensa se mueven al Footer.
- **Hero**: mismo `hero-portada-nueva.jpg` con overlay claro (tono papel), sin vídeo YouTube de fondo (elimina peso). Titular "La voz del legado.", subtítulo nuevo. CTAs: "Escuchar en Spotify" (burdeos) y "Ver en YouTube" (outline). Badges de plataformas debajo.
- **CredibilityStrip** (nuevo): una línea `text-xs uppercase` — "En medios" + La Vanguardia (destacada como media partner) · Antena 3 · La Sexta · El Mundo · Forbes España · El Español. Solo texto en gris, sobrio.
- **FeaturedEpisode** (nuevo): grid 2 cols desktop. Izquierda: imagen Jordi Juan. Derecha: eyebrow "Último episodio", h2 "La teoría de los cajones para afrontar la crisis", nombre "Jordi Juan · Director de La Vanguardia", botón play burdeos → link a YouTube/La Vanguardia (mismo URL que ya usa Episodes).
- **RecentEpisodes** (refactor de `Episodes.tsx`): 4 cards horizontales — nº ("02", "03"…), título, invitado, link. CTA final "Ver todos los episodios" → `/episodios`.
- **GuestsCarousel**: fondo blanco, cards con borde `--border`, texto oscuro. Sin grayscale/hover cromático. Subtítulo corregido: "Presidentes, CEOs y referentes que han construido lo que otros estudian." Un único marquee lento.
- **Backstage**: 8 imágenes (Aznar FAES, firma libro, Lasso, Andrés Rodríguez, hosts palco, Jordi Urbea, Reina Letizia (extra2), on set (setMonitors)). Móvil: `overflow-x-auto snap-x snap-mandatory` una fila. Desktop: grid 4x2. Sin duplicación de DOM. `loading="lazy"` en todas.
- **Team+Advisory** (nuevo `TeamHome.tsx`): dos subbloques. Equipo (Alejandro, Víctor, Carla-placeholder). Advisory (Federica con foto existente, Iñigo-placeholder). Cards: foto cuadrada, nombre serif, cargo pequeño. Placeholder = iniciales en cuadrado burdeos/papel.
- **ClubTeaser**: compactar padding/altura, mantener mensaje.
- **Newsletter**: fondo burdeos, texto papel, h2 "Una conversación. Un email. Sin ruido.", input + botón papel.
- **Footer**: fondo papel con borde superior, añadir links Manifiesto y Prensa.

## 4. Copy

- Sustituir "Donde la credibilidad tiene nombre" → "Dos fundadores. Un compromiso: conversaciones con criterio, no ruido."
- Revisar frases largas o grandilocuentes en Hero, About, Club, Newsletter → cortas y directas.

## 5. Aplicación en otras páginas

`/episodios`, `/invitados`, `/club`, `/manifiesto`, `/prensa`, `/patrocinadores`: heredan automáticamente los nuevos tokens (fondo, color, botones). Reviso cada uno para reemplazar clases hardcoded (`text-gold`, `bg-background` oscuro, `grayscale`) por tokens semánticos y ajustar contraste.

## No tocar

- Meta tags, JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`.
- URLs de Spotify, YouTube, La Vanguardia.
- Rutas existentes.

## Notas técnicas

- Fraunces vía `<link>` (no `@import` en CSS — Tailwind v4 Lightning CSS no lo resuelve).
- Elimino iframe YouTube del Hero → gran mejora LCP/CLS.
- Backstage sin duplicación → ~50% menos DOM en esa sección.
- Todas las imágenes below-fold con `loading="lazy"` + `decoding="async"`.
- Advisory/Team placeholder de Carla e Iñigo: div con iniciales, sin llamar a APIs.
