import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceSmartTwig() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>
        Smart Twigs Consultancy Group
      </h2>
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
        the back end
      </li>
    </div>
  );
}

export function ExperienceMicrosoft() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>Microsoft</h2>
      <p className={Experiencecss.jobDate}>April 18</p>
    </div>
  );
}
