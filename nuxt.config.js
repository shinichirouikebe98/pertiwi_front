
import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Most Breathtaking Atv Ride, Rafting, Paintball in Bali',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
         hid: 'description', 
         name: 'description',
         content: 'Feel Most Breathtaking Atv Ride, Rafting and PaintbalI Bali With Us Pertiwi Adventure. We Serve More than 30000 Tourist Every Year, High Quality, Trusty, Worthy.' 
      },
      { name: 'format-detection', content: 'telephone=6281338597825' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Pertiwi Adventure' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'www.pertiwiadventures.com' },
      { hid: 'og:title', property: 'og:title', content: 'Most Breathtaking Atv Ride, Rafting, Paintball in Bali' },
      { hid: 'og:description', property: 'og:description', content: 'Feel Most Breathtaking Atv Ride, Rafting and PaintbalI Bali With Us Pertiwi Adventure. We Serve More than 30000 Tourist Every Year, High Quality, Trusty, Worthy.' },
      { hid: 'og:image', property: 'og:image', content: '/menu/intro.jpg' },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.png' },           

    ],

  },
    // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  //axios
  axios: {
    // baseURL: 'http://localhost:8000',
    proxy: true

  },

  sitemap:{
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: [
      '/login',
      '/admin/news',
      '/admin/video',
      '/admin/image',
      '/admin/paintball',
      '/admin/article/create',
      '/admin/image/create',
      '/admin/news/create',
      '/admin/promotion/create',
      '/admin/video/create',
      '/admin/promotion',
      '/admin/dashboard',
      '/admin/article',
      '/admin/role',
      '/admin/permission',
      '/admin/user/create',
      '/admin/user',
      
      
    ],
    routes(){
      const axios = require('axios')
        return Promise.all([
            axios.get('https://pertiwiclubbali/api/web/beritas/slug'),
            axios.get('https://pertiwiclubbali/api/web/promotions/slug')
        ])
        .then(([beritas,promotions]) => {

            let sitemaps = [];

            for(let i = 0; i < beritas.data.length; i++){
              let template = {
                  url:'',
                  changefreq:'yearly',
                  priority:0.7,
                  lastmod:''
              } //reinitialize

              template.url = '/news/' + beritas.data[i].slug;
              template.lastmod = beritas.data[i].updated_at;
              sitemaps.push(template)

          }

          for(let i = 0; i < promotions.data.length; i++){
              let template = {
                  url:'',
                  changefreq:'yearly',
                  priority:0.7,
                  lastmod:''
              } //reinitialize
              template.url = '/promotions/' + promotions.data[i].slug;
              template.lastmod = promotions.data[i].updated_at;
              sitemaps.push(template)
          }

            return sitemaps;
        })
    },
    
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/colors.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Encode+Sans+SC': true,
      'Bebas+Neue':true,
      'Roboto+Condensed':true,
      Kanit:{
        wght:[600],
        ital:[700]
      },
      'Open+Sans':[300,400],
      Oswald:[700],
      Raleway:[500]
    },
    display:'swap',
    overwriting: true,
    download:true

  },
  



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',

    '@nuxtjs/style-resources',

    '@nuxtjs/sitemap',

    "@nuxtjs/proxy",
    
    [
      "@nuxtjs/recaptcha",
      {
        /* reCAPTCHA options */
        hideBadge: true, // Boolean Hide badge element (v3 & v2 via size=invisible)
        language: "English", // String Recaptcha language (v2)
        siteKey: process.env.SITE_KEY, // String Site key for requests
        version: 3, // Number Version
        size: "normal" // String Size: 'compact', 'normal', 'invisible' (v2)
      }
    ],
    '@nuxtjs/robots',

    ['nuxt-canonical', { baseUrl: 'http//:localhost:3000' }],

    ['nuxt-lazy-load', {
      directiveOnly:true
    }]
  ],
  
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // この行を追加します。 server側で動作しないように ssr: false に設定します。
    { 
      src: '~/plugins/aos', 
      ssr: false ,
      mode: 'client'
    },
    
    '~/plugins/vue-gates',
  ],

  publicRuntimeConfig: {
    imageURL: process.env.IMAGE_URL || 'https://pertiwiclubbali.com/storage',
    secretKEY: process.env.SECRET_KEY || '6Lflp8UfAAAAAKkJ-Q2CGCagk8_1SUlJZFXJJWsF',
    siteKey: process.env.SITE_KEY || '6Lflp8UfAAAAAHkbcMAhKk1ISyNJ32FBhVsDKscc'
  },

  auth: {
    strategies: {
        local: {
            token: {
                property: 'token',
                required: true,
                type: 'Bearer'
            },
            user: {
                property: 'user',
                // autoFetch: true
            },
            endpoints: {
                login: {
                    url: '/api/admin/login',
                    method: 'post'
                },
                logout: {
                    url: '/api/admin/logout',
                    method: 'post'
                },
                user: {
                    url: '/api/admin/user',
                    method: 'get'
                }
            }
        },
        


    },

    redirect: {
        login: '/login',
        logout: '/login',
        callback: '/login',
        home: '/admin/dashboard'
    }
  },

  proxy: {
    "/captcha-api/": {
      target: "https://www.google.com/recaptcha/api",
      pathRewrite: {
        "^/captcha-api": ""
      },
    },
    "/api/admin":{
      target: "http://pertiwiclubbali.com/api/admin",
      pathRewrite: {
        "^/api/admin": ""
      },
    } ,
    "/api/web":{
      target: "http://pertiwiclubbali.com/api/web",
      pathRewrite: {
        "^/api/web": ""
      },
    }     
    
  },



    // Target Deployment
  target: 'server',

  // SSR
  ssr: true,


}

