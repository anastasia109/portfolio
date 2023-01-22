import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

import lists from '../components/technology/configs/technology.config.json';
import TagList from "../components/filter-list/tag-list";
import Header from "../components/header";

import './project-id-page.css';

import defaultImage from '../static/default-image.jpg';

const ProjectIdPage = () => {
    let {id} = useParams();
    const {pathname} = useLocation();
    const [showPopup, setShowPopup] = useState(false);

    const item = lists.filter(list => list.id === Number(id));

    const handleShowPopup = () => {
        setShowPopup(!showPopup);
    }

    const handleHidePopup = () => {
        setShowPopup(!showPopup);
    }

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
                        <div className="project-id__img" onClick={handleShowPopup}>
                            {item[0].src ? <img src={item[0].src} alt={item[0].label}/> :
                                <img src={defaultImage} alt="default"/>
                            }
                        </div>

                        {showPopup &&
                            <div className="project-id__popup" onClick={handleHidePopup}>
                                <div className="project-id__popup-close">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="project-id__popup-inner">
                                    {item[0].imageFull ? <img src={item[0].imageFull} alt={item[0].label}
                                                              onClick={(e) => e.stopPropagation()}/> :
                                        <img src={defaultImage} alt="default" onClick={(e) => e.stopPropagation()}/>}
                                </div>
                            </div>
                        }

                        <div className="project-id__info">
                            <div className="project-id__content">
                                <h3 className="project-id__content-title">{item[0].description}</h3>
                                <p className="project-id__content-text">{item[0].content}</p>
                                <TagList list={item[0]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectIdPage;