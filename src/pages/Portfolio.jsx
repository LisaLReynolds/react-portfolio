import searchHistoryImg from '../assets/searchHistory.png';
import styles from './Portfolio.module.css';  // Importing the Portfolio.module.css file 
import '../App.css';  // Importing the App.css file for global styles

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.cardsContainer}>  
        {/* first project card - something saucy */}
        <div className="card" style={{ width: "18rem" }}>
          <img src={searchHistoryImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Something Saucy</h5>
            <p className="card-text">
              Developed a dynamic recipe generator that integrates multiple APIs to provide personalized meal suggestions and random drink pairings.
            </p>
            <div className={styles.techStack}>
                <i className="devicon-html5-plain colored"></i>
                <i className="devicon-css3-plain colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-bootstrap-plain colored"></i>
                <i className="devicon-git-plain colored"></i>
                <i className="devicon-github-original"></i>
                <i className="devicon-vscode-plain colored"></i>
             </div>
            <a href="https://lisalreynolds.github.io/Something-Saucy/" className="card-link">Live Demo</a>
            <a href="https://github.com/LisaLReynolds/Something-Saucy" className="card-link">Github</a>
          </div>
        </div>
         {/* second project card  */}
        <div className="card" style={{ width: "18rem" }}>
          <img src={searchHistoryImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Something Saucy</h5>
            <p className="card-text">
              This website utilizes information from two APIs to generate recipes based on user search input and a random drink selection. A third API is used to generate a random meal recipe if the user clicks yes on the modal prompt.
            </p>
            <a href="https://lisalreynolds.github.io/Something-Saucy/" className="card-link">Live Demo</a>
            <a href="https://github.com/LisaLReynolds/Something-Saucy" className="card-link">Github</a>
          </div>
        </div>
      {/*third project card */}
        <div className="card" style={{ width: "18rem" }}>
          <img src={searchHistoryImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Something Saucy</h5>
            <p className="card-text">
              This website utilizes information from two APIs to generate recipes based on user search input and a random drink selection. A third API is used to generate a random meal recipe if the user clicks yes on the modal prompt.
            </p>
            <a href="https://lisalreynolds.github.io/Something-Saucy/" className="card-link">Live Demo</a>
            <a href="https://github.com/LisaLReynolds/Something-Saucy" className="card-link">Github</a>
          </div>
        </div>

      </div>
    </div>
  );
}