# Portfolio Minimalist

A clean and minimalist portfolio website built with TypeScript and Tailwind CSS.

## Features

- 🎨 Minimalist design
- 📱 Fully responsive
- ⚡ Built with Vite for fast development
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🚀 Smooth animations and transitions

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Deployment

### Cloudflare Pages

1. **Connect your repository** to Cloudflare Pages
2. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

3. **Environment variables:** None required

The build will automatically include:
- `_headers` - Security headers configuration
- `_redirects` - SPA routing support

### Alternative: Manual Deploy

```bash
# Build the project
npm run build

# The dist/ folder is ready to deploy to any static hosting service
```

## Customization

Edit the content in `src/main.ts` to personalize your portfolio:
- Update your name, bio, and description
- Add your projects with technologies used
- Update your work experience
- Add your contact information and social links

## Tech Stack

- TypeScript
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
