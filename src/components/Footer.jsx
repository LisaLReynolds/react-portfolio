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
                <img src={emailIcon} alt="email icon" />
            </a>
            <a href="https://github.com/LisaLReynolds">
                <img src={githubIcon} alt="GitHub icon"/>  
            </a>
            <a href="https://www.linkedin.com/in/lisalynnreynolds/">     
                <img src={linkedinIcon} alt="LinkedIn icon"/>
            </a>
      </section>
    </footer>
    )
}