import '../App.css'; // Importing the App.css file
import emailIcon from '../assets/email-svgrepo.svg';
import githubIcon from '../assets/github-svgrepo.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import styles from './Footer.module.css'; // Importing the Footer.module.css file


export default function Footer() {
    return (
    <footer className={styles.footer}>
        <section className={styles.icons}>
            <a href="mailto:lisalreynolds2015@gmail.com">
                <img src={emailIcon} alt="Email Lisa Reynolds" />
            </a>
            <a href="https://github.com/LisaLReynolds">
                <img src={githubIcon} alt="Lisa Reynolds GitHub Profile"/>  
            </a>
            <a href="https://www.linkedin.com/in/lisalynnreynolds/">     
                <img src={linkedinIcon} alt="Lisa Reynolds LinkedIn Profile"/>
            </a>
      </section>
    </footer>
    )
}