export const renderNavigation = (): string => {
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
};
