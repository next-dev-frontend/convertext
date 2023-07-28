import '../styles/tailwind.css'
//import "../styles/globals.css";
//import "tailwindcss/tailwind.css";
import React, { useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head';
import dynamic from 'next/dynamic'
const ArticleConverter = dynamic(() => import('../components/ArticleConverter'), { loading: () => <p>Loading...</p>, })
const SocialShare = dynamic(() => import('../components/SocialShare'))
const Instructions = dynamic(() => import('../components/Instructions'), { loading: () => <p>Loading...</p>, })
const BgParallax = dynamic(() => import('../components/BgParallax'), { loading: () => <p>Loading...</p>, })
const UseExemple = dynamic(() => import('../components/UseExemple'), { loading: () => <p>Loading...</p>, })
const Advantages = dynamic(() => import('../components/Advantages'), { loading: () => <p>Loading...</p>, })
const PublicationDate = dynamic(() => import('../components/PublicationDate'))
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <p>Loading...</p>, })
const Analytics = dynamic(() => import('../components/Analytics'))

const MyApp = ({ Component, pageProps }: AppProps) => {

  //registrar service-worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service worker registered:', registration);
          })
          .catch(error => {
            console.log('Service worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="manifest" href='/manifest.json' />
        <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
        <link rel="icon" href='/logos/logo-144x144.png' />
      </Head>
      <Component {...pageProps} />
      <ArticleConverter />
      <SocialShare />
      <Instructions />
      <BgParallax />
      <SocialShare />
      <UseExemple />
      <Advantages />
      <SocialShare />
      <PublicationDate />
      <Footer />
      <Analytics />
    </>
  )
}
export default MyApp