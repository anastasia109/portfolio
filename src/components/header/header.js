import React, {useState} from 'react';
import logo from '../../static/icon/logo.svg';
import {NavLink} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import Pdf from '../../static/CV_Front-End_Drobotun_Anastasiia_en.pdf';

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
                   offset={-50}
                   duration={500}>
                Projects
            </LinkS>
            <LinkS activeClass="active"
                   to="skills"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={500}>
                Skills
            </LinkS>
            <LinkS activeClass="active"
                   to="experience"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={500}>
                Experience
            </LinkS>
            <LinkS activeClass="active"
                   to="soft-skills"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={500}>
                Soft skills
            </LinkS>
            <LinkS activeClass="active"
                   to="contact"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={500}>
                Contact Me
            </LinkS>
            <div className="header__btns">
                <a className="btn" href={Pdf} target="_blank" rel="noreferrer">Resume</a>
                <a className="btn" href="https://github.com/anastasia109/portfolio" target="_blank" rel="noreferrer">Code</a>
            </div>
        </div>
        :
        <div className={menuClassName.join(" ")}>
            <NavLink to="/" end onClick={()=>window.scrollTo(0, 0)}>Home</NavLink>
            <NavLink to="/projects" onClick={()=>window.scrollTo(0, 0)}>Projects</NavLink>
            <NavLink to="/skills" onClick={()=>window.scrollTo(0, 0)}>Skills</NavLink>
        </div>
    ;

    return (
        <header>
            <div className="header-container">
                <div className="header">
                    <div className="header__logo">
                        <NavLink to="/" end onClick={()=>window.scrollTo(0, 0)}>
                            <img src={logo} alt='Drobotun Anastasia logo' width="100px"/>
                        </NavLink>
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
