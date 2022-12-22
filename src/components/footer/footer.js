import React from 'react';

import './footer.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopyright} from '@fortawesome/fontawesome-free-solid'
import logo from "../../static/icon/logo.svg";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo aos-init" data-aos="animation-translate-y">
                        <Router>
                            <Link to="/"><img src={logo} alt='Drobotun Anastasia logo' width="100px" height="92px"/></Link>
                        </Router>
                        <div className="copyright aos-init" data-aos="animation-translate-y">
                            <FontAwesomeIcon icon={faCopyright} /> 2022 Drobotun Anastasiia
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
