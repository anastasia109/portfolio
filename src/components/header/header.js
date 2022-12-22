import React, {Component} from 'react';
import logo from '../../static/icon/logo.svg';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

import './header.css';

class Header extends Component {
    state = {mobileMenu: false};

    toggleMobileMenu = () => {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render() {
        const {mobileMenu} = this.state;

        let burgerClassName = ["header__burger"],
            overlayClassName = ["overlay"],
            menuClassName = ["header__nav"];

        if (mobileMenu) {
            menuClassName.push("opened");
            overlayClassName.push("opened");
            burgerClassName.push("opened");
        }

        return (
            <header>
                <div className="header-container">
                    <div className="header">
                        <div className="header__logo">
                            <Router>
                                <Link to="/"><img src={logo} alt='Drobotun Anastasia logo' width="100px"/></Link>
                            </Router>
                        </div>
                        <nav>
                            <div className={menuClassName.join(" ")}>
                                <LinkS activeClass="active"
                                       to="project"
                                       spy={true}
                                       smooth={true}
                                       offset={-10}
                                       duration={500}>
                                    Projects
                                </LinkS>
                                <LinkS activeClass="active"
                                       to="skills"
                                       spy={true}
                                       smooth={true}
                                       offset={-10}
                                       duration={500}>
                                    Skills
                                </LinkS>
                                <LinkS activeClass="active"
                                       to="experience"
                                       spy={true}
                                       smooth={true}
                                       offset={-10}
                                       duration={500}>
                                    Experience
                                </LinkS>
                                <LinkS activeClass="active"
                                       to="soft-skills"
                                       spy={true}
                                       smooth={true}
                                       offset={-10}
                                       duration={500}>
                                    Soft skills
                                </LinkS>
                                <LinkS className="btn"
                                       to="contact"
                                       spy={true}
                                       smooth={true}
                                       offset={-10}
                                       duration={500}>
                                    Contact Me
                                </LinkS>
                            </div>
                            <div className={burgerClassName.join(" ")}
                                 onClick={this.toggleMobileMenu}>
                                <span/><span/><span/><span/><span/>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={overlayClassName.join(' ')} onClick={this.toggleMobileMenu}></div>
            </header>
        );
    }
};

export default Header;
