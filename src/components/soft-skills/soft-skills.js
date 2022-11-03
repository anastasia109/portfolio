import React from 'react';
import SoftSkillsItem from "./soft-skills-item";
import skills from './configs/soft.config.json';

import './soft-skills.css';

const SoftSkills = () => {
    return (
        <div className="soft-skills" id="soft-skills">
            <div className="container">
                <h3 className="main__title aos-init" data-aos="animation-translate-up"
                    data-aos-delay="150">Soft Skills</h3>
                <div className="inner">
                    <div className="soft-skills__items">
                        <SoftSkillsItem skills={skills} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;