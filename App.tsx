import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import News from './components/News';
import Partners from './components/Partners';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NewsPage from './components/NewsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    
    if (currentPage === 'contact') {
      return <Contact />;
    }

    if (currentPage === 'news') {
      return <NewsPage />;
    }
    
    // Default Home Page Content
    return (
      <>
        <Hero />
        <News onNavigate={setCurrentPage} />
        <Stats />
        <Services />
        <Partners />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;