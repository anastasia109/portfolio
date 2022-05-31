import React from 'react';
import './filter-list.css';

const FilterList = ({lists}) =>
    <ul className="technology__list">
        {lists.map((list, i) => {
                const tags = list.tag.split(",");
                const {src, label, description} = list;
                return (
                    <li key={i} className="technology__list-item">
                        <figure>
                            <img src={src} alt={label}/>
                            <figcaption>
                                <div className="label">{label} </div>
                                <div className="description">{description} </div>
                                {tags.map((item, j) => {
                                    return (
                                        <div className="tag" key={j}>{item}</div>
                                    )
                                })}
                            </figcaption>
                        </figure>
                    </li>)
            }
        )}
    </ul>

export default FilterList;
