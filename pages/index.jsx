import Head from 'next/head';
import { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../components/About';
import Work from '../components/RecentWork';
import Contact from '../components/Contact';
import Nav from '../components/Navigation';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="main">
      <Head>
        <title>Freelance web developer in Chicago, IL | Kevin Allen</title>
        <meta name="description" content="Get your website up in no time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav darkMode={darkMode} />
      <Header />
      <About setDarkMode={setDarkMode} />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
