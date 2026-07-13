# DJ C-Four Website

A responsive one-page website built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — page structure and content
- `styles.css` — full responsive design
- `script.js` — menu, intro screen and scroll reveals
- `assets/` — logos and photography

## Deploying to Vercel

### Easiest route: GitHub + Vercel
1. Create a new GitHub repository.
2. Upload every file and folder from this project.
3. In Vercel, create a new project and import the repository.
4. Leave the framework preset as **Other**.
5. Deploy.

### Vercel CLI
From inside this folder:

```bash
npm install -g vercel
vercel
```

Follow the prompts. No build command is required because this is a static site.

## Editing

Open `index.html` to change copy or links.

Open `styles.css` to change:
- Gold: `--gold`
- Black: `--black`
- Main container width: `--container`

Replace images inside `assets/` while keeping the same filenames, or update their paths in `index.html` and `styles.css`.

## Birthday intro

The intro appears once per browser session. To remove it permanently:
1. Delete the `<div class="intro" ...>` block from `index.html`.
2. Delete the intro-related code at the top of `script.js`.
