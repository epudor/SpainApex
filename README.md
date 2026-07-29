# apexdata.es — Apex Data Cloud España

Sitio web de **Apex Data Cloud España**, filial española de **Apex Data Cloud LLC**
(Orlando, Florida). Sitio estático construido con Jekyll y publicado en GitHub Pages.

Está modelado sobre [apexdata.cloud](https://apexdata.cloud) y reutiliza su sistema
de diseño («Las preguntas sin respuesta»), con los textos reescritos en castellano
y adaptados al mercado español y europeo.

---

## Estructura

```
_config.yml                  Configuración del sitio, marca, contacto, SEO
Gemfile                      Dependencias (gema github-pages) para vista previa local
index.md                     Portada — una sola página con anclas internas
aviso-legal.md               Aviso legal (LSSI-CE)
privacidad.md                Política de privacidad y cookies (RGPD / LOPDGDD)
404.html                     Página de error personalizada
robots.txt                   Rastreo abierto, incluidos los agentes de IA
CNAME                        Dominio personalizado: www.apexdata.es
_layouts/
  default.html               Esqueleto HTML: meta, Open Graph, hreflang, JSON-LD
  home.html                  Portada (sin relleno superior; el héroe ya lo aporta)
  page.html                  Páginas interiores (cabecera + cuerpo con estilos)
_includes/
  nav.html                   Navegación y menú móvil
  footer.html                Pie de página, incluida la atribución a la matriz
assets/
  css/apex.css               Tokens de diseño, base, navegación, pie, páginas
  js/apex.js                 Progreso de scroll, menú móvil, aparición al scroll
  img/logo-128.png           Logotipo optimizado (navegación, pie, favicon)
  img/logo-512.png           Logotipo para tarjetas sociales y datos estructurados
apex_logo.PNG                Activo de origen 1024 px. NO se publica (ver `exclude`)
_reference/                  Código original de la portada de apexdata.cloud
.github/workflows/jekyll.yml Construcción y despliegue en GitHub Pages
```

Los estilos comunes viven en `assets/css/apex.css`. Los estilos exclusivos de la
portada están en el bloque `<style>` de `index.md`, para que las páginas
interiores no carguen CSS que no usan.

---

## Puesta en marcha en GitHub Pages

### 1. Crear el repositorio y subir el código

```bash
git init
git add .
git commit -m "Sitio inicial de apexdata.es"
git branch -M main
git remote add origin git@github.com:<usuario>/<repositorio>.git
git push -u origin main
```

### 2. Activar GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source**, elige
**GitHub Actions**. El flujo de trabajo `.github/workflows/jekyll.yml` se ejecuta
en cada `push` a `main` y publica el resultado.

No selecciones «Deploy from a branch»: ese modo no ejecuta el flujo de trabajo y
puede ignorar los complementos declarados en el `Gemfile`.

### 3. Configurar el dominio personalizado

En **Settings → Pages → Custom domain**, introduce `www.apexdata.es` y guarda.
El archivo `CNAME` ya está en el repositorio, así que el valor debería aparecer
solo. Marca **Enforce HTTPS** en cuanto GitHub emita el certificado (suele
tardar entre unos minutos y una hora).

### 4. Configurar el DNS en tu registrador

Registro para el subdominio `www` (el dominio canónico del sitio):

| Tipo  | Nombre | Valor                  |
|-------|--------|------------------------|
| CNAME | `www`  | `<usuario>.github.io.` |

Registros para el dominio raíz `apexdata.es`, de modo que redirija a `www`:

| Tipo | Nombre | Valor             |
|------|--------|-------------------|
| A    | `@`    | `185.199.108.153` |
| A    | `@`    | `185.199.109.153` |
| A    | `@`    | `185.199.110.153` |
| A    | `@`    | `185.199.111.153` |

Y, opcionalmente, los equivalentes IPv6:

| Tipo | Nombre | Valor                  |
|------|--------|------------------------|
| AAAA | `@`    | `2606:50c0:8000::153`  |
| AAAA | `@`    | `2606:50c0:8001::153`  |
| AAAA | `@`    | `2606:50c0:8002::153`  |
| AAAA | `@`    | `2606:50c0:8003::153`  |

Comprobación una vez propagado:

```bash
dig +short www.apexdata.es
dig +short apexdata.es
curl -sI https://www.apexdata.es | head -1
```

---

## Vista previa local

Requiere Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve --livereload
# http://127.0.0.1:4000
```

Si no tienes Ruby instalado:

```bash
sudo apt-get install -y ruby-full build-essential zlib1g-dev
gem install bundler
```

---

## Antes de lanzar

Estos puntos están deliberadamente sin cerrar porque requieren datos reales.
Busca `PENDIENTE` en el sitio construido para localizarlos.

1. **Datos registrales.** `aviso-legal.md` y `privacidad.md` contienen marcadores
   `<span class="todo">` para la razón social, el NIF, el domicilio y los datos
   del Registro Mercantil. La LSSI-CE exige que estos datos sean accesibles.
2. **Testimonios.** Los tres testimonios de `index.md` provienen de la web de la
   matriz y corresponden a clientes en EE. UU. (Sarah Chen, Marcus Rivera,
   Alexandra Brooks). Hay un comentario HTML que lo advierte. Sustitúyelos por
   referencias españolas o retira la sección.
3. **Cifras.** `4,2×`, `50+`, `68 %` y `98 %` son cifras agregadas del grupo.
   La nota bajo el bloque ya lo indica; ajústalas si la filial española debe
   presentar métricas propias.
4. **Correo.** El sitio usa `ezequiel@apexdata.cloud`, el buzón de la matriz.
   Para separar los contactos españoles, crea `hola@apexdata.es` y cambia
   `email` en `_config.yml`: se propaga a la navegación, el contacto, el pie,
   los datos estructurados y las páginas legales.
5. **LinkedIn.** Apunta al perfil de la matriz. Si abres un perfil español,
   actualiza `linkedin` en `_config.yml`.

---

## Analítica y cookies

La analítica está **desactivada**. El sitio no instala cookies, así que no
necesita banner de consentimiento y la política de privacidad lo declara así.

Para activar Google Analytics 4, rellena `ga4_id` en `_config.yml`. Ten en
cuenta que, en ese momento:

- necesitarás un banner de consentimiento previo, granular y revocable, conforme
  a la Guía sobre el uso de cookies de la AEPD;
- deberás actualizar la sección «Cookies» de `privacidad.md`, que actualmente
  afirma que no se instala ninguna.

Sin `ga4_id`, `gtag` se define como una función vacía para que los manejadores
`onclick` de los botones no fallen.

---

## SEO y datos estructurados

- `jekyll-seo-tag` y `jekyll-sitemap` generan las etiquetas y `sitemap.xml`.
- `_layouts/default.html` emite un `@graph` de JSON-LD con `ProfessionalService`
  (incluido `parentOrganization`: Apex Data Cloud LLC), `WebSite`, `WebPage`,
  `OfferCatalog` con las nueve disciplinas y `FAQPage` con las ocho preguntas.
  El catálogo y las FAQ se generan desde las listas `services` y `faqs` del
  front matter de `index.md`: edita esas listas y el marcado se actualiza solo.
- La portada declara `hreflang` `es-ES` hacia sí misma y `en` / `x-default`
  hacia apexdata.cloud, para que Google entienda la relación entre ambos sitios.
- `robots.txt` permite explícitamente el paso a los rastreadores de IA
  (GPTBot, ClaudeBot, PerplexityBot y otros) para ganar visibilidad en motores
  de respuesta.

---

## Añadir una página

```markdown
---
layout: page
permalink: /servicios/
title: "Servicios | Apex Data Cloud España"
heading: "Nuestros servicios"
eyebrow: "Qué hacemos"
lead: "Frase de entrada bajo el título."
description: "Meta descripción para buscadores."
---

## Primera sección

Texto en markdown. Los estilos de `page.html` se aplican solos.
```

Declara siempre `layout` en el front matter: el sitio no usa `defaults` para el
layout, de forma que `robots.txt` no corra el riesgo de heredar una plantilla
HTML.

Si añades páginas reales de servicios o industrias, recuerda cambiar los enlaces
de anclaje (`/#disciplinas`) de `_includes/nav.html` y `_includes/footer.html`
por las nuevas rutas.
