export function handleScrollReveal(): void {
    const reveals = document.querySelectorAll('.section-reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const inView = elementTop < windowHeight - elementVisible;

        if (inView) {
            if (!reveal.classList.contains('active')) {
                reveal.classList.add('active');
                animateSkillProgress(reveal);
            }
        } else {
            if (reveal.classList.contains('active')) {
                reveal.classList.remove('active');
                resetSkillProgress(reveal);
            }
        }
    });
}

export function animateSkillProgress(container: Element): void {
    try {
        // Animate language bars
        const langFills = container.querySelectorAll<HTMLElement>('.lang-bar-fill');
        langFills.forEach((el) => {
            const pct = Number(el.dataset.percentage) || 0;
            // small delay for nicer effect
            setTimeout(() => {
                el.style.width = `${pct}%`;
            }, 100);
        });

        // Animate circular progress rings
        const circles = container.querySelectorAll<SVGCircleElement>('.progress-ring__circle');
        circles.forEach((circle) => {
            const dashArray = Number(circle.getAttribute('stroke-dasharray')) || 0;
            const pct = Number(circle.getAttribute('data-percentage')) || 0;
            const offset = dashArray - (pct / 100) * dashArray;
            // trigger transition
            setTimeout(() => {
                circle.style.strokeDashoffset = String(offset);
            }, 100);
        });
    } catch (e) {
        // silent fail to avoid breaking scroll handler
        // eslint-disable-next-line no-console
        console.warn('animateSkillProgress error', e);
    }
}

export function resetSkillProgress(container: Element): void {
    try {
        // Reset language bars
        const langFills = container.querySelectorAll<HTMLElement>('.lang-bar-fill');
        langFills.forEach((el) => {
            el.style.width = '0%';
        });

        // Reset circular progress rings to full offset
        const circles = container.querySelectorAll<SVGCircleElement>('.progress-ring__circle');
        circles.forEach((circle) => {
            const dashArray = Number(circle.getAttribute('stroke-dasharray')) || 0;
            // set to full (hidden)
            circle.style.strokeDashoffset = String(dashArray);
        });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('resetSkillProgress error', e);
    }
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
