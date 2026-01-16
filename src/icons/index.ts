export function getSkillIcon(type: string): string {
    const icons: Record<string, string> = {
        react: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="currentColor" fill="none"/><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="currentColor" fill="none"/>',
        ts: '<path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm2 18h12v-2H6v2zm3-12h2v6h-2V8zm6 0h2v6h-2V8z"/>',
        js: '<path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm2 18h12v-2H6v2zm4-6h2v4h-2v-4zm4-4h2v8h-2v-8z"/>',
        node: '<path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" /><path d="M12 8v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        python: '<path d="M12 2c-3 0-5 2-5 5v2h6v1H8v2c0 3 2 5 5 5s5-2 5-5V7c0-3-2-5-5-5z"/><circle cx="9.5" cy="6.5" r="0.7"/><circle cx="14.5" cy="17.5" r="0.7"/>',
        code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
        db: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />',
        mongodb: '<path d="M12 2s6 4 6 10-6 10-6 10S6 16 6 10 12 2 12 2z" />',
        design: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
        ant: '<path d="M12 2c1 0 2 1 2 2v3c0 1-1 2-2 2s-2-1-2-2V4c0-1 1-2 2-2zM6 10c1 0 2 1 2 2v1c0 1-1 2-2 2s-2-1-2-2v-1c0-1 1-2 2-2zm12 0c1 0 2 1 2 2v1c0 1-1 2-2 2s-2-1-2-2v-1c0-1 1-2 2-2z"/>',
        git: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />',
        php: '<path d="M6 8c0-1 1-2 3-2h6c2 0 3 1 3 2v8c0 1-1 2-3 2H9c-2 0-3-1-3-2V8z"/><path d="M9 10h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>',
        wordpress: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14l-2-6-2 6-1-4 5-4 5 4-1 4z"/>',
        vite: '<path d="M3 18l9-16 9 16H3z" />',
        tailwind: '<path d="M2 12c4 0 4-4 8-4s4 4 8 4" /><path d="M2 16c4 0 4-4 8-4s4 4 8 4" />',
        photoshop: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><path d="M9 9h2a2 2 0 010 4H9v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>',
    };
    return icons[type] || icons['code'];
}
