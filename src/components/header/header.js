import React from 'react';
import logo from '../../static/icon/logo.svg';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import './header.css';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header">
                    <div className="header__logo">
                        <Router>
                            <Link to="/"><img src={logo} alt='Drobotun Anastasia logo' width="100px" height="92px"/></Link>
                        </Router>
                    </div>
                    <nav>
                        <div className="header__nav">
                                <LinkS activeClass="active"
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={500}>
                                    Project
                                </LinkS>
                                <LinkS to="contact" className="btn">
                                    Contact Me
                                </LinkS>
                        </div>
                        <div className="header__burger">
                            <span/><span/><span/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
