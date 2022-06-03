import React from 'react';
import './main.css';
import Technology from "../technology";
import Banner from "../banner";

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Banner />
                <Technology />
            </div>
        </main>
    );
};

export default Main;