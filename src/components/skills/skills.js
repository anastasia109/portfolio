import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import skillsLists from "./configs/skills.config.json";
import SkillsItem from "./skills-item";

import './skills.css';
const Skills = () => {
    const settings = {
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
                                {
                                    skillsLists.map((item, i) => {
                                        const delay = i + '0';
                                        const {title, src, description} = item;

                                        return (
                                            <SkillsItem i={i}
                                                        delay={delay}
                                                        title={title}
                                                        src={src}
                                                        description={description}
                                            />
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="skills__btn">
                        <Link className="btn btn__l" to={'/skills'}>More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;