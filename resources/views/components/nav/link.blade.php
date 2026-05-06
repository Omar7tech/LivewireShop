<a wire:navigate href="{{ $href }}"
   {{ $attributes->merge([
       'class' => 'uppercase text-gray-700 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/90 hover:text-gray-900'
   ]) }}>
    {{ $slot }}
</a>