import React, {useState} from "react";
import './technology.css';
import Filter from '../filter';
import lists from './configs/technology.config.json';
import FilterList from '../filter-list';

const showItems = 6;

const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

const notNull = (element) => {
    return element !== '';
}

const Technology = () => {
    const [item, setItem] = useState(lists);

    let menuItems = [...new Set(lists.map((list) => list.tags))];
    menuItems = menuItems.join('').split(',').filter(notNull).filter(unique);


    const filterItem = (curtag) => {
        const newItem = lists.filter((newList) => {
            const filterTag = newList.tags.split(',').filter(unique);
            return Object.values(filterTag).includes(curtag);
        });

        setItem(newItem);
    };

    return (
        <div className="technology" id="project">
            <h3 className="main__title aos-init" data-aos="animation-scale-y" data-aos-delay="150">Projects</h3>
            <Filter
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
                lists={lists}
            />
            <div className="inner">
                <FilterList lists={item} showItems={showItems}/>
            </div>
        </div>
    );
}

export default Technology;