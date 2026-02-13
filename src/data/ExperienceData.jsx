import Experiencecss from '../styles/components/Experience.module.css';

export function ExperienceBCP() {
  return (
    <div>
      <h2 className={Experiencecss.jobNameHeader}>Best Choice Products</h2>
      <p className={Experiencecss.jobDate}>Sep 2024 - Present</p>
      <li className={Experiencecss.jobDescription}>
        Building a Warehouse Management System using Java (Spring Boot), Angular,
        & Microsoft SQL Server.
      </li>
      <li className={Experiencecss.jobDescription}>
        Spearheaded integration of used item workflows into the WMS, preventing a
        $1M+ annual loss from unprocessed returns and enabling resale that
        boosted revenue by $800k+ annually.
      </li>
      <li className={Experiencecss.jobDescription}>
        Designed an algorithm to prioritize cycle counting the top 30%
        highest-velocity storage locations, cutting annual labor costs by $600K
        year-over-year while ensuring inventory accuracy and eliminating
        unnecessary counts.
      </li>
      <li className={Experiencecss.jobDescription}>
        Optimized database performance by successfully purging 75M rows of stale
        data, resulting in a 70% decrease in compute costs saving $36K annually.
      </li>
      <li className={Experiencecss.jobDescription}>
        Streamlined product receiving process to enable immediate storage of
        items from trailers, increasing operational speed by 30% and reducing
        labor costs.
      </li>
      <li className={Experiencecss.jobDescription}>
        Enhanced product placement algorithm to direct workers to wider drop-off
        areas for identical products, resulting in unloading multiple pallets in
        a single trip and a 50% reduction in travel time.
      </li>
      <li className={Experiencecss.jobDescription}>
        Building Pulse using Golang, Next.js (React, TypeScript), & PostgreSQL
        to enable real time sales forecasting and profit margin analysis to make
        data backed pricing decisions and revenue optimization.
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
