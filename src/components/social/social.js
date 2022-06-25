import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from '@fortawesome/fontawesome-free-solid'
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './social.css';

const Social = () => {
    return (
        <div className="social">
            <a className="social__link" href="https://www.facebook.com/people/Anastasiia-Drobotun/100006845957045/"
               target="_blank" rel="noreferrer">
                <span className="social__icon"><FontAwesomeIcon icon={faFacebookF}/></span>
                Anastasiia-Drobotun
            </a>
            <a className="social__link" href="https://www.linkedin.com/in/anastasiia-drobotun-a34255119" target="_blank"
               rel="noreferrer">
                <span className="social__icon"><FontAwesomeIcon icon={faLinkedinIn}/></span>
                linkedin/anastasiia-drobotun
            </a>
            <a className="social__link" href="mailto:drobotun.nastia@gmail.com" target="_blank" rel="noreferrer">
                <span className="social__icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                drobotun.nastia@gmail.com
            </a>
            <a className="social__link" href="tel:+380638920606" target="_blank" rel="noreferrer">
                <span className="social__icon"><FontAwesomeIcon icon={faPhone}/></span>
                +380638920606
            </a>
        </div>
    );
};

export default Social;