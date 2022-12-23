import React, {useState, useRef} from 'react';
import {Parallax} from 'react-parallax';
import emailjs from '@emailjs/browser';

import './contact.css';
import Social from "../social";
import contactPhoto from "../../static/images/contact-photo.jpg";
import figureImage1 from "../../static/images/figure-1.png";
import figureImage4 from "../../static/images/figure-4.png";
import figureImage5 from "../../static/images/figure-5.png";


const Contact = () => {
    const [error, setError] = useState();
    const [name, setName] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        let {name, email} = form.current;
        name = name.value;
        email = email.value;

        if (name && email) {
            emailjs.sendForm('service_hxmtc6l', 'portfolio_template', form.current, 'Vj0vGrnawqHWJHjaN')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });

            setError(true);
        } else {
            setError(false);
        }
    };

    let showValid;

    if (error === false) {
        showValid = <p className="error">You need to provide your name and email address.</p>
    } else if (error === true) {
        showValid = <p className="success">Thanks {name} for your message.</p>
    }

    return (
        <div className="contact" id="contact">
            <div className="contact__info">
                <div className="contact__content">
                    <h3 className="main__title aos-init" data-aos="animation-scale-y" data-aos-delay="150">Get in
                        touch</h3>
                    <div className="contact__img aos-init" data-aos="animation-translate-y" data-aos-delay="200">
                        <img src={contactPhoto} alt='Drobotun Anastasia'/>
                    </div>
                    <div className="contact__social">
                        <Social/>
                    </div>
                </div>
                <div className="contact__figures">
                    <Parallax
                        className="contact__figure"
                        bgImage={figureImage1}
                        strength={100}
                        style={{
                            position: 'absolute',
                            overflow: 'visible',
                            willChange: 'transform',
                            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                        }}
                    >
                    </Parallax>
                    <Parallax
                        className="contact__figure"
                        bgImage={figureImage4}
                        strength={-50}
                        style={{
                            position: 'absolute',
                            overflow: 'visible',
                            willChange: 'transform',
                            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                        }}
                    >
                    </Parallax>
                    <Parallax
                        className="contact__figure"
                        bgImage={figureImage5}
                        strength={50}
                        style={{
                            position: 'absolute',
                            overflow: 'visible',
                            willChange: 'transform',
                            transition: 'transform 0.5s cubic-bezier(0, 0, 0, 1) 0s'
                        }}
                    >
                    </Parallax>
                </div>
            </div>
            <div className="contact__details">

                <div className="contact__form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-block">
                            <div className="contact__form-input aos-init" data-aos="animation-scale-y"
                                 data-aos-delay="100">
                                <input autoComplete="off" type="text" name="name" placeholder="Name*"
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="contact__form-input aos-init" data-aos="animation-scale-y"
                                 data-aos-delay="200">
                                <input autoComplete="off" type="text" name="email" placeholder="Email*"/>
                            </div>
                            <div className="contact__form-input aos-init" data-aos="animation-scale-y"
                                 data-aos-delay="300">
                                <textarea name="message" placeholder="Now write your awesome message :)"/>
                            </div>
                            <div className="contact__form-input">
                                {showValid}
                            </div>
                            <div className="contact__form-submit aos-init" data-aos="animation-scale-y"
                                 data-aos-delay="400">
                                <button className="btn btn__l" type="submit">Let’s Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
