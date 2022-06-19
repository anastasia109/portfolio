import React from 'react';

import './experience.css';

const experienceLists = [
    {
        id: 0,
        company: "Skynix",
        link: "https://skynix.co/",
        during: 'December 2019 – present',
        description: 'Landing Page, Corporate website, Online store',
        src: "/images/experience/experience-2.png"
    },
    {
        id: 1,
        company: "SeoWave",
        link: "https://seo-wave.com/",
        during: 'March 2018 – December 2019 ',
        description: 'Landing Page, Corporate website, Online store',
        src: "/images/experience/experience-1.png"
    },
    {
        id: 2,
        company: "ItWorkShop",
        during: 'April 2017 - February 2018',
        description: 'Landing Page, Corporate website, Online store',
        src: "/images/experience/experience-3.png"
    },

];

const Experience = () => {
    return (
        <div className="experience mb-50">
            <h3 className="main__title">Experience</h3>
            <div className="experience__items">

                {experienceLists.map((item, i) => {
                    return (
                        <div className="experience__item" key={i}>
                            <a className="experience__item-company" href={item.link}><h4>{item.company}</h4></a>
                            <div className="experience__item-image">
                                <img src={item.src} alt={item.company}/>
                            </div>
                            <div className="experience__item-content">
                                <p className="experience__item-description">{item.description}</p>
                                <p className="experience__item-during">{item.during}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Experience;