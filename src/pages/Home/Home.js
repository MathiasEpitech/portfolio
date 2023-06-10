import randy from './randy.gif';
import randy2 from './randy2.gif';
import randy3 from './randy3.gif';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">

        <div className='Home-Center'>
          <img src={randy2} className='Home-Randy' alt="randyeatdance"/>
          <img src={randy} className="Home-logo" alt="logo" />
          <img src={randy3} className='Home-Randy2' alt="randyeatdance"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>

      </header>
    </div>
  );
}

export default Home;

