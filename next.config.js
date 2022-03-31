/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['openweathermap.org']
//   }
// }

const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['openweathermap.org']
  },
  pwa : {
    dest : 'public',
    register : true,
    skipWaiting : true,
    disable: process.env.NODE_ENV === 'development',
    fallbacks: {
      image: '/static/images/fallback.png',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    }
  }
});
