import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faFacebookF, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'

import './social.css';
import logo from "../../static/icon/logo.svg";

const Social = () => {
    return (
        <div className="social">
                <a className="social__link" href="https://www.facebook.com/people/Anastasiia-Drobotun/100006845957045/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="social__link" href="https://ua.linkedin.com/in/anastasiia-drobotun-a34255119" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="social__link" href="https://t.me/anastasia_drobotun" target="_blank">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a className="social__link" href="mailto:anastasia18106@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a className="social__link" href="tel:+380638920606" target="_blank">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
        </div>
    );
};

export default Social;