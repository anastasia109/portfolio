import React, {useState} from 'react';
import './filter.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/fontawesome-free-solid";

const Filter = ({filterItem, setItem, menuItems, lists}) => {

    const [active, setActive] = useState('All');
    const [itemTitle, setItemTitle] = useState('All');
    const [show, setShow] = useState(false);

    const addClass = (item) => {
        setActive(item);
        setItemTitle(item);
    };

    const ButtonTag = ({item, isActive}) => {
        return (
            <span
                className={isActive ? "tag active" : "tag"}
                onClick={() => tagClick(item)}>
                {item}
            </span>
        );
    };

    const ButtonAll = ({item, isActive}) => {
        return (
            <span
                className={isActive ? "tag active" : "tag"}
                onClick={() => tagAllClick(item)}>
                {item}
            </span>
        );
    };

    const tagClick = (item) => {
        filterItem(item);
        setShow(!show);
        addClass(item);
    }

    const tagAllClick = (item) => {
        setItem(lists);
        addClass(item);
    }

    const tagAllShow = () => {
        setShow(!show);
    }

    let technologyClassName = [" technology__items"];

    if (show) {
        technologyClassName.push("opened");
    }

    return (
        <div className={technologyClassName.join(" ")}>
            <div className="technology__item-title" onClick={tagAllShow}>{itemTitle}
                <FontAwesomeIcon icon={faAngleDown}/>
            </div>
            <ul className="technology__filter">
                <li className="technology__filter-item aos-init" data-aos="animation-scale-y">
                    <ButtonAll item={'All'} isActive={active === 'All'} onClick={tagAllClick}/>
                </li>
                {menuItems.map((item, id) => {
                        const delay = id + '00';

                        return (
                            <li key={id} className="technology__filter-item aos-init" data-aos="animation-scale-y"
                                data-aos-delay={delay}>
                                <ButtonTag item={item} isActive={active === item} onClick={tagClick}/>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}
export default Filter;
