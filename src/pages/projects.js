import React, {useMemo, useState} from 'react';
import Header from "../components/header";
import {useLocation} from "react-router-dom";
import {PathContext} from "../utils/path-context";
import FilterSelect from "../components/UI/select/filter-select";
import FilterInput from "../components/UI/input/filter-input";
import FilterList from "../components/filter-list";
import lists from "../components/technology/configs/technology.config.json";

import './projects-page.scss';

const Projects = () => {
    const {pathname} = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const sortedItems = useMemo(() => {
        if (selectedSort) {
            return [...lists].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return lists;

    }, [selectedSort])

    const sortedAndSearch = useMemo(() => {
        return sortedItems.filter(item => item.tags.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedItems])

    const sortItems = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <>
            <Header pathname={pathname}/>
            <div className="projects-page">
                <div className='container'>
                    <PathContext.Provider value={{pathname}}>
                        <div className="technology" id="project">
                            <h3 className="main__title aos-init" data-aos="animation-scale-y"
                                data-aos-delay="150">Projects</h3>
                            <div className="projects-page__filters">
                                <FilterSelect
                                    value={selectedSort}
                                    onChange={sortItems}
                                    defaultValue="Sort by"
                                    options={[
                                        {id: '1', value: 'label', name: 'by name'},
                                        {id: '2', value: 'tags', name: 'by tags'}
                                    ]}
                                />
                                <FilterInput
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search"
                                />
                            </div>
                            <div className="inner">
                                {sortedAndSearch.length
                                    ?
                                    <FilterList lists={sortedAndSearch}/>
                                    :
                                    <h4>
                                        Проектів не найдено
                                    </h4>
                                }
                            </div>
                        </div>

                    </PathContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Projects;