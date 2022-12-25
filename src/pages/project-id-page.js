import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";

import lists from '../components/technology/configs/technology.config.json';
import Header from "../components/header";

const ProjectIdPage = () => {
    let {id} = useParams();
    const item = lists.filter(list => list.id == id);
    const {pathname} = useLocation();

    return (
        <>
            <Header pathname={pathname}/>
            <div className='container' style={{marginTop: "50px", marginBottom: "50px"}}>
                <h2 style={{marginBottom: "20px"}}>
                    Welcome to the {item[0].label} project!
                </h2>
                <Link className="btn btn__l" to={'/projects'}>To projects</Link>
            </div>
        </>
    );
};

export default ProjectIdPage;