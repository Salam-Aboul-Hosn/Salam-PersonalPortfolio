import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceSmartTwig() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>Smart Twigs</h2>
      <p className={Experiencecss.jobDate}>April - August 2023</p>
      <li className={Experiencecss.jobDescription}>
        Used React & TypeScript to build a platform for non-profits to spread
        awareness of current issues.
      </li>
      <li className={Experiencecss.jobDescription}>
        Created custom components increasing developer speed by 60%.{' '}
      </li>
      <li className={Experiencecss.jobDescription}>
        Built complex forms in order for users to create organization, programs,
        and projects.
      </li>
      <li className={Experiencecss.jobDescription}>
        Implemented React Hook Form with Zod to collect, validate, and submit
        user data to the back end.
      </li>
    </div>
  );
}

export function ExperiencePending() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>MyMicrojourney</h2>
      <p className={Experiencecss.jobDate}>Oct - Feb 2024</p>
      <li className={Experiencecss.jobDescription}>
        Built a Rest API using Java Spring Boot and utilized MySQL to store user
        data.
      </li>
      <li className={Experiencecss.jobDescription}>
        Used Spring Security to hash passwords increasing security by 70%.
      </li>
      <li className={Experiencecss.jobDescription}>
        Developed landing pages, components, and forms using Next.js completing
        100% of the front end.
      </li>
      <li className={Experiencecss.jobDescription}>
        Created microservices, controllers, and data models to fulfill back-end
        functionality.
      </li>
    </div>
  );
}
