import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {Link}  from 'react-router-dom';
import LogoM from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-transparent text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-secondary btn-floating m-1"
              href="https://github.com/MathiasEpitech"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} color="#FFF" />
            </a>

            <a
              className="btn btn-secondary btn-floating m-1"
              href="https://www.linkedin.com/in/mathias-fernandes-832932279/"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#FFF" />
            </a>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="">
                  <div className="logo">
                    <Link to="/">
                      <img src={LogoM} alt="logo" className="img-fluid" />
                    </Link>
                  </div>
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#home-page" className="text-white">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="#about-page" className="text-white">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="#project" className="text-white">
                      PROJET
                    </a>
                  </li>
                  <li>
                    <a href="#contact-page" className="text-white">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3">© 2023</div>
      </footer>
    </>
  );
};

export default Footer;
