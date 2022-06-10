import React from 'react';
import './main.css';
import Banner from "../banner";
import Technology from "../technology";
import Skills from "../skills";
import Contact from "../contact";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Banner />
                <Technology />
                <Skills />
                <Contact />
            </div>
        </main>
    );
};

export default Main;