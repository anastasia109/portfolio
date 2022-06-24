import React, {useState} from "react";
import './technology.css';
import Filter from '../filter';
import FilterList from '../filter-list';

const lists = [
    {
        id: 0,
        label: "Marie Forleo",
        description: "Create new block from builder",
        tag: "React,Animated,WordPress,JS,HTML5,CSS3,Webpack,NPM,",
        src: "/images/technology/marie.png"
    },
    {
        id: 1,
        label: "Brand seo-wave.com",
        description: "Landing page",
        tag: "TweenMax,Animated,",
        src: "/images/technology/brand.png"
    },
    {
        id: 2,
        label: "Unidencellular",
        description: "M1 to M2 Migration. Created and updated UI, bug-fixing, markup",
        tag: "Magento 1,Magento 2,JS,HTML5,LESS,",
        src: "/images/technology/und.png"
    },
    {
        id: 3,
        label: "Bikebiz Blog",
        description: "Created and updated UI, bug-fixing, markup",
        tag: "React,JS,HTML5,CSS3,Webpack,NPM,",
        src: "/images/technology/bike.png"
    },
    {
        id: 4,
        label: "Pharmahyaluron",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,SASS,",
        src: "/images/technology/pharma.png"
    },
    {
        id: 5,
        label: "Arhitektor krasoty",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,SASS,",
        src: "/images/technology/arhitektor.png"
    },
    {
        id: 6,
        label: "Gutenberg",
        description: "Create new block from builder",
        tag: "React,WordPress,JS,HTML5,CSS3,Webpack,NPM,",
        src: "/images/technology/gut.png"
    },
    {
        id: 7,
        label: "Музей АТО",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/museum.jpg"
    },
    {
        id: 8,
        label: "Vipidei",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/vipidei.png"
    },
    {
        id: 9,
        label: "Wiha Russia",
        description: "Wordpress online store",
        tag: "Wordpress,Woocommerce,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/wiha.png"
    },
    {
        id: 10,
        label: "Юридична сотня",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/legal.png"
    },
    {
        id: 11,
        label: "Seo-wave.com",
        description: "Create corp site",
        tag: "Joomla,JS,HTML5,CSS3,",
        src: "/images/technology/seowave.png"
    },
    {
        id: 12,
        label: "Avantage",
        description: "Create corp site",
        tag: "Wordpress,Animated,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/avantage.png"
    },
    {
        id: 13,
        label: "Koko mama",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,",
        src: "/images/technology/kokomama.png"
    },
    {
        id: 14,
        label: "Valentir store",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,",
        src: "/images/technology/valentir.png"
    },
    {
        id: 15,
        label: "Юнифилд",
        description: "Wordpress online store",
        tag: "Wordpress,Woocommerce,PHP,JS,HTML5,CSS3,",
        src: "/images/technology/uni.png"
    }
];

const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

const notNull = (element) => {
    return element !== '';
}

const Technology = () => {
    const [item, setItem] = useState(lists);

    let menuItems = [...new Set(lists.map((list) => list.tag))];
    menuItems = menuItems.join('').split(',').filter(notNull).filter(unique);


    const filterItem = (curtag) => {
        const newItem = lists.filter((newList) => {
            const filterTag = newList.tag.split(',').filter(unique);
            return Object.values(filterTag).includes(curtag);
        });

        setItem(newItem);
    };

    return (
        <div className="technology mb-50" id="project">
            <h3 className="main__title">Projects</h3>
            <Filter
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
                lists={lists}
            />
            <div className="inner">
                <FilterList lists={item}/>
            </div>
        </div>
    );
}

export default Technology;