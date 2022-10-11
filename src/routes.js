import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Root from "./components/Root";
import Home from './components/Home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {path: '/', element: <Home></Home>},
            {path: 'blog', element: <Blog></Blog>},
            {path: 'about', element: <About></About>},
            
            
        ]
    },
])

export default router