# Sonrisas Gallardo — Landing page

Sitio de una página para el consultorio dental. HTML/CSS/JS puro (sin frameworks), listo para subir a **Vercel** o **GitHub Pages** igual que `prm-studio-web`.

## Antes de publicar — pendientes reales

Busca la palabra `PLACEHOLDER` en los archivos y reemplaza con los datos reales:

| Dato | Dónde está |
|---|---|
| Nombre completo de la doctora + cédula | `index.html`, sección "Sobre la doctora" |
| Bio de la doctora (formación, años de experiencia) | `index.html`, mismo bloque |
| Foto de la doctora | `index.html` → reemplaza el `<span class="doctora-photo-placeholder">` por un `<img>` real (agrega la foto en una carpeta `assets/`) |
| Dirección completa | `index.html`, sección "Ubicación y contacto" |
| Teléfono / WhatsApp | `index.html` (texto visible) **y** `script.js` (línea `whatsappNumber` y `phoneNumber`) |
| Horario | `index.html`, hero y sección de contacto |
| Mapa de Google | `index.html` → reemplaza el `src` del `<iframe>` con el embed real (Google Maps → Compartir → Insertar un mapa → copiar el `src`) |
| Nombre del consultorio | Actualmente "Sonrisas Gallardo". Si prefieren "Consultorio Gallardo", solo cambia el texto en `<title>`, `.brand-name` (nav y footer) y el `<h1>` del hero. |

Si más adelante tienen reseñas de Google o redes sociales, aviso y agrego esa sección (testimonios) y los íconos de redes en el footer — el diseño ya está pensado para incorporarlos sin rehacer nada.

## Estructura

```
sonrisas-gallardo/
├── index.html      → todo el contenido y estructura
├── styles.css       → estilos (paleta azul/blanco en variables CSS al inicio del archivo)
├── script.js        → menú móvil + enlaces de WhatsApp/teléfono
└── README.md
```

## Ver en local

No necesita instalación. Solo abre `index.html` en el navegador, o si quieres un servidor local:

```bash
npx serve .
```

## Desplegar en Vercel

1. Sube esta carpeta a un repo de GitHub (igual que hiciste con `prm-studio-web`).
2. En Vercel → **Add New Project** → importa el repo.
3. Framework Preset: **Other** (es HTML estático, no necesita build command).
4. Deploy.

## Desplegar en GitHub Pages (alternativa)

1. Sube la carpeta al repo.
2. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. Guarda — GitHub te da la URL en un par de minutos.

## Notas de diseño

- **Logo**: monograma original (una "G" abierta en arco, sin muela genérica) — es un SVG inline en `index.html`, así que se ve nítido a cualquier tamaño y no depende de un archivo de imagen.
- **Colores**: definidos como variables CSS en la parte superior de `styles.css` (`--navy`, `--blue`, `--sky`, `--pale`, `--ivory`). Cambiar la paleta completa es editar esas 5 líneas.
- **Tipografía**: Fraunces (serif, para títulos) + Inter (para texto) vía Google Fonts — buscando un tono cálido/profesional, distinto al estilo minimalista/corporativo de PRM Studio.
