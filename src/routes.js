import { createBrowserRouter } from "react-router-dom";
import Topics from "./components/Topics";
import Blog from "./components/Blog";
import Root from "./components/Root";
import Home from './components/Home';
import Statistics from "./components/Statistics";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {path: '/', element: <Home></Home>},
            {path: 'home', element: <Home></Home>},
            {path: 'topics', element: <Topics></Topics>},
            {path: 'statistics', element: <Statistics></Statistics>},
            {path: 'blog', element: <Blog></Blog>},
            
            
        ]
    },
])

export default router