import "./index.scss";
import LogoM from "../../../assets/images/logo-black.png";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import Mlogo from "./Mlogo";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoM} alt="M" />
      <Mlogo outlineLogoRef={outlineLogoRef} />
    </div>
  );
};

export default Logo;
