import Navbarcss from '../styles/components/Navbar.module.css';
import icon from '../images/LogoBlack.jpeg';
import { Link } from 'react-scroll';
import { useState } from 'react';
function Navbar() {
  const imgStyle = {
    backgroundColor: '#181818',
    cursor: 'pointer',
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [active, setActive] = useState('nav__menu');
  const [icons, setIcons] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icons === 'nav__toggler') {
      setIcons('nav__toggler toggle');
    } else setIcons('nav__toggler');
  };

  return (
    <header className={Navbarcss.header}>
      <img
        onClick={handleLogoClick}
        src={icon}
        alt='Icon'
        className={Navbarcss.logo}
        width='50px'
      />
      <nav className={Navbarcss.navbar}>
        <Link
          to='About'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={Navbarcss.anchor}
          href='#src/components/About.jsx'
        >
          About
        </Link>
        <Link
          to='Experience'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={Navbarcss.anchor}
          href='/'
        >
          Experience
        </Link>
        <Link
          to='Projects'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={Navbarcss.anchor}
          href='/'
        >
          Projects
        </Link>
        <Link
          to='Contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={Navbarcss.anchor}
          href='/'
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
