import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Icons from "./components/Icons"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="App"> 
    {/*Try wrapping component with a div and give it height of the view port */}
      <Navbar />
      <Header />
      <Icons />      
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App; 
