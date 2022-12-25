import React from 'react';
import skillsLists from "./configs/skills.config.json";
import SkillsItem from "./skills-item";

const SkillsItems = () => {
    return (
        skillsLists.map((item, i) => {
            const delay = i + '00';
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
    );
};

export default SkillsItems;