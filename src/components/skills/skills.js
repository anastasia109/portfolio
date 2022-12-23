import React from 'react';
import Slider from "react-slick";
import skillsLists from './configs/skills.config.json';

import './skills.css';

const Skills = () => {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="skills" id="skills">
            <div className="container">
                <h3 className="main__title aos-init" data-aos="animation-translate-up" data-aos-delay="150">Skills</h3>
                <div className="inner">
                    <div className="skills__items">
                        <div className="skills__items-inner">
                            <Slider {...settings}>
                                {skillsLists.map((item, i) => {
                                    const delay = i + '00';
                                    const {title, src, description} = item;
                                    return (
                                        <div key={i} className="skills__item aos-init" data-aos="animation-translate-y"
                                             data-aos-delay={delay}>
                                            <div className="skills__item-container">
                                                <div className="skills__item-image">
                                                    <img src={src} alt={title}/>
                                                </div>
                                                <h4 className="skills__item-title">{title}</h4>
                                                <p className="skills__item-description">{description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;