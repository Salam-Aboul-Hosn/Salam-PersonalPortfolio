import Navbarcss from "../styles/components/Navbar.module.css"
import icon from "../images/LogoBlack.jpeg"
import {Link} from "react-scroll"

function Navbar() {
    const imgStyle = {
        backgroundColor: "#181818",
        cursor: "pointer"
      };


      const handleLogoClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
    return (
    <header className = {Navbarcss.header}>
            <img onClick={handleLogoClick} src= {icon} alt= "Icon" className = {Navbarcss.logo} width="50px"/>
            <nav className = {Navbarcss.navbar}>
                <Link to="About" spy={true} smooth={true} offset={-100} duration={500} className = {Navbarcss.anchor} href= "#src/components/About.jsx">About</Link>
                <Link to="Experience" spy={true} smooth={true} offset={-100} duration={500} className = {Navbarcss.anchor} href= "/">Experience</Link>
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={500} className = {Navbarcss.anchor} href= "/">Projects</Link>
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} className = {Navbarcss.anchor} href= "/">Contact</Link>
            </nav>
    </header>
    );
    
}
export default Navbar;