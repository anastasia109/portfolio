import React from 'react';
import './main.css';
import Banner from "../banner";
import Technology from "../technology";
import Experience from "../experience";
import Skills from "../skills";
import Contact from "../contact";

const Main = () => {
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