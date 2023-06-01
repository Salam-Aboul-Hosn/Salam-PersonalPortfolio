import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceSmartTwig() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>
        Smart Twigs Consultancy Group
      </h2>
      <p className={Experiencecss.jobDate}>April 18 - Present</p>
      <li className={Experiencecss.jobDescription}>
        Developed dynamic and responsive websites using React, TypeScript, and
        Styled Components.
      </li>
      <li className={Experiencecss.jobDescription}>
        Created reusable components increasing developer speed by 10%.
      </li>
      <li className={Experiencecss.jobDescription}>
        Worked with REST APIs to retrieve and display data from databases.
      </li>
      <li className={Experiencecss.jobDescription}>
        Agile Project Workflow with daily stand up meetings to accelerate
        development using Jira Software.
      </li>
      <li className={Experiencecss.jobDescription}>
        Worked on a team and communicated with designers/project managers to
        develop large scale web app.
      </li>
      <li className={Experiencecss.jobDescription}>
        Built complex forms that were pushed to production
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
