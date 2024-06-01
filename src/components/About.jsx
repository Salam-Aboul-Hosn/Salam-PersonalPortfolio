import Aboutcss from '../styles/components/About.module.css';
import imageOfMe from '../images/self.jpeg';
function About() {
  return (
    <section className='section' id='About'>
      <h1 className='header'>About</h1>
      <div className={Aboutcss.grid}>
        <div className={Aboutcss.flexItemData}>
          <p className={Aboutcss.info}>
            Hey, my name is Salam Aboul Hosn. I'm a
            UC San Diego graduate with a degree in 
            Mathematics-Computer Science. I've taken a variety of courses
            such as advanced data structures, design & analysis of algorithms,
            and object oriented programming allowing me to learn{' '}
            <strong className={Aboutcss.word}>
              Java<span>,</span> C<span>, </span>
              <span style={{ fontWeight: 300 }}>and</span> C++.
            </strong>{' '}
            I'm an extremely self motivated individual and self taught{' '}
            <strong className={Aboutcss.word}>
              HTML<span>,</span> CSS<span>,</span> JavaScript<span>,</span>{' '}
              React<span>,</span> Express
            </strong>
            , and <strong className={Aboutcss.word}>MongoDB </strong>
            by taking online courses with certification and building projects. I
            have 5 months worth of professional experience as a front end
            developer using React & TypeScript for Smart Twigs Consultancy Group. As well as 5 months worth of professional experience as a full stack developer
            using <strong className={Aboutcss.word}>React</strong>, <strong className={Aboutcss.word}>Java</strong>, and <strong className={Aboutcss.word}>MySQL</strong> for MyMicrojourney.
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
