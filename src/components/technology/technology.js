import React, {Component} from "react";
import './technology.css';

const lists = [{
        label: "Marie Forleo",
        description: "Create new block from builder",
        tag: "React,Animated,WordPress,JS,HTML5,CSS3,Webpack,NPM",
        src: "/images/marie.png"
    },
    {
        label: "Brand seo-wave.com",
        description: "Landing page",
        tag: "TweenMax,Animated",
        src: "/images/brand.png"
    },
    {
        label: "Unidencellular",
        description: "M1 to M2 Migration. Created and updated UI, bug-fixing, markup",
        tag: "Magento 1,Magento 2,JS,HTML5,LESS",
        src: "/images/und.png"
    },
    {
        label: "Bikebiz Blog",
        description: "Created and updated UI, bug-fixing, markup",
        tag: "React,JS,HTML5,CSS3,Webpack,NPM",
        src: "/images/bike.png"
    },
    {
        label: "Pharmahyaluron",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,SASS",
        src: "/images/pharma.png"
    },
    {
        label: "Arhitektor krasoty",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3,SASS",
        src: "/images/arhitektor.png"
    },
    {
        label: "Gutenberg",
        description: "Create new block from builder",
        tag: "React,WordPress,JS,HTML5,CSS3,Webpack,NPM",
        src: "/images/gut.png"
    },
    {
        label: "Музей АТО",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3",
        src: "/images/museum.jpg"
    },
    {
        label: "Vipidei",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3",
        src: "/images/vipidei.png"
    },
    {
        label: "Wiha Russia",
        description: "Wordpress online store",
        tag: "Wordpress,Woocommerce,PHP,JS,HTML5,CSS3",
        src: "/images/wiha.png"
    },
    {
        label: "Юридична сотня",
        description: "Wordpress corp site",
        tag: "Wordpress,PHP,JS,HTML5,CSS3",
        src: "/images/legal.png"
    },
    {
        label: "Seo-wave.com",
        description: "Create corp site",
        tag: "Joomla,JS,HTML5,CSS3",
        src: "/images/seowave.png"
    },
    {
        label: "Avantage",
        description: "Create corp site",
        tag: "Wordpress,Animated,PHP,JS,HTML5,CSS3",
        src: "/images/avantage.png"
    },
    {
        label: "Koko mama",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3",
        src: "/images/kokomama.png"
    },
    {
        label: "Valentir store",
        description: "Online store",
        tag: "OpenCart,JS,HTML5,CSS3",
        src: "/images/valentir.png"
    },
    {
        label: "Юнифилд",
        description: "Wordpress online store",
        tag: "Wordpress,Woocommerce,PHP,JS,HTML5,CSS3",
        src: "/images/uni.png"
    }
];
const filters = [
    {name: "React", status: false},
    {name: "Vue", status: false},
    {name: "Animated", status: false},
    {name: "WordPress", status: false},
    {name: "Magento 1", status: false},
    {name: "Magento 2", status: false},
    {name: "Joomla", status: false},
    {name: "JS", status: false},
    {name: "HTML5", status: false},
    {name: "CSS3", status: false},
    {name: "Webpack", status: false},
    {name: "TweenMax", status: false},
    {name: "NPM", status: false}
];


const Filters = ({onClickAll, all, onClick, filters}) =>
    <ul className="technology__filter">
        <li onClick={onClickAll} className="technology__filter-item">
            <input
                type="checkbox"
                checked={all}
            />
            <label htmlFor="all">All</label>
        </li>
        {filters.map(
            (filter, i) =>
                <li key={i} className="technology__filter-item" data-index={i} onClick={onClick}>
                    <input
                        id={filter.name}
                        type="checkbox"
                        checked={filter.status}
                    />
                    <label htmlFor={filter.name}>{filter.name}</label>
                </li>
        )}
    </ul>

const Lists = ({lists}) =>
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

export default class Technology extends Component {
    state = {
        lists,
        filters,
        all: true
    };

    setFilter = (e) => {
        e.preventDefault();
        const {filters} = this.state;
        const {index} = e.currentTarget.dataset;

        filters[index].status = !filters[index].status;
        this.setState({
            filters
        });

        this.updateFilters();
        this.updatelists();
    }

    setAll = () => {
        const {filters} = this.state;

        filters.forEach(
            filter => {
                filter.status = false;
            }
        );

        this.setState({
            all: true,
            filters
        });
    }

    updateFilters() {
        const allFiltersTrue = filters.every(filter => filter.status === true);
        const allFiltersFalse = filters.every(filter => filter.status === false);

        if (allFiltersTrue || allFiltersFalse) {
            this.setAll();
        } else {
            this.setState({
                all: false
            });
        }
    }

    updatelists() {
        const {filters} = this.state;
        let newlists = [];
        let a = 0;

        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        lists.forEach((list, listKey) => {
            filters.forEach((filter, filterKey) => {
                const tags = list.tag.split(",");

                tags.forEach((tag) => {
                    if ((tag === filter.name) && (filter.status === true)) {
                        newlists[a] = list;
                        a++;
                    }
                })
                newlists = newlists.filter(unique);

            })
        });

        this.setState({
            lists: newlists
        });
    }

    render() {
        const {filters, all} = this.state;
        return (
            <div className="technology" id="project">
                <Filters
                    onClickAll={this.setAll}
                    onClick={this.setFilter}
                    all={all}
                    filters={filters}/>
                {(all) ? (
                    <Lists lists={lists}/>
                ) : (
                    <Lists lists={this.state.lists}/>
                )}
            </div>
        );
    }
}