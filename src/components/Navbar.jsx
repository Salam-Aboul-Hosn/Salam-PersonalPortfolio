import Navbarcss from '../styles/components/Navbar.module.css';
import icon from '../images/LogoBlack.jpeg';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Pdf from '../images/resume-portfolio.pdf';
import Experiencecss from '../styles/components/Experience.module.css';
function Navbar() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [navIsActive, setNavIsActive] = useState(true);
  const [iconIsActive, setIconIsActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setNavIsActive(window.innerWidth > 548);
      setIconIsActive(window.innerWidth < 548);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleIconClick = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={Navbarcss.header}>
      <img
        onClick={handleLogoClick}
        src={icon}
        alt='Icon'
        className={Navbarcss.logo}
        width='50px'
      />

      {iconIsActive && (
        <>
          <RxHamburgerMenu
            onClick={handleIconClick}
            style={{ margin: '15px', fontSize: '30px' }}
          />
          {openMenu && (
            <div ref={menuRef} className={Navbarcss.navClickMenu}>
              <Link
                onClick={handleIconClick}
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
                onClick={handleIconClick}
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
                onClick={handleIconClick}
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
                onClick={handleIconClick}
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
              {/* <a
                href={Pdf}
                className={Navbarcss.anchor}
                style={{
                  position: 'relative',
                  padding: '6px 16px',
                  fontSize: '18px',
                  textDecoration: 'none',
                  color: 'rgb(135, 65, 216)',
                  backgroundColor: 'transprent',
                  border: '1px solid rgb(135, 65,216)',
                  transition: '0.8s',
                  overflow: 'hidden',
                  zIndex: '1',
                  cursor: 'ponter',
                  borderRadius: '10px',
                  alignSelf: 'center',
                  maxWidth: '80px',
                }}
              >
                Resume
              </a> */}
            </div>
          )}
        </>
      )}

      {navIsActive && (
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
          <a
            href={Pdf}
            className={Navbarcss.anchor}
            style={{
              position: 'relative',
              padding: '6px 16px',
              fontSize: '18px',
              textDecoration: 'none',
              color: 'rgb(135, 65, 216)',
              backgroundColor: 'transprent',
              border: '1px solid rgb(135, 65,216)',
              transition: '0.8s',
              overflow: 'hidden',
              zIndex: '1',
              cursor: 'ponter',
              borderRadius: '10px',
            }}
            target='_blank'
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
