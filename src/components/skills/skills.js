import React from 'react';
import Slider from "react-slick";

import './skills.css';

const skillsLists = [
    {
        id: 0,
        title: "React",
        src: "/images/skills/React-icon.svg"
    },
    {
        id: 1,
        title: "HTML5",
        src: "/images/skills/React-icon.svg"
    },
    {
        id: 2,
        title: "CSS3",
        src: "/images/skills/React-icon.svg"
    },
    {
        id: 3,
        title: "JS",
        src: "/images/skills/React-icon.svg"
    },
    {
        id: 4,
        title: "PHP",
        src: "/images/skills/React-icon.svg"
    },

];

const Skills = () => {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="skills mb-50">
            <div className="container">
                <h3 className="main__title">Skills</h3>
                <div className="skills__items">
                    <div className="skills__items-inner">
                    <Slider {...settings}>
                        {skillsLists.map((item, i) => {
                            return (
                                <div className="skills__item" key={i}>
                                    <div className="skills__item-image">
                                        <img src={item.src} alt={item.title}/>
                                    </div>
                                    <h4 className="skills__item-title">{item.title}</h4>
                                </div>
                            )
                        })}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;