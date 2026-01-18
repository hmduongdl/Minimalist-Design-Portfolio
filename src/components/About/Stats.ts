export const renderStats = (): string => {
  return `
    <div class="stats-container grid grid-cols-3 gap-1 mt-auto py-1">
      <div class="stat-item text-center">
        <h3 class="text-[26px] lg:text-[32px] font-bold text-clean-accent mb-0.5">1+</h3>
        <p class="text-[8px] lg:text-[10px] text-gray-600 font-medium uppercase tracking-wide leading-snug whitespace-nowrap">Years Experience</p>
      </div>
      <div class="stat-item text-center">
        <h3 class="text-[26px] lg:text-[32px] font-bold text-clean-accent mb-0.5">5+</h3>
        <p class="text-[8px] lg:text-[10px] text-gray-600 font-medium uppercase tracking-wide leading-snug whitespace-nowrap">Projects Completed</p>
      </div>
      <div class="stat-item text-center">
        <h3 class="text-[26px] lg:text-[32px] font-bold text-clean-accent mb-0.5">100%</h3>
        <p class="text-[8px] lg:text-[10px] text-gray-600 font-medium uppercase tracking-wide leading-snug whitespace-nowrap">Client Satisfaction</p>
      </div>
    </div>
  `;
};
