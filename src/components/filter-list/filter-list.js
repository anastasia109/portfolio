import React, {useContext, useEffect, useState} from 'react';
import FilterItem from "./filter-item";
import './filter-list.css';
import {Link as LinkS} from "react-scroll";
import {PathContext} from "../../utils/path-context";

const FilterList = ({lists, showItems}) => {
    const [visible, setShowMore] = useState(false);
    const {pathname} = useContext(PathContext);

    const newList = lists.slice(0, showItems);

    const newShowList = lists.slice(newList.length, lists.length);

    const showALL = () => {
        if (pathname === '/projects'){
            indicator = false;
            setShowMore(!visible);
        }
    }

    useEffect(() => {
        showALL();
    }, [])

    let indicator = newShowList.length > 0;

    if (pathname === '/projects'){
        indicator = false;
    }

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
                            > Less
                            </LinkS>)
                        : (
                            <span className="technology__btn-link btn btn__l aos-init"
                                  data-aos="animation-translate-up"
                                  data-aos-delay="100"
                                  onClick={() => setShowMore(!visible)}
                            > More</span>
                        )}
                </div>
            )}
        </>
    )
}

export default FilterList;
