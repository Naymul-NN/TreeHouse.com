import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;