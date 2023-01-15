import React from 'react';
import {Link} from 'react-router-dom';

import './filter-item.css';
import TagList from "./tag-list";

const FilterItem = ({newList}) => {
    return (
        <>
            {newList.map((list, i) => {
                    const {id, src, label, suplabel} = list,
                            delay = i + '0';

                    return (
                        <li key={i} className="technology__list-item aos-init" data-aos="animation-translate-y"
                            data-aos-delay={delay}>
                            <div className="technology__list-image">
                                <Link to={'/projects/' + id}><img src={src} alt={label}/></Link>
                            </div>

                            <div className="technology__list-text">
                                <h5 className="technology__list-label">
                                    <Link to={'/projects/' + id}>{label}</Link>
                                </h5>
                                <div className="technology__list-suplabel">{suplabel}</div>
                                <div className="technology__list-show">
                                    <ul className="technology__list-tags">
                                        <TagList list={list} />
                                    </ul>
                                    <Link className="btn"
                                          to={'/projects/' + id}>Read more</Link>
                                </div>
                            </div>
                        </li>)
                }
            )}
        </>
    )
}

export default FilterItem;
