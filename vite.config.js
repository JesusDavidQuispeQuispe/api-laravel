// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });


import { defineConfig } from 'vite'
import fullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    fullReload(['resources/views/**/*.blade.php']),
  ],
  server: {
    watch: {
      usePolling: true,
    }
  }
})
