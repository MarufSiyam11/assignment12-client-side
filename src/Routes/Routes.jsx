import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/Shared/News/News";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'articles',
            element:<News></News>
        }
      ]
    },
  ]);