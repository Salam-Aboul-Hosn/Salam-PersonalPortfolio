import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Icons from './components/Icons';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MoreProjects from './components/MoreProjects';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState, useEffect } from 'react';
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 767); // Change the pixel value as per your requirement
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the resize handler initially to check the screen size on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
