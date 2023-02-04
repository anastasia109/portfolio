import React from 'react';

import './experience.css';

const experienceLists = [
    {
        id: 0,
        company: "Freelance",
        during: 'August 2022 – Present',
        description: [
            'Created and updated UI, bug-fixing, tasks estimation, markup;',
            'Development of modules, themes for Magento (M1, M2, Hyva);',
            'Installing a local environment with Docker;'
        ],
        src: "/images/experience/experience-2.png"
    },
    {
        id: 1,
        company: "Skynix",
        link: "https://skynix.co/",
        during: 'December 2019 – August 2022',
        description: [
            'Created new blocks on React from builder, create new components;',
            'Created and updated UI, bug-fixing, optimization, tasks estimation, markup;',
            'Development of modules, themes for Magento (M1, M2, Hyva);',
            'Installing a local environment with Docker, XAMPP;'
        ],
        src: "/images/experience/experience-4.png"
    },
    {
        id: 2,
        company: "SeoWave",
        link: "https://seo-wave.com/",
        during: 'March 2018 – December 2019 ',
        description: [
            'Development of themes for CMS WordPress, OpenCart, Joomla;',
            'Creating template and design type websites: landing page, corporate websites, online stores, individual projects;',
            'Installation, integration, finalization of modules, extensions;',
            'Site optimization (in terms of speed, basic SEO: schema markup);',
            'Transferring sites to another domain/hosting;',
            'Fixing bugs on existing sites;'
        ],
        src: "/images/experience/experience-1.png"
    },
    {
        id: 3,
        company: "ItWorkShop",
        during: 'April 2017 - February 2018',
        description: [
            'Development of themes for CMS WordPress (working with API, widgets, page templates, custom post type and taxonomy, extending the functionality of the admin panel, etc.);',
            'Installation, integration, finalization of modules, extensions;',
            'Site optimization (in terms of speed, basic SEO: schema markup, Open Graph protocol)',
            'Transferring sites to another domain/hosting;',
            'Fixing bugs on existing sites;',
        ],
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
                                <div className="experience__item-main" data-aos="animation-translate-y"
                                     data-aos-offset="200">
                                    <div className="experience__item-image aos-init">
                                        <img src={item.src} alt={item.company}/>
                                    </div>
                                    <div className="experience__item-content">
                                        <a className="experience__item-company aos-init" data-aos="animation-translate-y"
                                           data-aos-offset="100" href={item.link}>{item.company}</a>
                                        <ul className="experience__item-description aos-init">
                                            {(() => {
                                                let description = [];
                                                for (let des of item.description) {
                                                    description.push(<li>{des}</li>);
                                                }
                                                return description;
                                            })()}
                                        </ul>
                                        <p className="experience__item-during aos-init">{item.during}</p>
                                    </div>
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