# Personal Website Template (Astro)

This repository is a reusable personal website template built with [Astro](https://astro.build).
It is designed to be easily configurable via a small set of config files, while keeping content
(MDX, images, PDFs) clearly separated from the template logic.

## Getting Started

Follow these steps to customize the template for your own site (use branch `template`).


## 1. Fill in personal data

Edit personal profile data in:
```
src/config/
```

## 2. Configure the site URL

Update the canonical site URL in:
```
astro.config.mjs
```

Example:

```ts
export default defineConfig({
  site: "https://username.github.io",
});
```
This value is used for canonical URLs.

## 3. Add an avatar photo
Place your avatar image in:
```
src/assets/
```
For example:
```
src/assets/avatar.jpg
```
Then update the image import/path in:
```
src/config/profile.ts
```

## 4. Add main content
Add your main content as MDX files in the corresponding directories:
```
src/content/project/
src/content/talk/
src/content/publication/
```
Each directory contains example/template files that demonstrate the expected frontmatter
and structure.

Static files referenced from content (e.g., PDFs, slides, artifacts) should be placed in:
```
public/
```
They can then be linked via absolute paths such as `/pubs/paper.pdf`.

## 5. (Optional) Add a photo gallery
If you want to include a photo gallery, place images in:
```
public/photos/
```

