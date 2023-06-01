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

function App() {
  return (
    <div className='App'>
      {/*Try wrapping component with a div and give it height of the view port */}
      <div style={{ height: '100vh' }}>
        <Navbar />
        <Header />
        <Icons />
      </div>
      <About />

      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
