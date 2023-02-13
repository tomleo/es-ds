import path from 'path';
import { version } from './package.json';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-TileColor', content: '#b95100' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap',
            },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            {
                rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png',
            },
            {
                rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
            },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#b95100' },
        ],
    },
    server: {
        port: 8500,
    },
    router: {
        base: `/${version}/`,
    },
    // Development has SSR turned on to test es-vue-base compatibility
    // Production build will generate client only SPA
    ssr: process.env.NODE_ENV === 'development',
    target: 'static',
    modern: true,
    spa: false,
    build: {
        // analyze: true,
        extend(config) {
            /* eslint-disable no-param-reassign */
            // TODO: Prevents dupe vue instance but not sure where its actually coming from
            config.resolve.alias.vue$ = path.resolve(__dirname, 'node_modules/vue/dist/vue.common');
            // Prevents bootstrap-vue icons from being unitentionally included
            config.module.rules.push({
                test: /bootstrap-vue\/src\/icons\/icons/,
                use: 'null-loader',
            });

            /* eslint-enable no-param-reassign */
        },
    },
    publicRuntimeConfig: {
        version,
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/api.js' },
        // TODO: Make SSR Compliant
        { src: '~/plugins/prism', mode: 'client' },
    ],
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://github.com/nuxt-community/svg-module
        '@nuxtjs/svg',
        // https://bootstrap-vue.org/docs/#nuxtjs-module
        'bootstrap-vue/nuxt',
    ],
    components: [{ path: '~/components', global: true, extensions: ['vue'] }],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://i18n.nuxtjs.org
        '@nuxtjs/i18n',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@energysage/es-vue-base/nuxt',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:8500: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // https://i18n.nuxtjs.org
    i18n: {
        defaultLocale: 'en',
        langDir: 'locales/',
        locales: [{
            code: 'en',
            iso: 'en-US',
            file: 'en-US.json',
        }],
        vueI18n: {
            fallbackLocale: 'en',
        },
    },

    // https://bootstrap-vue.org/docs/#nuxtjs-module
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        icons: false,
        config: {
            breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        components: [
            'BLink',
            'BContainer',
            'BNavbar',
            'BNavbarNav',
            'BNavItem',
            'BRow',
            'BCol',
            'BSidebar',
            'BForm',
            'BFormGroup',
            'BFormRadioGroup',
            'BFormCheckbox',
            'BSpinner',
            'BTable',
        ],
        componentPlugins: ['VBTogglePlugin'],
    },
};
