import React from 'react';
import Header from "../components/header";
import {useLocation} from "react-router-dom";
import SkillsItems from "../components/skills/skills-items";


const Projects = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Header pathname={pathname}/>
            <div className="skills__page wrapper-gradient-second">
                <div className='container page-container'>
                    <h3 className="main__title aos-init aos-animate" data-aos="animation-translate-up"
                        data-aos-delay="150">Skills</h3>
                    <div className="skills__items">
                        <div className="skills__items-inner">
                            <div className='skills__items-list'>
                                <SkillsItems/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;