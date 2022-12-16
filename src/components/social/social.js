import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from '@fortawesome/fontawesome-free-solid'
import {faFacebookF, faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'

import './social.css';

const links = [
    {
        id: 0,
        link: "https://www.facebook.com/people/Anastasiia-Drobotun/100006845957045/",
        icon: <FontAwesomeIcon icon={faFacebookF} />,
    },
    {
        id: 1,
        link: "https://www.linkedin.com/in/anastasiia-drobotun-a34255119",
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    },
    {
        id: 2,
        link: "mailto:drobotun.nastia@gmail.com",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
        id: 3,
        link: "tel:+380638920606",
        icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
        id: 4,
        link: "https://telegram.me/anastasi_drobotun",
        icon: <FontAwesomeIcon icon={faTelegramPlane} />,
    },
]

const Social = () => {
    return (
        <div className="social aos-init" data-aos="animation-translate-y" >
            {links.map((link, i) => {
                return (
                    <a key={i} className="social__link"
                       href={link.link}
                       target="_blank" rel="noreferrer">
                    <span className="social__icon">{link.icon}</span>
                </a>
                )
            })}
        </div>
    );
};

export default Social;