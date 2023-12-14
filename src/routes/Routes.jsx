
import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../home/Home";
import LatestProduct from "../latest/LatestProduct";
import Aboutus from "../about/Aboutus";
import Login from "../login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/about",
          element:<Aboutus></Aboutus>
        },
        {
          path:"/latest",
          element:<LatestProduct></LatestProduct>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;