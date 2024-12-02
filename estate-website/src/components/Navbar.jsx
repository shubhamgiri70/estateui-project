import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="./public/images/logo.png" />
            <span>GiriEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <span>John Doe</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/">Login</a>
              <a href="/" className="register">
                Sign up
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="./public/images/menu.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Login</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
