import React from 'react';
import './filter-list.css';

const FilterList = ({lists}) =>
    <ul className="technology__list">
        {lists.map((list, i) => {
                // const tags = list.tag.split(",");
                const {src, label, description} = list;
                const delay = i + '00';

                return (
                    <li key={i} className="technology__list-item aos-init" data-aos="animation-translate-y"
                        data-aos-delay={delay}>
                        <div className="technology__list-image">
                            <img src={src} alt={label}/>
                        </div>

                        <div className="technology__list-text">
                            <h5 className="technology__list-label">{label} </h5>
                            <div className="technology__list-description">{description} </div>
                            {/*{tags.map((item, j) => {*/}
                            {/*    return (*/}
                            {/*        <div className="tag" key={j}>{item}</div>*/}
                            {/*    )*/}
                            {/*})}*/}
                        </div>
                    </li>)
            }
        )}
    </ul>

export default FilterList;
