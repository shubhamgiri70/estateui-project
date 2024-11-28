import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
