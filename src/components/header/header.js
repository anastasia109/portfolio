import React, {useState} from 'react';
import logo from '../../static/icon/logo.svg';
import {Link} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

import './header.css';

const Header = ({pathname}) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    let burgerClassName = ["header__burger"],
        overlayClassName = ["overlay"],
        menuClassName = ["header__nav"];

    if (mobileMenu) {
        menuClassName.push("opened");
        overlayClassName.push("opened");
        burgerClassName.push("opened");
    }


    const showMenu = (pathname === '/') ?
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
        :
        <div className={menuClassName.join(" ")}>
           <Link to="/">Home</Link>
           <Link to="/projects">Projects</Link>
           <Link to="/skills">Skills</Link>
        </div>
    ;

    return (
        <header>
            <div className="header-container">
                <div className="header">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt='Drobotun Anastasia logo' width="100px"/>
                        </Link>
                    </div>
                    <nav>
                        {showMenu}
                        <div className={burgerClassName.join(" ")}
                             onClick={toggleMobileMenu}>
                            <span/><span/><span/><span/><span/>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={overlayClassName.join(' ')} onClick={toggleMobileMenu}></div>
        </header>
    )
        ;
};

export default Header;
