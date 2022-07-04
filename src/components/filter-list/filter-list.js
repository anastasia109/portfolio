import React, {useState} from 'react';
import FilterItem from "./filter-item";
import './filter-list.css';
import {Link as LinkS} from "react-scroll";

const FilterList = ({lists, showItems}) => {

    const [visible, setShowMore] = useState(false);

    const newList = lists.slice(0, showItems);

    const newShowList = lists.slice(newList.length, lists.length);

    const indicator = newShowList.length > 0;

    return (
        <>
            <ul className="technology__list">
                <FilterItem newList={newList}/>
                {visible ? <FilterItem newList={newShowList}/> : null}
            </ul>

            {indicator && (
                <div className="technology__btn">
                    <p className="technology__showing">Showing {visible ? lists.length : showItems} of {lists.length}</p>
                    {visible ? (
                            <LinkS className="technology__btn-link btn btn__l aos-init"
                                   data-aos="animation-translate-up"
                                   data-aos-delay="100"
                                   to="project"
                                   spy={true}
                                   smooth={true}
                                   offset={10}
                                   duration={500}
                                   onClick={() => setShowMore(!visible)}
                            > Show less
                            </LinkS>)
                        : (
                            <span className="technology__btn-link btn btn__l aos-init"
                                  data-aos="animation-translate-up"
                                  data-aos-delay="100"
                                  onClick={() => setShowMore(!visible)}
                            > Show all</span>
                        )}
                </div>
            )}
        </>
    )
}

export default FilterList;
