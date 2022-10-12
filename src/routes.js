import { createBrowserRouter } from "react-router-dom";
import Topics from "./components/Topics";
import Blog from "./components/Blog";
import Root from "./components/Root";
import Home from './components/Home';
import Statistics from "./components/Statistics";
import ShowError from "./components/ShowError";
import QuizQuestions from "./components/QuizQuestions";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ShowError></ShowError>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),

        children:[
            {path: '/', element: <Home></Home>},
            {path: 'home', element: <Home></Home>},
            {path: 'topics', element: <Topics></Topics>},

            {
                path: 'quiz/:id',
                element: <QuizQuestions></QuizQuestions>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), 
            },

            {path: 'statistics', element: <Statistics></Statistics>},
            {path: 'blog', element: <Blog></Blog>},
            
            
        ]
    },
])

export default router