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
                    </div>
                    <div className="copyright aos-init" data-aos="animation-translate-y" data-aos-offset="100">
                        <FontAwesomeIcon icon={faCopyright} /> 2022 Drobotun Anastasia - VAT <a href="tel:+380638920606">+380638920606</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
