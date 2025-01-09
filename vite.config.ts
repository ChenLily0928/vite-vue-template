import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
            styles: {
                configFile: 'src/styles/vuetify.scss',
            },
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 8880,
        // proxy: {
        //   '^/localhost': {
        //     target: 'http://localhost:8080/',
        //     changeOrigin: true,
        //     secure: false,
        //   },
        // },
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            },
        },
    },
    build: {
        assetsInlineLimit: 4096, // 預設
    },
    resolve: {
        alias: {
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@configs': fileURLToPath(new URL('./src/configs', import.meta.url)),
            '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
            '@mocks': fileURLToPath(new URL('./src/mocks', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
            '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        },
    },
});
