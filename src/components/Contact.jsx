import Contactcss from '../styles/components/Contact.module.css';
import { useState, useEffect } from 'react';
import Icons from './Icons';

function Contact() {
  const [isSmallScreens, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767); // Change the pixel value as per your requirement
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isSmallScreens);
  return (
    <section className={Contactcss.sectionContact} id='Contact'>
      <div>
        <h1 className={Contactcss.headerContact}>Contact Me</h1>
        <p className={Contactcss.contactDescription}>
          Whether it's for a job or business opportunity, a question, my inbox
          is always open.
        </p>
        <div className={Contactcss.container}>
          <a
            className={Contactcss.btn}
            href='mailto:salamaboulhosn581@gmail.com'
          >
            Send Message
          </a>
        </div>

        {isSmallScreens && (
          <Icons
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '5px',
              marginTop: '15px',
            }}
          />
        )}
      </div>
    </section>
  );
}
export default Contact;
