# Personal Website Template (Astro)

This repository is a reusable personal website template built with [Astro](https://astro.build).

The `main` branch contains the live GitHub Pages site.  
The `template` branch contains a clean version intended to be reused for new sites.

---

## Creating Your Own Site from This Template

The recommended way to reuse it is:

### 1. Create a new empty repository under your GitHub account

For a personal site, the recommended name is:
```
username.github.io
```

### 2. Clone only the `template` branch

```bash
git clone --single-branch --branch template hhttps://github.com/vmordan/vmordan.github.io.git <new-repo>
cd <new-repo>
```

### 3. Rename template → main
```bash
git branch -m template main
```
### 4. Point the remote to your new repository
```bash
git remote set-url origin git@github.com:<username>/<username>.github.io.git
```
### 5. Push your new main branch
```bash
git push -u origin main
```
### 6. Enable GitHub Pages

In your new repository:
```
Settings → Pages
```

Select in `Build and deployment`:
```
Source → GitHub Actions
```

After the first successful build, your site will be available at:

```
https://username.github.io
```

## Customizing Your Site

Follow these steps to adapt the template for your own content.


### 1. Fill in personal data

Edit personal profile data in:
```
src/config/
```

### 2. Configure the site URL

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

### 3. Add an avatar photo
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

### 4. Add main content
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

### 5. (Optional) Add a photo gallery
If you want to include a photo gallery, place images in:
```
public/photos/
```

