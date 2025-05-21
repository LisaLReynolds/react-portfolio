import '../App.css'; // Importing the App.css file
import styles from './Header.module.css'; // Importing the Header.module.css file

export default function Header(props) {
    return (
        <header className={styles.header}>{props.children}</header>
    )
}