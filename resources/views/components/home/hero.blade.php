<div class="h-screen bg-white flex items-center justify-center sm:p-0 md:p-[1%] box-border transition-all duration-300">
  <div
    id="hero-container"
    class="h-full w-full sm:rounded-none md:rounded-lg relative overflow-hidden"
    style="background: #2d5247; clip-path: circle(1% at 50% 50%);">

    <!-- Background layer (wall + floor) -->
    <div class="hero-layer hero-background absolute inset-0 w-full h-full z-0" style="will-change: filter;">
      <img
        src="{{ asset('covers/bachround-furniture-removed.png') }}"
        alt="Background"
        class="w-full h-full object-cover object-center">
    </div>

    <div id="content" class="px-10 flex flex-col items-center justify-center w-full h-full relative z-10">
      <h1 class="text-6xl text-white font-extralight -translate-y-20 hero-text">
        Design Your <span class="font-playfair-display italic"> Space </span>, Your Way.
      </h1>
    </div>

    <!-- Furniture layer (couch + plant + rug) - in front -->
    <div class="hero-layer hero-furniture absolute inset-0 w-full h-full z-20 pointer-events-none">
      <img
        src="{{ asset('covers/all-furniture-nobg.png') }}"
        alt="Furniture"
        class="w-full h-full object-cover object-center">
    </div>

    <div class="hero-buttons absolute bottom-8 right-8 z-30 flex items-center gap-4 font-light">
      <button class="liquid-glass-btn text-2xl">
        Shop Now
      </button>
      <button class="liquid-glass-btn text-2xl">
        Learn More
      </button>
    </div>

  </div>
</div>