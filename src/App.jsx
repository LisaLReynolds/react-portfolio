// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file
// import Contact from './pages/Contact'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className="overlay"></div> {/* Add the overlay here */}
    <Header><NavTabs /></Header>
      <main className="mx-3">
        <Outlet />
        {/* <Contact /> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
