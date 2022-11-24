import React from 'react';
import {useHistory} from 'react-router-dom';

import './filter-item.css';

const FilterItem = ({newList}) => {
    const router = useHistory();

    return (
        <>
            {newList.map((list, i) => {
                    const {id, src, label, suplabel, description} = list,
                        tags = list.tags.split(",").slice(0, -1),
                        delay = i + '0';

                    const tagList = tags.map((tag) => <li key={tag} className="technology__list-tag">{tag}</li>)

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
                                        {tagList}
                                    </ul>
                                    <button className="btn"
                                            onClick={() => router.push(`/projects/${id}`)} >
                                        Read more</button>
                                </div>
                            </div>
                        </li>)
                }
            )}
        </>
    )
}

export default FilterItem;
