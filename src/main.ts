import './style.css'

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Skill {
  name: string;
  description: string;
  percentage: number;
  iconType: string;
  color?: string; // Optional custom color for the ring
}

class Portfolio {
  private app: HTMLElement;

  constructor() {
    this.app = document.getElementById('app')!;
    this.render();
    this.addEventListeners();
  }

  private render(): void {
    this.app.innerHTML = `
      ${this.renderNavigation()}
      ${this.renderHero()}
      ${this.renderAbout()}
      ${this.renderProjects()}
      ${this.renderContact()}
      ${this.renderFooter()}
    `;
  }

  private renderNavigation(): string {
    return `
      <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div class="container-custom py-2">
          <div class="flex justify-between items-center">
            <a href="#" class="text-xl font-semibold">HMD</a>
            <ul class="flex gap-8">
              <li><a href="#about" class="link-hover text-sm font-medium">About</a></li>
              <!-- <li><a href="#projects" class="link-hover text-sm font-medium">Projects</a></li> -->
              <!-- <li><a href="#contact" class="link-hover text-sm font-medium">Contact</a></li> -->
            </ul>
          </div>
        </div>
        <!-- Scroll Progress Bar -->
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div id="scroll-progress" class="h-full bg-clean-accent transition-all duration-150" style="width: 0%"></div>
        </div>
      </nav>
    `;
  }

  private renderHero(): string {
    return ``;
  }

