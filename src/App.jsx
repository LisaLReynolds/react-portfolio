// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contact from './pages/Contact'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header><Nav /></Header>
      <main className="mx-3">
        <Outlet />
        {/* <Contact /> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
