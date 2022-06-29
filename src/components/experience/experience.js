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
        <div className="experience" id="experience">
            <h3 className="main__title aos-init" data-aos="animation-scale-y" data-aos-delay="150">Experience</h3>
            <div className="inner">
                <div className="experience__items">
                    {experienceLists.map((item, i) => {
                        return (
                            <div key={i} className="experience__item">
                                <a className="experience__item-company aos-init" data-aos="animation-translate-y" data-aos-offset="100" href={item.link}>{item.company}</a>
                                <div className="experience__item-image aos-init" data-aos="animation-translate-y" data-aos-offset="200">
                                    <img src={item.src} alt={item.company} />
                                </div>
                                <div className="experience__item-content">
                                    <p className="experience__item-description aos-init" data-aos="animation-translate-y" data-aos-offset="300">{item.description}</p>
                                    <p className="experience__item-during aos-init" data-aos="animation-translate-y" data-aos-offset="400">{item.during}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;