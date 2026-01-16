import { renderNavigation } from '../components/Navigation';
import { renderHero } from '../components/Hero';
import { renderAbout } from '../components/About';
import { renderProjects } from '../components/Projects';
import { renderContact } from '../components/Contact';
import { renderFooter } from '../components/Footer';
import { handleScrollReveal, updateScrollProgress, handleLayerSwitching } from '../utils/scroll';

export class PortfolioController {
    private app: HTMLElement;

    constructor() {
        this.app = document.getElementById('app')!;
        this.render();
        this.addEventListeners();
    }

    private render(): void {
        this.app.innerHTML = `
      ${renderNavigation()}
      ${renderHero()}
      ${renderAbout()}
      ${renderProjects()}
      ${renderContact()}
      ${renderFooter()}
    `;
    }

    private addEventListeners(): void {
        // Add scroll listener for revealing animations and progress bar
        window.addEventListener('scroll', () => {
            handleScrollReveal();
            updateScrollProgress('scroll-progress');
            handleLayerSwitching();
        });

        // Initial check
        handleScrollReveal();
        handleLayerSwitching();

        // Handle obfuscated contact links (mailto/tel)
        (document.querySelectorAll('a[data-action="mailto"]') as NodeListOf<HTMLAnchorElement>).forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const user = el.dataset.user;
                const domain = el.dataset.domain;
                if (user && domain) {
                    window.location.href = `mailto:${user}@${domain}`;
                }
            });
        });

        (document.querySelectorAll('a[data-action="tel"]') as NodeListOf<HTMLAnchorElement>).forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const tel = el.dataset.tel;
                if (tel) {
                    window.location.href = `tel:${tel}`;
                }
            });
        });
    }
}
