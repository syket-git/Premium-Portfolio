import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Syket Bhattachergee | MERN Stack Developer</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Syket Bhattachergee. I'm a MERN Stack Developer. I have been working for this development sector last 2 years. I love to make the web more open to the world."
        />
        <meta
          name="keywords"
          content="syket, syketb, syketbhattachergee, bhattachergee, syket git, syket-git"
        />

        <meta
          property="og:title"
          content="Syket Bhattachergee | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="I'm Syket Bhattachergee. I'm a MERN Stack Developer. I have been working for this development sector last 2 years. I love to make the web more open to the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://syket.me" />
        <meta
          property="og:image"
          content="https://i.ibb.co/bRx4N5q/syket.jpg"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
