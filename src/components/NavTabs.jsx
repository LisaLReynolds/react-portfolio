import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import styles from './NavTabs.module.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className={`nav nav-tabs ${styles.navTabs}`}>
      <li className={`nav-item ${styles.navItem}`}>
        <Link
          to="/"
          className={`nav-link${currentPage === '/' ? ' active' : ''} ${styles.navLink}`}
        >
          About
        </Link>
      </li>
      <li className={`nav-item ${styles.navItem}`}>
        <Link
          to="/Portfolio"
          className={`nav-link${currentPage === '/Portfolio' ? ' active' : ''} ${styles.navLink}`}
        >
          Portfolio
        </Link>
      </li>
      <li className={`nav-item ${styles.navItem}`}>
        <Link
          to="/Resume"
          className={`nav-link${currentPage === '/Resume' ? ' active' : ''} ${styles.navLink}`}
        >
          Resume
        </Link>
      </li>
      <li className={`nav-item ${styles.navItem}`}>
        <Link
          to="/Contact"
          className={`nav-link${currentPage === '/Contact' ? ' active' : ''} ${styles.navLink}`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
