import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faPhp, faReact, faSymfony } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/CV/CV_Mathias_Fernandes.pdf';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container about-page" id='about-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['À',' ', 'P', 'r', 'o', 'p', 'o', 's',' ', 'D', 'e', ' ', 'M', 'o', 'i']} idx={45} />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity
            to work with the latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a
            time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family person, father of a beautiful daughter, a
            sports fanatic, photography enthusiast, and tech-obsessed!!!
          </p>

          <div className='d-flex justify-content-center'>
            <a href={CV} className="flat-button" download>
              TÉLÉCHARGER MON CV
            </a>
          </div>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#FFFFFF" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#FFFFFF" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#FFFFFF" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faPhp} color="#FFFFFF" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#FFFFFF" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faSymfony} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
