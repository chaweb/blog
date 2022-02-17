import fs from 'fs'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'/js/bulma-carousel.min.js', body:true}
    ]
  },
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/bulma-0.9.3/bulma.sass",
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-highlightjs',{
      style: 'dracula'
    }],['nuxt-socket-io', { 
      sockets: [{
        url: 'http://localhost:3000', 
        default: true,
        vuex:{actions: [{testServer : "testVuex"}]} ,
        namespaces: {
          '/index': {
            emitters: ['test --> test']
          }
        }
      }]}],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
 
      config.node = {
           fs: 'empty'
       }

      // ....
   }
  },

  //  target : 'static',
  //  router: {
  //    base: '/blog/'
  //  }
}
