import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../../pages/home";
import Projects from "../../pages/projects";
import ProjectIdPage from "../../pages/project-id-page";
import Error from "../../pages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/projects/:id",
        element: <ProjectIdPage />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);




const AppRouter = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
};

export default AppRouter;