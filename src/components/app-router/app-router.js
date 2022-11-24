import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from "../../pages/home";
import Projects from "../../pages/projects";
import ProjectIdPage from "../../pages/project-id-page";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/projects/:id">
                    <ProjectIdPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;