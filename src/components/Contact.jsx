import Contactcss from '../styles/components/Contact.module.css';
import { useState, useEffect } from 'react';
import Icons from './Icons';

function Contact() {
  const [isSmallScreens, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767); // Change the pixel value as per your requirement
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

  console.log(isSmallScreens);
  return (
    <section className={Contactcss.sectionContact} id='Contact'>
      <div>
        <h1 className={Contactcss.headerContact}>Contact Me</h1>
        <p className={Contactcss.contactDescription}>
          Whether it's for a job or bussiness opportunity, a question, my inbox
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
        {/*<p className={Contactcss.footer}>good work</p>*/}
      </div>
    </section>
  );
}
export default Contact;
