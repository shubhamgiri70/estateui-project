import { Outlet, useLocation } from "react-router-dom";
import "./layout.scss";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="layout">
      {/* Pass isHomePage prop */}
      <div className="navbar">
        <Navbar isHomePage={isHomePage} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
