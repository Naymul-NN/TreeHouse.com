import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-50 top-0 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
              <li><Link>Home</Link></li>
              <li><Link>About us</Link></li>
              <li >
                <Link>Products</Link>
                <ul className="p-2 w-44">
                  <li ><Link>Flower tree</Link></li>
                  <li><Link>fruits tree</Link></li>
                  <li><Link>ousodi tree</Link></li>
                  <li><Link>seeds</Link></li>
                </ul>
              </li>
              <li><Link>Blog</Link></li>
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl"><img className="w-20" src="https://i.ibb.co/M7rS58Z/360-F-289114478-jj-FEh-EX9qu3-Wmtpsly-Zf-K5-Ih-WT4-VIU2s.jpg" alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>Products</summary>
                <ul className="p-2 w-32">
                  <li><Link to="/flower">Flower tree</Link></li>
                  <li><Link to="/fruits">fruits tree</Link></li>
                  <li><Link to="/madecine">medecine tree</Link></li>
                  <li><Link to="/seeds">seeds</Link></li>
                </ul>
              </details>
            </li>
            <li><Link>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;