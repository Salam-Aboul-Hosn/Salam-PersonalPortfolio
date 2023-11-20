import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceSmartTwig() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>Smart Twigs</h2>
      <p className={Experiencecss.jobDate}>April - August 2023</p>
      <li className={Experiencecss.jobDescription}>
        Worked on the front-end development team using React & TypeScript to
        build a user-friendly platform for non-profits and individuals to
        increase awareness of current social issues.
      </li>
      <li className={Experiencecss.jobDescription}>
        Created custom components increasing developer speed by 50%.
      </li>
      <li className={Experiencecss.jobDescription}>
        Built complex forms in order for users to create organization, programs,
        and projects.{' '}
      </li>
      <li className={Experiencecss.jobDescription}>
        Used Postman and worked with Rest APIs to save form data and send it to
        the back end.
      </li>
    </div>
  );
}

export function ExperiencePending() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>MyMicrojourney</h2>
      <p className={Experiencecss.jobDate}>Oct - Present</p>
      <li className={Experiencecss.jobDescription}>
        Full stack developer building a B2B web app that facilitates SMB
        recruitment using MERN stack.
      </li>
      <li className={Experiencecss.jobDescription}>
        Developed front-end using React to create a working prototype for
        potential investors.
      </li>
      <li className={Experiencecss.jobDescription}>
        Built API endpoints using Express and stored user data in MongoDB
        database for optimal scalability.
      </li>
      <li className={Experiencecss.jobDescription}>
        Transformed project requirements into wireframes using Figma resulting
        in an enhanced UI/UX design.
      </li>
      <li className={Experiencecss.jobDescription}>
        Used express middleware to encrypt passwords increasing security by 70%.
      </li>
    </div>
  );
}