  private renderAbout(): string {
    const experiences: Experience[] = [
      {
        role: 'Education',
        company: 'Da Lat University',
        period: 'Aug 2025 - 2029',
        description: 'Graduate from Dalat University with a Bachelor of Engineering in Information Technology.'
      },
      {
        role: 'Web Developer',
        company: '<a href="https://songphuong.vn" target="_blank" class="text-clean-accent hover:text-deep-accent">Song Phương Technology</a>',
        period: 'Mar 2025 - Present',
        description: 'Specializing in full-stack web development, graphic design, iterative product updates, and SEO optimization for high-performance digital experiences.'
      },
      {
        role: '2D Graphic Designer',
        company: 'Freelance',
        period: '',
        description: 'Conceptualized and executed creative 2D visual assets for digital and print media. Delivered branding materials, marketing collateral, and UI elements tailored to client requirements.'
      }
    ];

    const skills: Skill[] = [
      { name: 'TypeScript', description: '', percentage: 90, iconType: 'ts' },
      { name: 'Node.js', description: '', percentage: 80, iconType: 'code' },
      { name: 'Python', description: '', percentage: 70, iconType: 'code' },
      { name: 'Vite', description: '', percentage: 85, iconType: 'code' },
      { name: 'Ant Design', description: '', percentage: 80, iconType: 'design' },
      { name: 'Tailwind CSS', description: '', percentage: 85, iconType: 'code' },
      { name: 'MongoDB', description: '', percentage: 75, iconType: 'db' },
      { name: 'PHP', description: '', percentage: 65, iconType: 'code' },
      { name: 'WordPress', description: '', percentage: 60, iconType: 'code' },
      { name: 'Git', description: '', percentage: 85, iconType: 'git' },
      { name: 'Photoshop', description: '', percentage: 70, iconType: 'design' },
    ];

    return `
      <!-- About Section: 200vh height to allow scrolling "through" the content -->
      <section id="about" class="relative" style="height: 200vh;">
        
        <!-- Sticky Container: Keeps content visible while scrolling the parent section -->
        <div class="sticky top-0 h-screen flex items-start overflow-hidden pt-[46px] md:pt-[54px]">
        
          <!-- Background Image with Blur (Absolute to sticky container) -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/profile-background.jpg'); filter: blur(8px); transform: scale(1.1);"></div>
            <div class="absolute inset-0 bg-white/80"></div>
          </div>
          
          <div class="container-custom relative z-10 w-full">
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-stretch">
              <!-- Left Column: Avatar and About Me -->
              <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:px-8 md:py-6 shadow-lg relative h-full flex flex-col">
                <!-- Avatar with Signature Overlay -->
                <div class="relative w-auto mx-auto overflow-visible" style="width: 256px; margin-bottom: 43px; margin-top: 0;">
                  <!-- Avatar -->
                  <div class="w-64 h-64 rounded-full border-4 border-gray-900 overflow-hidden bg-gray-200">
                    <img src="/img/my-avatar.jpg" alt="Profile Avatar" class="w-full h-full object-cover">
                  </div>
                  
                  <!-- Signature positioned at bottom of avatar --> 
                  <div class="absolute left-1/2" style="bottom: -5.5rem; width: 300px; transform: translateX(-50%);">
                    <img src="/img/signature.png" alt="Signature" class="w-full h-auto object-contain drop-shadow-lg">
                  </div>
                </div>


                
                <!-- Name and Title -->
                <div class="text-center mb-6">
                  <h1 class="text-3xl font-bold mb-1">Hoàng Minh Dương</h1>
                </div>
                
                <!-- About Me Title -->
                <h2 class="text-2xl font-bold mb-4 flex items-center">
                  <span class="w-2 h-2 bg-clean-accent rounded-full mr-3"></span>
                  About Me
                </h2> 
                
                <!-- Description -->
                <p class="text-gray-700 leading-relaxed mb-6 text-justify">
                  IT Student at Dalat University and Song Phương Techology, specializing in modern web development and solving real-world technical challenges.
                </p>

                <!-- Social Links -->
                <div class="flex gap-4 justify-center mt-auto pb-2">
                   <a href="https://www.facebook.com/hmd.stewiclez" target="_blank" class="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:scale-110 flex items-center justify-center transition-all group">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/hmduongdl" target="_blank" class="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 hover:scale-110 flex items-center justify-center transition-all group">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" data-action="mailto" data-user="hoanglong.workdl" data-domain="gmail.com" class="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-50 hover:scale-110 flex items-center justify-center transition-all group" role="button">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-red-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  <a href="#" data-action="tel" data-tel="+84911818016" class="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 hover:scale-110 flex items-center justify-center transition-all group" role="button">
                    <svg class="w-5 h-5 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </a>
                </div>
                
              </div>
  
              <!-- Right Column: Layered Content (Experience / Tech Stack) -->
              <div class="grid grid-cols-1">
                
                <!-- Layer 1: Experience -->
                <div id="experience-layer" class="col-start-1 row-start-1 transition-all duration-700 ease-in-out" style="opacity: 1; pointer-events: auto;">
                  <div>
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                      <span class="w-2 h-2 bg-clean-accent rounded-full mr-3"></span>
                      Experience
                    </h2>
                    <div class="flex flex-col gap-4">
                      ${experiences.map((exp) => `
                        <div class="experience-card">
                          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                            <h3 class="text-xl font-bold">${exp.role}</h3>
                            <span class="text-xs font-mono text-gray-500 mt-1 lg:mt-0 lg:ml-4 whitespace-nowrap">${exp.period}</span>
                          </div>
                          <p class="text-base text-clean-accent font-semibold mb-2">${exp.company}</p>
                          <p class="text-sm text-gray-700 leading-relaxed text-justify">${exp.description}</p>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
  
                <!-- Layer 2: Tech Stack (New Design) -->
                <div id="skills-layer" class="col-start-1 row-start-1 transition-all duration-700 ease-in-out" style="opacity: 0; pointer-events: none;">
                  <div class="h-full overflow-y-auto pr-2 custom-scrollbar">
                    
                    <!-- Languages (Restored) -->
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                      <span class="w-2 h-2 bg-clean-accent rounded-full mr-3"></span>
                      Languages
                    </h2>
                    <div class="space-y-4 mb-8">
                      <div>
                        <div class="flex justify-between mb-2">
                          <span class="text-sm font-medium text-gray-700">Vietnamese</span>
                          <span class="text-xs text-gray-500">Native</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-clean-accent h-2 rounded-full" style="width: 100%"></div>
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between mb-2">
                          <span class="text-sm font-medium text-gray-700">English</span>
                          <span class="text-xs text-gray-500">Independent</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-clean-accent h-2 rounded-full" style="width: 60%"></div>
                        </div>
                      </div>
                    </div>

                    <!-- Tech Stack -->
                    <h2 class="text-2xl font-bold mb-4 flex items-center">
                      <span class="w-2 h-2 bg-clean-accent rounded-full mr-3"></span>
                      Tech Stack
                    </h2>
                    
                    <!-- Compact Grid: 2 cols on slightly larger small screens, gap reduced -->
                    <div class="grid grid-cols-2 gap-3">
                      ${skills.map(skill => {
      // Smaller radius for compact design
      const radius = 18;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (skill.percentage / 100) * circumference;

      return `
                        <div class="tech-card-glow group p-3 gap-3">
                          <!-- Circular Progress (Smaller) -->
                          <div class="relative w-12 h-12 flex-shrink-0">
                            <!-- Glow (Subtle) -->
                            <div class="absolute inset-0 bg-green-400 rounded-full blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            
                            <svg class="transform -rotate-90 w-12 h-12 relative z-10">
                              <!-- Track (Light Gray) -->
                              <circle cx="24" cy="24" r="${radius}" stroke="#e5e7eb" stroke-width="3" fill="none" />
                              <!-- Progress -->
                              <circle 
                                cx="24" 
                                cy="24" 
                                r="${radius}" 
                                stroke="#22c55e" 
                                stroke-width="3" 
                                fill="none" 
                                stroke-dasharray="${circumference}" 
                                stroke-dashoffset="${offset}"
                                stroke-linecap="round"
                                class="progress-ring__circle"
                              />
                            </svg>
                            
                            <!-- Icon/Logo Center (Smaller) -->
                            <div class="absolute inset-0 flex items-center justify-center text-green-600 z-20">
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${this.getSkillIcon(skill.iconType)}
                              </svg>
                            </div>
                          </div>
                          
                          <!-- Text Info (No Description) -->
                          <div class="flex-1 min-w-0 flex items-center">
                            <h3 class="text-gray-900 font-bold text-sm truncate group-hover:text-green-600 transition-colors">${skill.name}</h3>
                          </div>
                        </div>
                        `;
    }).join('')}
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderProjects(): string {
    return '';
  }

  private renderContact(): string {
    return '';
  }

  private renderFooter(): string {
    return '';
  }

  private addEventListeners(): void {
    // Add scroll listener for revealing animations and progress bar
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.updateScrollProgress();
      this.addLayerSwitchingAnimation(); // Add check for layer switching
    });

    // Initial check
    this.handleScroll();
    this.addLayerSwitchingAnimation();

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

  private handleScroll(): void {
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

  private updateScrollProgress(): void {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = `${scrollPercentage}%`;
    }
  }

  private addLayerSwitchingAnimation(): void {
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
  private getSkillIcon(type: string): string {
    const icons: Record<string, string> = {
      react: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="currentColor" fill="none"/><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="currentColor" fill="none"/>',
      ts: '<path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm2 18h12v-2H6v2zm3-12h2v6h-2V8zm6 0h2v6h-2V8z"/>', // Simplified placeholder
      js: '<path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm2 18h12v-2H6v2zm4-6h2v4h-2v-4zm4-4h2v8h-2v-8z"/>', // Simplified placeholder
      code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
      db: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />',
      design: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />',
      git: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />'
    };
    return icons[type] || icons['code'];
  }
}

new Portfolio();
