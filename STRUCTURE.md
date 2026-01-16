# Project Structure

```
Portfolio/
├── public/                      # Static assets (copied to dist/ during build)
│   ├── _headers                # Cloudflare Pages security headers
│   ├── _redirects              # SPA routing configuration
│   ├── img/                    # Images
│   │   ├── my-avatar.jpg       # Profile avatar
│   │   └── signature.png       # Signature image
│   └── profile-background.jpg  # Background image
│
├── src/                        # Source code
│   ├── main.ts                 # Main TypeScript entry point
│   ├── style.css               # Global styles (Tailwind)
│   └── vite-env.d.ts          # Vite type definitions
│
├── dist/                       # Build output (generated, git-ignored)
│   ├── _headers               # Copied from public/
│   ├── _redirects             # Copied from public/
│   ├── assets/                # Bundled JS and CSS
│   │   ├── index-[hash].js    # Bundled JavaScript
│   │   └── index-[hash].css   # Bundled CSS
│   ├── img/                   # Copied from public/img/
│   ├── profile-background.jpg # Copied from public/
│   └── index.html             # Processed HTML
│
├── index.html                  # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## Key Files

### Configuration Files

- **vite.config.ts**: Vite build configuration
  - Defines `public/` as static assets directory
  - Sets `dist/` as build output directory
  - Configures assets directory structure

- **tsconfig.json**: TypeScript compiler options
  - Target: ES2020
  - Module: ESNext
  - Strict type checking enabled

- **tailwind.config.js**: Tailwind CSS customization
  - Custom color palette
  - Extended utilities
  - Content paths for purging

### Source Files

- **src/main.ts**: Main application logic
  - Portfolio class with rendering methods
  - Event listeners for scroll animations
  - Layer switching animations

- **src/style.css**: Global styles
  - Tailwind directives
  - Custom CSS utilities
  - Component styles

### Static Assets

- **public/**: All files here are copied as-is to `dist/`
  - `_headers`: Cloudflare Pages security headers
  - `_redirects`: SPA routing rules
  - `img/`: Image assets
  - `profile-background.jpg`: Background image

## Build Process

1. **Development**: `npm run dev`
   - Vite dev server with HMR
   - Serves from `index.html`
   - Assets loaded from `public/`

2. **Production Build**: `npm run build`
   - TypeScript compilation (`tsc`)
   - Vite bundling and optimization
   - Assets copied from `public/` to `dist/`
   - CSS purged and minified
   - JS bundled and minified

3. **Output**: `dist/` folder ready for deployment
   - All static assets included
   - Optimized and minified code
   - Cloudflare Pages configuration files

## Deployment

The `dist/` folder is ready to deploy to:
- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting service

### Cloudflare Pages Settings:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`
