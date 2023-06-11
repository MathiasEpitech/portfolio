import LogoTitle from '../../assets/images/logo-white.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 't', 'h', 'i', 'a', 's'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p','p','e', 'r', '.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container home-page" id='home-page'>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Hey</span>
            <span> </span>
            <span className={`${letterClass} _12`}>!</span>
            <br />
            <span className={`${letterClass} _13`}>j</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>s</span>
            <span className={`${letterClass} _17`}>u</span>
            <span className={`${letterClass} _18`}>i</span>
            <span className={`${letterClass} _19`}>s</span>

            <img className={letterClass} src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16} />
          </h1>
          <h2>Developper Frontend / Developper Backend / Developper Fullstack</h2>
          <div className='d-flex justify-content-center'>
            <a href="#contact-page" className="flat-button">
              CONTACT ME
            </a>
          </div>
          
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
