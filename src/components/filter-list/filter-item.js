import React from 'react';

import './filter-item.css';

const FilterItem = ({newList}) => {

    return (
        <>
            {newList.map((list, i) => {
                    const {src, label, suplabel, description} = list,
                        tags = list.tags.split(",").slice(0, -1),
                        delay = i + '0';

                    return (
                        <li key={i} className="technology__list-item aos-init" data-aos="animation-translate-y"
                            data-aos-delay={delay}>
                            <div className="technology__list-image">
                                <img src={src} alt={label}/>
                            </div>

                            <div className="technology__list-text">
                                <h5 className="technology__list-label">{label} </h5>
                                <div className="technology__list-suplabel">{suplabel}</div>
                                <div className="technology__list-show">
                                    <div className="technology__list-description">{description}</div>
                                    <ul className="technology__list-tags">
                                        {tags.map((tag) => <li className="technology__list-tag">{tag}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </li>)
                }
            )}
        </>
    )
}

export default FilterItem;
