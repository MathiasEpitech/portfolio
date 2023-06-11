import randy from './randy.gif';
import './index.scss';

const Error = ()  => {
  return(
    <div className="Error">
      <header className="Error-header">
        <h1>Oups 🙈 Cette page n'existe pas</h1>
        <div className='Error-Center'>

          <img src={randy} className="Error-logo" alt="logo" />
        </div>

      </header>
    </div>
  )
}

export default Error;

