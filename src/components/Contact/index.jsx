import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState , useRef} from 'react';
import emailjs from "@emailjs/browser";
import Loader from 'react-loaders';


const Contact = ()  => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_h6j5o6o", "template_cjz6ti9", form.current, "JW6veR_biXklW8LV8").then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    };

    return(
        <>
            <div className='container contact-page'>

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t','e','z','-','m','o','i']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>

                    <div className="contact-form">

                        <form ref={form} onSubmit={sendEmail}>

                            <ul>
                                <li className='half'>

                                    <input type="text" name="name" placeholder='Nom' required />

                                </li>
                                <li className='half'>

                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder='email'
                                        required 

                                    />

                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li className="button-center">
                                    <input type="submit" className="flat-button" value="Envoyer" />
                                </li>
                            </ul>
                            
                        </form>
                        
                    </div>

                </div>

            </div>
            <Loader/>
        </>
    )
}

export default Contact