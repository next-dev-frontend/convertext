if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-7E0mZVQD04KmGPo1f5ZJ/_buildManifest.js",revision:"28be39fd5b9b48465e035f0bbecb5bd6"},{url:"/_next/static/-7E0mZVQD04KmGPo1f5ZJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/206.96fbb9717a929ec3.js",revision:"96fbb9717a929ec3"},{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/295.8288cd8a4c61b5ed.js",revision:"8288cd8a4c61b5ed"},{url:"/_next/static/chunks/321.8ce3a222e70cec0d.js",revision:"8ce3a222e70cec0d"},{url:"/_next/static/chunks/411.39d4b5bccc8753c3.js",revision:"39d4b5bccc8753c3"},{url:"/_next/static/chunks/632.a68585accd1360d0.js",revision:"a68585accd1360d0"},{url:"/_next/static/chunks/698.6343bfd066c936de.js",revision:"6343bfd066c936de"},{url:"/_next/static/chunks/755-c1a61f50c596613c.js",revision:"c1a61f50c596613c"},{url:"/_next/static/chunks/818.be461b7b78435ef7.js",revision:"be461b7b78435ef7"},{url:"/_next/static/chunks/836.4ea6e11306404ad2.js",revision:"4ea6e11306404ad2"},{url:"/_next/static/chunks/841.5842726529acd097.js",revision:"5842726529acd097"},{url:"/_next/static/chunks/853.94f22c51ff2c5746.js",revision:"94f22c51ff2c5746"},{url:"/_next/static/chunks/873.6d86670ff0117d4f.js",revision:"6d86670ff0117d4f"},{url:"/_next/static/chunks/884.003e724aadbbfa96.js",revision:"003e724aadbbfa96"},{url:"/_next/static/chunks/962.319c6c7c18e0dcff.js",revision:"319c6c7c18e0dcff"},{url:"/_next/static/chunks/framework-305cb810cde7afac.js",revision:"305cb810cde7afac"},{url:"/_next/static/chunks/main-d6164e3cbdbe0e86.js",revision:"d6164e3cbdbe0e86"},{url:"/_next/static/chunks/pages/404-84b114d08e2bdac3.js",revision:"84b114d08e2bdac3"},{url:"/_next/static/chunks/pages/500-3b757c634b7f9e64.js",revision:"3b757c634b7f9e64"},{url:"/_next/static/chunks/pages/_app-e7e59b4d818e9741.js",revision:"e7e59b4d818e9741"},{url:"/_next/static/chunks/pages/_error-2cc5c76b30a7946a.js",revision:"2cc5c76b30a7946a"},{url:"/_next/static/chunks/pages/index-e07b1fdc6f7099df.js",revision:"e07b1fdc6f7099df"},{url:"/_next/static/chunks/pages/page-offline-7b658ac6aa57efce.js",revision:"7b658ac6aa57efce"},{url:"/_next/static/chunks/pages/privacy-policy-c6b65c2a0bd526e3.js",revision:"c6b65c2a0bd526e3"},{url:"/_next/static/chunks/pages/terms-and-conditions-7eb063cb5ce298e1.js",revision:"7eb063cb5ce298e1"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-12c960f22c3aa9e9.js",revision:"12c960f22c3aa9e9"},{url:"/_next/static/css/e481071ba1b26687.css",revision:"e481071ba1b26687"},{url:"/backgrounds/bg1-convertext.webp",revision:"8c3c782889bf40a1d7b4830a59702183"},{url:"/backgrounds/bg2-convertext.webp",revision:"28bfde8c637124686d0db737c49ae23f"},{url:"/backgrounds/bg3-convertext.webp",revision:"7b99b54e64000023d6bbe1dab0cc970f"},{url:"/cards/post-card1.webp",revision:"35a8fcd569a87753d4c3d218cc04b7ef"},{url:"/cards/post-card2.webp",revision:"acf67f648393e6be070539d85a9e6d8e"},{url:"/cards/post-card3.webp",revision:"aba1321b9fd6f4fd59663445fa1b3cd9"},{url:"/cards/post-card4.webp",revision:"9cb1e66338966d01b20b57f4cd946c6a"},{url:"/favicon.ico",revision:"19d0d3aeb34cdec83931dd17df742a1e"},{url:"/logos/logo-144x144.png",revision:"65dfc42b10213d5f2d62b7ee08e6198c"},{url:"/logos/logo-192x192.png",revision:"2327213a52c6c1275ee581d310578145"},{url:"/logos/logo-36x36.png",revision:"7f2c2a47b1839c0b280576ebe5e0faab"},{url:"/logos/logo-48x48.png",revision:"ef3ac23d44b2be9d7890f86055689192"},{url:"/logos/logo-512x512.png",revision:"be414289951838318bf67caaa587f9bc"},{url:"/logos/logo-72x72.png",revision:"58d191a8fa1e216f86782f0d9a5befca"},{url:"/logos/logo-96x96.png",revision:"d423eab52fc390ef917d8dca4a273a7c"},{url:"/logos/logo-convertext.webp",revision:"dec8200b7cea5193055af2180e3e16fc"},{url:"/logos/logo-google.webp",revision:"5654688bf67e92ecb1bca6a2563a63f0"},{url:"/logos/maskable.png",revision:"be414289951838318bf67caaa587f9bc"},{url:"/manifest.json",revision:"81509ee02d4f38bd62c90b1e7157a67e"},{url:"/robots.txt",revision:"23b66e1c0fc9dd4817a16a8b544c2e50"},{url:"/sitemap.xml",revision:"d4184f19615e03efccb65e13b77257e4"},{url:"/templates/business-template1.png",revision:"94e71ee9d9a74a4975dc9836a5da6ffa"},{url:"/templates/business-template1.webp",revision:"deca53e214e7f5fa9d161bf7e1629f03"},{url:"/templates/business-template2.png",revision:"26ebe1967d41ed6115b85aba1e7a3e24"},{url:"/templates/business-template2.webp",revision:"b9fa1fcea14022f356321c5a3dcb7cfa"},{url:"/templates/kaspersky-template.png",revision:"38104c642ee895f63beacce1d86b6f8c"},{url:"/templates/kaspersky-template.webp",revision:"edeb9c284322833709005957b23c856f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
