import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h1>Resume</h1>
      
      <section>
        <h2>Summary</h2>
        <p>
          Professional with over 10 years of customer service experience looking
          to transition into the position of a full-stack developer. Experience
          building projects in an intensive boot camp and as a Web Development
          intern has strengthened passions for front-end design and development,
          as well as accessibility. Eager to continue learning and building.
        </p>
      </section>
      <section>
        <h2>TECHNICAL SKILLS</h2>
        <p>
          Agile development, APIs, Bootstrap, CSS3, Express, GitHub, Handlebars,S
          HTML5, JavaScript ES6+, jQuery, JSON, MaterialUI, MERN Stack, MongoDB,
          Node, NoSQL, Object-oriented Programming, PostgreSQL, React,
          Sequelize, SQL, Web Accessibility, WordPress
        </p>
      </section>
      <section>
        <h2>EXPERIENCE</h2>
        <article>
          <h3>Web Developer Intern</h3>
          <p className={styles.codegeek}>CodeGeek</p>
          <ul>
            <li>
              Performed monthly updates for WordPress websites developed and
              maintained by CodeGeek. Included performing backups, updating, and
              both manual and automated testing of sites.
            </li>
            <li>
              Assessed and addressed accessibility issues found by Accessibility
              Checker Plugin.
            </li>
            <li>
              Assisted lead designer with website reviews for potential clients.
            </li>
            <li>
              Created a usability testing document that served to direct project
              managers on how to conduct usability tests. It also consolidated
              resources and access to previous usability testing conducted by
              CodeGeek.
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h2>EDUCATION</h2>
        <article>
          <h3>University of Denver</h3>
          <p>Certificate, Full-Stack Web Development</p>
          <h3>
            Colorado State University
          </h3>
          <p> Bachelor of Arts, Anthropology and Languages, Literatures, and
            Cultures (French)</p>
        </article>
      </section>
    </div>
  );
}
