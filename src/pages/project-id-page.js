import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

import lists from '../components/technology/configs/technology.config.json';
import Header from "../components/header";

import './project-id-page.css';
import TagList from "../components/filter-list/tag-list";

const ProjectIdPage = () => {
    let {id} = useParams();
    const item = lists.filter(list => list.id == id);
    const {pathname} = useLocation();

    return (
        <>
            <Header pathname={pathname}/>
            <div className="project-id wrapper-gradient-second">
                <div className="container page-container">
                    <div className="project-id__header">
                        <Link className="btn btn__l project-id__btn" to={'/projects'}><span></span> To
                            projects</Link>
                        <h2 className="main__title">{item[0].label}</h2>
                        <span className="project-id__subtitle">{item[0].sublabel}</span>
                    </div>

                    <div className="project-id__main">
                        <div className="project-id__img">
                            <img src={item[0].src} alt={item[0].label}/>
                            <TagList list={item[0]} />
                        </div>
                        <div className="project-id__info">
                            <div className="project-id__content">
                                <h3 className="project-id__content-title">{item[0].description}</h3>
                                <p className="project-id__content-text">{item[0].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectIdPage;