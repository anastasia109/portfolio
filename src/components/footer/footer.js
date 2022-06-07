import React from 'react';
import './footer.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopyright} from '@fortawesome/fontawesome-free-solid'
import logo from "../../static/icon/logo.svg";
import Social from "../social";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Router>
                            <Link to="/"><img src={logo} alt='Drobotun Anastasia logo' width="100px" height="92px"/></Link>
                        </Router>
                    </div>
                    <div className="footer__social">
                        <Social />
                    </div>
                    <div className="copyright">
                        <FontAwesomeIcon icon={faCopyright} /> 2022 Drobotun Anastasia - VAT +380638920606
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
