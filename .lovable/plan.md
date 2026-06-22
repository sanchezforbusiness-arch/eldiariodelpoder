# Rediseño Premium — Diario del Poder

Aplico nueva paleta + tipografía serif premium en toda la web, rehago el home sección por sección, refino las páginas existentes y creo una nueva página /patrocinadores. Sin stats inventadas.

## 1. Sistema visual (base para todo)

**Tokens en `src/styles.css`** (todo lo demás los hereda):
- `--background` → #0A0A0B (casi negro)
- `--background-alt` → #1A1A1C (secciones enfatizadas)
- `--foreground` → #F5F3F0 (blanco cálido)
- `--gold` / `--primary` → #C4A77D (oro champagne, reemplaza el dorado actual)
- `--gold-bright` → #D9BE92 (hover)
- `--ember` / `--accent` → #FF6B35 (acento puntual: Club, separadores clave)
- `--muted` → #2D2D2D

**Tipografía** (vía `@fontsource`, instalado con bun):
- Headlines: **Playfair Display** (serif premium, light/regular)
- Body/UI: **Inter** (sans, ya en uso o lo añado)
- Tracking generoso, line-height 1.6–1.8 en body, 0.9 en hero

**Detalles globales**:
- Líneas finas oro como separadores
- Barra vertical naranja (3px) solo en sección Club
- Grain sutil mantenido
- Animaciones: fade-up en scroll, hover lift en cards, sin nada distractor

## 2. Home — rehago sección por sección

Orden actual: Hero → Guests → Episodes → Backstage → AboutTeaser → ClubTeaser → Newsletter → Footer.

- **Hero**: copy a *"Donde quienes deciden / se sientan a contarlo."* + subhead. CTA primario "Escuchar último episodio" + secundario "Ver episodios". Quito el badge inferior con stats inventadas; lo cambio por badge sobrio del último invitado.
- **Guests carousel**: título *"Voces que construyen"*. Mantengo el formato pero sin duplicar invitados en la misma vuelta.
- **Episodes**: título *"Conversaciones recientes"*. Hover overlay con play icon en oro.
- **Backstage**: título *"Fuera de guion"* / subtítulo *"Madrid · donde se graban las historias"*. Sigue como masonry/marquee actual con tinte sepia.
- **AboutTeaser**: *"Donde la credibilidad tiene nombre"* + link al manifiesto.
- **ClubTeaser**: barra vertical naranja izquierda, copy *"Una comunidad real. No una red de contactos."* + CTA *Solicitar acceso*. Sin número de miembros.
- **Newsletter**: *"Ideas que importan. Una conversación. Un email. Sin ruido."* Sin "8,500+ líderes".
- **Footer**: 3 columnas (brand / nav / social). Mantengo links existentes y añado *Patrocinadores*.

**Omito** la sección "Social proof con números" del prompt porque pediste no usar stats.

## 3. Páginas existentes — refresh visual y de copy

- `/episodios`: hero compacto *"Todos los episodios"*, grid con hover oro, copy revisado.
- `/invitados`: hero *"Líderes que cambian historias"*, cards más completos.
- `/club`: landing de conversión (beneficios, proceso de membresía 3 pasos, FAQ, CTA fuerte). Sin número de miembros.
- `/manifiesto`: ya es long-form editorial; ajusto tipografía serif y pull-quotes en oro.
- `/prensa`: ajuste visual a la nueva paleta.

## 4. Nueva página: `/patrocinadores`

Archivo `src/routes/patrocinadores.tsx` con head() propio (title + description + og:* + canonical). Estructura:

1. Hero: *"Sé parte de una conversación que importa"*
2. *"Por qué DDP"* — 3 pilares de valor (audiencia de alto nivel, asociación con liderazgo, editorial rigurosa). Sin métricas inventadas.
3. **Opciones de patrocinio**: 3 tarjetas (Plata / Oro / Platino) con beneficios listados, sin precios concretos hasta que me los pases — CTA por tarjeta a contacto.
4. Sección de contacto: bloque grande con `partners@eldiariodelpoder.com` y CTA *"Hablar con nuestro equipo"* (mailto).
5. Footer común.

Añado link a *Patrocinadores* en Navbar y Footer.

## Detalles técnicos

- `@fontsource/playfair-display` y `@fontsource/inter` instalados con `bun add`, importados en `src/main.tsx`, declarados en `@theme` de `src/styles.css`.
- Todo con tokens semánticos — cero `text-white`, `bg-black`, hex hardcoded en JSX.
- Animaciones con clases CSS existentes (`fade-up`, `ken-burns`, `ring-pulse`) + Tailwind transitions.
- Responsive mobile-first; respeto los breakpoints ya afinados de la pasada anterior.
- SEO: cada página con su `head()` (title, description, og:title, og:description, canonical). Sin og:image inventada.
- Sin tocar lógica de Beehiiv/newsletter ni backend.

## Lo que NO hago (y por qué)

- **Stats numéricas** (50M, 524 miembros, 8500+) → me pediste omitirlas.
- **Video de fondo en hero** → no tengo archivo de vídeo; mantengo imagen actual con ken-burns.
- **Precios concretos de patrocinio** → no me los pasaste; dejo CTAs a contacto.
- **Lightbox de backstage, contador animado, modal de bios de fundadores** → fuera de scope inicial; los puedo añadir después si los quieres.
- **Página `/prensa` rehecha desde cero** → solo refresh visual, no rediseño completo.

¿Te lanzo con esto?
