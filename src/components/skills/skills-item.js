import React from 'react';

const SkillsItem = ({i, delay, src, title, description}) => {
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
    );
};

export default SkillsItem;