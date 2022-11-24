import Home from "../../pages/home";
import Projects from "../../pages/projects";
import ProjectIdPage from "../../pages/project-id-page";

export const routes = [
    {path: '/home', component: Home, exact: true},
    {path: '/projects', component: Projects, exact: true},
    {path: '/projects/:id', component: ProjectIdPage, exact: true},
]