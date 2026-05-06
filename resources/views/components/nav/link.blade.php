<a wire:navigate href="{{ $href }}"
   {{ $attributes->merge([
       'class' => 'font-roboto-mono uppercase text-gray-700 px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/90 hover:text-gray-900 text-sm font-medium'
   ]) }}>
    {{ $slot }}
</a>