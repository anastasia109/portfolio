import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from '@fortawesome/fontawesome-free-solid'
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './social.css';

const links = [
    {
        id: 0,
        link: "https://www.facebook.com/people/Anastasiia-Drobotun/100006845957045/",
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        name: 'Anastasiia-Drobotun'
    },
    {
        id: 1,
        link: "https://www.linkedin.com/in/anastasiia-drobotun-a34255119",
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        name: 'linkedin/anastasiia-drobotun'
    },
    {
        id: 2,
        link: "mailto:drobotun.nastia@gmail.com",
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        name: 'drobotun.nastia@gmail.com'
    },
    {
        id: 3,
        link: "tel:+380638920606",
        icon: <FontAwesomeIcon icon={faPhone} />,
        name: '+380638920606'
    },
]

const Social = () => {
    return (
        <div className="social">
            {links.map((link, i) => {
                const delay = i + '00';
                return (
                    <a key={i} className="social__link aos-init" data-aos="animation-translate-y"
                       data-aos-delay={delay}  href={link.link}
                       target="_blank" rel="noreferrer">
                    <span className="social__icon">{link.icon}</span>
                        {link.name}
                </a>
                )
            })}
        </div>
    );
};

export default Social;