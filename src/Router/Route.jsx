import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Main from "../Layout/main";
import Practices from "../Pages/Home/Practice/Practices";
import TodoList from "../Pages/TodoList/TodoList";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/practices',
                element:<Practices/>
            },
            {
                path:'/todo-list',
                element:<TodoList/>
            }

        ]
    }
]);

export default router;