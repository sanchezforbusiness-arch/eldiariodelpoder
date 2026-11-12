# Roadmap — Noticias + DDP Premium

## Hecho
- [x] Base de datos: noticias, noticias_premium, suscripciones, premium_solicitudes, correcciones_solicitudes (RLS, límites)
- [x] Tipografía Archivo autoalojada (public/fonts)
- [x] 11 imágenes de sección (public/noticias/secciones)
- [x] Datos: src/data/noticias.ts, premium.ts, correcciones.ts

## Pendiente
- [ ] Tokens news-* y @font-face Archivo en styles.css
- [ ] Funciones de servidor de lectura, paywall con sesión, lista de acceso, correcciones, punto Stripe (TODO)
- [ ] Rutas /noticias (portada, sección, noticia con 301, edición, hemeroteca, autor, tema), /premium, /cuenta
- [ ] Páginas de confianza: /politica-editorial, /correcciones, /aviso-legal, /contacto, /redaccion
- [ ] RSS, sitemap-news, sitemap de noticias, índice de sitemaps, robots.txt
- [ ] Navbar, pie, bloque «Hoy en Noticias», Organization JSON-LD, llms.txt
- [ ] Noticia de prueba no publicada, tests, verificación en navegador
