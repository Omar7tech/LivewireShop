import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
        host: 'livewireshop.test', // Ensures it's accessible from the correct domain
        port: 5173, // Default Vite port, but you can change it if needed
        hmr: {
            host: 'livewireshop.test', // Ensures HMR connects properly
        },
    },
});
