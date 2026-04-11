# Janugopan Sundaramoorthy — Portfolio

Personal portfolio built with **React + Vite**.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Home.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── ProjectCard.jsx / .module.css
│   ├── ProjectModal.jsx / .module.css
│   ├── About.jsx / .module.css
│   └── Contact.jsx / .module.css
├── data/
│   └── projects.js        ← Edit project details here
├── hooks/
│   └── useTheme.js
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css
public/
└── images/                ← Drop project screenshots here
```

## Adding Project Images

1. Place your image in `public/images/` (e.g. `public/images/qr-attendance.jpg`)
2. Open `src/data/projects.js`
3. Update the matching project's `imageSrc`:
   ```js
   imageSrc: '/images/qr-attendance.jpg'
   ```

## Adding GitHub / Live Links

In `src/data/projects.js`, update each project's:
```js
githubUrl: 'https://github.com/yourusername/repo-name',
liveUrl:   'https://your-live-demo.com',   // or null if none
```

## Dark Mode

The theme toggle is in the top-right navbar. Preference is saved to `localStorage`
and restored on next visit.

## Deployment

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder
```

### Netlify / Vercel
Connect the repo — they auto-detect Vite and deploy on push.
