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
            <h3 className="main__title">Skills</h3>
            <div className="skills__items">
                <Slider {...settings}>
                    {skillsLists.map((item, i) => {
                        return (
                            <div className="skills__item" key={i}>
                                <div className="skills__item-image">
                                    <img width="200px" src={item.src} alt={item.title}/>
                                </div>
                                <div className="skills__item-title">{item.title}</div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Skills;