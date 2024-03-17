import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Icons from './components/Icons';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
import { inject } from '@vercel/analytics';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  inject();
  return (
    <div className='App'>
      <div style={{ height: '100vh' }}>
        <Navbar />
        <Header />
        {isSmallScreen && <Icons />}
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
