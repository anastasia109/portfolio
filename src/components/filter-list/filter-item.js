import React from 'react';

const FilterItem = ({newList}) => {

    return (
        <>
                {newList.map((list, i) => {
                        const {src, label, description} = list;
                        const delay = i + '0';

                        return (
                            <li key={i} className="technology__list-item aos-init" data-aos="animation-translate-y"
                                data-aos-delay={delay}>
                                <div className="technology__list-image">
                                    <img src={src} alt={label}/>
                                </div>

                                <div className="technology__list-text">
                                    <h5 className="technology__list-label">{label} </h5>
                                    <div className="technology__list-description">{description} </div>
                                </div>
                            </li>)
                    }
                )}
        </>
    )
}

export default FilterItem;
