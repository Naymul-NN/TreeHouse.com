
import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../home/Home";
import LatestProduct from "../latest/LatestProduct";

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
          path:"/latest",
          element:<LatestProduct></LatestProduct>
        }
      ]
    },
  ]);

  export default router;