import searchHistoryImg from '../assets/searchHistory.png';
import styles from './Portfolio.module.css';  // Importing the Portfolio.module.css file
import '../App.css';  // Importing the App.css file for global styles

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className={`card`} style={{ width: "18rem" }}>
        <img src={searchHistoryImg} className={`card-img-top`} alt="..." />
        <div className={`card-body`}>
          <h5 className={`card-title`}>Something Saucy</h5>
          <p className={`card-text`}>
            This website utilizes information from two APIs to generate recipes based on user search input and a random drink selection. A third API is used to generate a random meal recipe if the user clicks yes on the modal prompt.
          </p>
         <a href="https://lisalreynolds.github.io/Something-Saucy/" className={`card-link`}>Website</a>
         <a href="https://github.com/LisaLReynolds/Something-Saucy" className={`card-link`}>Github</a>
        </div>
      </div>
    </div>
  );
}