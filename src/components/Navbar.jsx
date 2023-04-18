import Navbarcss from "../styles/components/Navbar.module.css"
import icon from "../images/LogoBlack.jpeg"

function Navbar() {
    return (
    <header className = {Navbarcss.header}>
            <img src= {icon} alt= "Icon" className = {Navbarcss.logo} width="50px"  />
            <nav className = {Navbarcss.navbar}>
                <a className = {Navbarcss.anchor} href= "/">About</a>
                <a className = {Navbarcss.anchor} href= "/">Experience</a>
                <a className = {Navbarcss.anchor} href= "/">Projects</a>
                <a className = {Navbarcss.anchor} href= "/">Contact</a>
            </nav>
    </header>
    );
    
}
export default Navbar;