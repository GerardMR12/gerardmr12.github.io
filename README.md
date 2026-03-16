# Portfolio - Gerard Morales Riera

A minimal, modern, and fast portfolio website.

## Features
- **Markdown-Driven Content**: Essay posts and project entries are written in Markdown in the `posts/` directory.
- **Dynamic Rendering**: `marked.js` is used to parse and render Markdown on the fly.
- **Minimal Design**: Focused on typography and ease of reading.
- **Zero Build Step**: No Jekyll, Ruby, or complex framework needed.

## Structure
- `index.html`: Main entry point.
- `assets/css/style.css`: Modern styling.
- `assets/js/app.js`: Core logic for fetching and rendering content.
- `posts/`: Your markdown content.
- `posts.json`: Manifest file to index your content.
- `assets/files/`: PDFs (CV, Thesis).
- `assets/img/`: Images and GIFs.

## How to use
To add a new project or essay post:
1. Create a `.md` file in the `posts/` folder.
2. Add its details (id, title, date, file path) to `posts.json`.

## Serving the site locally
Since the site uses `fetch()` to load content, you need to run it through a web server to avoid CORS issues.
You can use:
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx live-server`
- **VS Code**: "Live Server" extension.

The site is fully compatible with **GitHub Pages**.
