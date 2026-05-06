<header class="fixed top-8 left-0 w-full z-50 font-google-sans">
  <nav class="max-w-[1700px] mx-auto px-6 md:px-15">
    <div class="flex items-center justify-between">
      <x-nav.logo />

      <!-- Desktop Nav -->
      <div class="hidden md:block">
        <x-nav.links />
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-2xl hover:bg-white transition-colors">
        <div class="hamburger-icon space-y-1.5">
          <span class="hamburger-line block w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span class="hamburger-line block w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span class="hamburger-line block w-6 h-0.5 bg-gray-700 transition-all"></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  <div id="mobile-menu-overlay" class="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity"></div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="md:hidden fixed top-0 right-0 h-full w-[280px] bg-white/95 backdrop-blur-2xl shadow-2xl translate-x-full">
    <div class="flex flex-col h-full p-8">
      <!-- Close Button -->
      <button id="mobile-menu-close" class="self-end w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors mb-8">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Mobile Nav Links -->
      <ul class="mobile-nav-links flex flex-col space-y-2">
        <li class="mobile-nav-item">
          <a wire:navigate href="/" class="block font-roboto-mono uppercase text-gray-700 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 text-base font-medium">
            Home
          </a>
        </li>
        <li class="mobile-nav-item">
          <a wire:navigate href="/about" class="block font-roboto-mono uppercase text-gray-700 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 text-base font-medium">
            About
          </a>
        </li>
        <li class="mobile-nav-item">
          <a wire:navigate href="/categories" class="block font-roboto-mono uppercase text-gray-700 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 text-base font-medium">
            Categories
          </a>
        </li>
        <li class="mobile-nav-item mt-4">
          <a wire:navigate href="/contact" class="block font-roboto-mono uppercase bg-[#53705C] text-white px-6 py-4 rounded-lg transition-all duration-200 hover:bg-[#5A7A1E] hover:shadow-lg font-medium text-center text-base">
            Contact Us
            <svg class="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>