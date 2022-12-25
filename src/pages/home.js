import React from 'react';
import Main from "../components/main";
import Header from "../components/header";
import {useLocation} from "react-router-dom";

const Home = () => {
    const {pathname} = useLocation();

    return (
        <>
            <Header pathname={pathname}/>
            <Main/>
        </>
    );
};

export default Home;
