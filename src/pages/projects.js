import React from 'react';
import Technology from "../components/technology";
import Header from "../components/header";
import {useLocation} from "react-router-dom";


const Projects = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Header pathname={pathname}/>
            <div className='container'>
                <Technology />
            </div>
        </>
    );
};

export default Projects;