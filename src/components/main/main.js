import React, {useEffect}  from 'react';
import AOS from 'aos';
import { gsap } from "gsap"

import Banner from "../banner";
import Technology from "../technology";
import Experience from "../experience";
import Skills from "../skills";
import Contact from "../contact";

import './main.css';

const Main = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        gsap.from('.js-parallax', { scale: 1.3})
    }, []);

    return (
        <main className="main">
            <div className="container">
                <Banner/>
                <Technology/>
            </div>
            <Skills/>
            <div className="wrapper_gradient">
                <div className="container">
                    <Experience/>
                    <Contact/>
                </div>
            </div>
        </main>
    );
};

export default Main;