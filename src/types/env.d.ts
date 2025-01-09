/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.vue';

interface ImportMetaEnv {
    readonly VITE_APP_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
