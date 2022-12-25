import React from 'react';
import Header from "../components/header";
import {useLocation} from "react-router-dom";

const Error = () => {
    const {pathname} = useLocation();
    return (
        <div style={{margin:"100px", textAlign: "center", fontSize: "56px"}}>
            <Header pathname={pathname}/>
            404
        </div>
    );
};

export default Error;