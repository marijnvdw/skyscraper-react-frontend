import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import SkyscraperList from "./SkyscraperList.jsx";
import SkyscraperCreateForm from "./SkyscraperCreateForm.jsx";
import SkyscraperDetail from "./SkyscraperDetail.jsx";
import SkyscraperEdit from "./SkyscraperEdit.jsx";
import PageNotFound from "./PageNotFound.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/skyscraper',
                element: <SkyscraperList/>
            },
            {
                path: '/skyscraper/create',
                element: <SkyscraperCreateForm/>
            },
            {
                path: '/skyscraper/:id',
                element: <SkyscraperDetail/>
            },
            {
                path: '/skyscraper/edit/:id',
                element: <SkyscraperEdit/>
            },
            {
                path: '/skyscraper/pagenotfound',
                element: <PageNotFound/>
            },{
                path: '*',
                element: <PageNotFound/>
            }

        ]
    }
]);

function App() {

    return <RouterProvider router={router}/>;
}

export default App
