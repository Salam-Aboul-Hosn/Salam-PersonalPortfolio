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
            Hey, my name is Salam Aboul Hosn. I am currently a third year
            student at the University Of California, San Diego studying
            Mathematics and Computer Science. I have taken a variety of courses
            such as advanced data structures, design & analysis of algorithms,
            and object oriented programming allowing me to learn Java, C, and
            C++. I am an extremely self motivated individual and self taught
            HTML, CSS, Javascript, React, Express, and MongoDB by taking online
            courses with certification and building projects. I have 5 months
            worth of professional experience as a front end developer in React &
            Typescript for Smart Twigs Consultancy Group building a full stack
            web app.
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
