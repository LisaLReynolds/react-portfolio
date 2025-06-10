import '../App.css'; // Importing the App.css file
import styles from './Home.module.css'; // Importing the About.module.css file


export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Lisa Reynolds</h1>
      <h2>Full Stack Developer</h2>
    </div>
  );
}
