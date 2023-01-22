import React from 'react';
import Technology from "../components/technology";
import Header from "../components/header";
import {useLocation} from "react-router-dom";
import {PathContext} from "../components/utils/path-context";

const Projects = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Header pathname={pathname}/>
            <div className='container'>
                <PathContext.Provider value={{pathname}}>
                    <Technology />
                </PathContext.Provider>
            </div>
        </>
    );
};

export default Projects;