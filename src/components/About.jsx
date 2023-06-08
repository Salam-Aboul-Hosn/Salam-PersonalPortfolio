import Aboutcss from '../styles/components/About.module.css';
import imageOfMe from '../images/self.png';
import Header from './Header';
function About() {
  return (
    <section className='section' id='About'>
      <h1 className='header'>About</h1>
      <div className={Aboutcss.grid}>
        <div className={Aboutcss.flexItemData}>
          <p className={Aboutcss.info}>
            Hey, my name is Salam Aboul Hosn. I'm currently a student at
            University of California, San Diego and studying Mathematics and
            Computer Science. I have a huge passion for full stack development
            and have a huge drive to be a developer for a company. I've been
            self studying for months and learned HTML, CSS, Javascript and React
            in order to learn front end web development. In addition, I'm also
            studying Node, Express, and data bases in order to become a full
            stack developer.
          </p>
        </div>
        <div className={Aboutcss.flexItemImg}>
          <a
            href='https://www.linkedin.com/in/salam-aboul-hosn-678a04257/'
            target='blank'
          >
            <img
              src={imageOfMe}
              alt='Icon'
              width='215px'
              className={Aboutcss.image}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
