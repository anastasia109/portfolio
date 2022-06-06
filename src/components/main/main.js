import React from 'react';
import './main.css';
import Technology from "../technology";
import Banner from "../banner";
import Contact from "../contact";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Banner />
                <Technology />
                <Contact />
            </div>
        </main>
    );
};

export default Main;