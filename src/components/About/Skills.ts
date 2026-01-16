import { Skill } from '../../types';
import { getSkillIcon } from '../../icons';

export const renderSkills = (): string => {
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
    <div id="skills-layer" class="col-start-1 row-start-1 transition-all duration-700 ease-in-out" style="opacity: 0; pointer-events: none;">
      <div class="h-full overflow-y-auto pr-2 custom-scrollbar">
        
        <!-- Languages -->
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
        
        <div class="grid grid-cols-2 gap-3">
          ${skills.map(skill => {
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
                    ${getSkillIcon(skill.iconType)}
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
  `;
};
