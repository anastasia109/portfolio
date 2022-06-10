import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faFacebookF, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'

import './social.css';

const Social = () => {
    return (
        <div className="social">
                <a className="social__link" href="https://www.facebook.com/people/Anastasiia-Drobotun/100006845957045/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="social__link" href="https://ua.linkedin.com/in/anastasiia-drobotun-a34255119" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="social__link" href="https://t.me/anastasia_drobotun" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a className="social__link" href="mailto:anastasia18106@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a className="social__link" href="tel:+380638920606" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
        </div>
    );
};

export default Social;