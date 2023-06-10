import randy from './randy.gif';
import randy2 from './randy2.gif';
import randy3 from './randy3.gif';
import './index.scss';

const Error = ()  => {
  return(
    <div className="Error">
      <header className="Error-header">
        <h1>Oups 🙈 Cette page n'existe pas</h1>
        <div className='Error-Center'>

          <img src={randy2} className='Error-Randy' alt="randyeatdance"/>
          <img src={randy} className="Error-logo" alt="logo" />
          <img src={randy3} className='Error-Randy2' alt="randyeatdance"/>
        </div>

      </header>
    </div>
  )
}

export default Error;

