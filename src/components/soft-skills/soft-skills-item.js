import React from 'react';

const SoftSkillsItem = ({skills}) => {
    return (
        <>
            {skills.map((skill) => {
                    const {id, title, description, src} = skill;
                    const delay = id + '00';

                    return (
                        <div key={id} className="soft-skills__item aos-init" data-aos="animation-translate-y"
                             data-aos-delay={delay}>
                            <div className="soft-skills__item-content">
                                <h4 className="soft-skills__item-title">{title}</h4>
                                <p className="soft-skills__item-text">{description}</p>
                            </div>
                            <div className="soft-skills__item-img">
                                <img src={src} alt="soft skill"/>
                            </div>
                        </div>
                    )
                }
            )}
        </>
    );
};

export default SoftSkillsItem;