import Aboutcss from '../styles/components/About.module.css';
import imageOfMe from '../images/linkedinheadshot.jpeg';

function About() {
  return (
    <section className='section' id='About'>
      <h1 className='header'>About</h1>
      <div className={Aboutcss.grid}>
        <div className={Aboutcss.flexItemData}>
          <p className={Aboutcss.info}>
            Hey, my name is Salam Aboul Hosn. I'm a UC San Diego graduate with a
            degree in Mathematics-Computer Science. I currently work at Best
            Choice Products as a Software Engineer, developing and maintaining a
            warehouse management system in order to significantly improve
            inventory accuracy, reduce order processing time, and minimize labor
            costs. I gained experience with full stack development through self
            study, online courses with certification, personal projects, and my
            internships at Smart Twig Consultancy Group and MyMicrojourney.
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
              width='300px'
              className={Aboutcss.image}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
