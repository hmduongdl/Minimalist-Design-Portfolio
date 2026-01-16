export function handleScrollReveal(): void {
    const reveals = document.querySelectorAll('.section-reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

export function updateScrollProgress(progressBarId: string): void {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    const progressBar = document.getElementById(progressBarId);
    if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
    }
}

export function handleLayerSwitching(): void {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Ensure we have enough scrollable area
    if (documentHeight > windowHeight) {
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        const experienceLayer = document.getElementById('experience-layer');
        const skillsLayer = document.getElementById('skills-layer');

        // About Section Layer Switching
        // 0-30%: Experience
        // 30%+: Skills
        if (experienceLayer && skillsLayer) {
            if (scrollPercentage > 30) {
                // Switch to Skills
                experienceLayer.style.opacity = '0';
                experienceLayer.style.pointerEvents = 'none';
                skillsLayer.style.opacity = '1';
                skillsLayer.style.pointerEvents = 'auto';
            } else {
                // Switch back to Experience
                experienceLayer.style.opacity = '1';
                experienceLayer.style.pointerEvents = 'auto';
                skillsLayer.style.opacity = '0';
                skillsLayer.style.pointerEvents = 'none';
            }
        }
    }
}
