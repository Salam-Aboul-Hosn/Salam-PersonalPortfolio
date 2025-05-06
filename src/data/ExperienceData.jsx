import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceBCP() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>Best Choice Products</h2>
      <p className={Experiencecss.jobDate}>Sep 2024 - Present</p>
      <li className={Experiencecss.jobDescription}>
        Building a Warehouse Management System using Java, Spring Boot, Angular,
        & Microsoft SQL Server.
      </li>
      <li className={Experiencecss.jobDescription}>
        Redesigned receiving products to allow users to instantly putaway skus
        from trailers increasing time efficiency by 20% reducing labor costs and
        driving an increase in company revenue.
      </li>
      <li className={Experiencecss.jobDescription}>
        Deployed a SKU velocity heatmap to production, allowing managers to
        strategically position high-velocity SKUs near packing and shipping
        areas, reducing travel time for pickers and significantly speeding up
        order fulfillment.{' '}
      </li>
      <li className={Experiencecss.jobDescription}>
        Communicated directly with warehouse staff to quickly diagnose and
        resolve real-time system issues by executing targeted SQL queries,
        enabling uninterrupted workflow and minimizing operational delays.
      </li>
    </div>
  );
}

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
        Created reusable React components, enhancing design uniformity and
        accelerating development.
      </li>
      <li className={Experiencecss.jobDescription}>
        Built complex forms in order for users to create organizations,
        programs, and projects.
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
        Developed landing pages, components, and forms using React completing
        100% of the front end.
      </li>
      <li className={Experiencecss.jobDescription}>
        Utilized Spring Security to perform a one way hash for passwords,
        increasing data security.
      </li>
      <li className={Experiencecss.jobDescription}>
        Defined data models using JPA annotations and created User & Email
        services for sign up process.
      </li>
    </div>
  );
}
