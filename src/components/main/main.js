import React from 'react';
import Banner from "../banner";
import Technology from "../technology";
import Experience from "../experience";
import Skills from "../skills";
import Contact from "../contact";
import SoftSkills from "../soft-skills";

import './main.css';
import "aos/dist/aos.css";

const Main = () => {

    return (
        <main className="main">
            <div className="wrapper-gradient-first">
                <div className="container">
                    <Banner/>
                    <Technology/>
                </div>
            </div>
            <Skills/>
            <div className="wrapper-gradient-second">
                <div className="container">
                    <Experience/>
                    <SoftSkills/>
                    <Contact/>
                </div>
            </div>
        </main>
    );
};

export default Main;