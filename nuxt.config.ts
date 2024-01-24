// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro:{
    storage:{
      fs:{
        driver:'fsLite',
        base:'./images'
      },
      fs2:{
        driver:'fsLite',
        base:'./public'
      }
    }
  }
})
