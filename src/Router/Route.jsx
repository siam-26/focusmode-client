import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Main from "../Layout/main";
import Practices from "../Pages/Home/Practice/Practices";

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
            }

        ]
    }
]);

export default router;