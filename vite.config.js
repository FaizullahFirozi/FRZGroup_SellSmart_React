import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: { //add by FRZ
        alias: {
            "@" : "/resources/js",
        },
        alias: {
            "@lang" : '/lang'
        },
    },
});
