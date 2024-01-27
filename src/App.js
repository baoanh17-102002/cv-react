import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Services from'./components/Services';
import Contributors from './components/Contributors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return <div>
    <Header />
    <Hero />
    <About />
    <Services />
    <Contributors />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>;
};

export default App;
