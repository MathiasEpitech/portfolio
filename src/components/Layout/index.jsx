import './index.scss';
import NavBarTest from '../NavarTest';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Layout = () => {
  return (
    <div className="App">
      <NavBarTest />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Home />
        <About />
        <Projects />
        <Contact />

        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
