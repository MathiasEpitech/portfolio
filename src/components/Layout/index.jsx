import './index.scss';
import NavBar from '../Navar';
import Home from '../Home';
import About from '../About';
import Loader from 'react-loaders';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
    <div className="App">
      <NavBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Home />
        <About />
        <Projects />
        <Contact />

        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <Footer/>
      </div>
    </div>
    <Loader/>
    </>
  );
};

export default Layout;
