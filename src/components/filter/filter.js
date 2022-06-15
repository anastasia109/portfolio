import React, {useState} from 'react';
import './filter.css';

const Filter = ({filterItem, setItem, menuItems, lists}) => {

    const [active, setActive] = useState('All');
    const addClass = (item) => {
        setActive(item);
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
        addClass(item);
    }

    const tagAllClick = (item) => {
        setItem(lists);
        addClass(item);
    }

    return (
        <ul className="technology__filter">
            <li className="technology__filter-item">
                <ButtonAll item={'All'} isActive={active === 'All'} onClick={tagAllClick}/>
            </li>
            {menuItems.map((item, id) => (
                    <li key={id} className="technology__filter-item">
                        <ButtonTag item={item} isActive={active === item} onClick={tagClick}/>
                    </li>
                )
            )}
        </ul>
    )
}
export default Filter;
