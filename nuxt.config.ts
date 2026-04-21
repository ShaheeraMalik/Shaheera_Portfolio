export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      web3formsKey: process.env.WEB3FORMS_KEY ?? '',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Shaheera Imtiaz | Full Stack Developer',
      meta: [
        { name: 'description', content: 'Full Stack Developer specializing in MERN Stack, DevOps, and Cloud Computing. Top 7% nationwide on NSCT.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&family=Press+Start+2P&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap'
        }
      ]
    }
  }
})
