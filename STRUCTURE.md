# Project Structure

```
Portfolio/
├── public/                      # Static assets (copied to dist/ during build)
│   ├── img/                    # Images
│   │   ├── my-avatar.jpg       # Profile avatar
│   │   └── signature.png       # Signature image
│   └── profile-background.jpg  # Background image
│
├── src/                        # Source code
│   ├── main.ts                 # Main TypeScript entry point
│   ├── style.css               # Global styles (Tailwind)
│   └── vite-env.d.ts           # Vite type definitions
│
├── dist/                       # Build output (generated, git-ignored)
│   ├── assets/                # Bundled JS and CSS
│   │   ├── index-[hash].js    # Bundled JavaScript
│   │   └── index-[hash].css   # Bundled CSS
│   ├── img/                   # Copied from public/img/
│   ├── profile-background.jpg # Copied from public/
│   └── index.html             # Processed HTML
│
├── vercel.json                 # ⭐ Vercel configuration (SPA Rewrites & Headers)
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

- **vercel.json**: Vercel configuration
  - Sets up SPA rewrites (sending all traffic to index.html)
  - Configures caching headers for images and assets

- **vite.config.ts**: Vite build configuration
  - Defines `public/` as static assets directory
  - Sets `dist/` as build output directory
  - Configures assets directory structure

- **tsconfig.json**: TypeScript compiler options

- **tailwind.config.js**: Tailwind CSS customization

### Source Files

- **src/main.ts**: Main application logic
- **src/style.css**: Global styles

### Static Assets

- **public/**: All files here are copied as-is to `dist/`
  - `img/`: Image assets
  - `profile-background.jpg`: Background image

## Build Process

1. **Development**: `npm run dev`
2. **Production Build**: `npm run build`
3. **Output**: `dist/` folder ready for deployment

## Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment. The `vercel.json` file ensures proper routing and caching.
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
