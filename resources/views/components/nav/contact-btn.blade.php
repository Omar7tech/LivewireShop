<a wire:navigate href="/contact" 
   {{ $attributes->merge([
       'class' => 'font-roboto-mono uppercase bg-[#53705C] text-white px-6 py-3 rounded-md transition-all duration-200 hover:bg-[#5A7A1E] hover:shadow-lg font-medium group inline-flex items-center gap-2 text-sm'
   ]) }}>
    Contact Us
    <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
</a>
