import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ isHomePage }) => {
  const [open, setOpen] = useState(false);

  const user = true; // Simulating user state

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="./public/images/logo.png" alt="Logo" />
          <span>GiriEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {isHomePage ? (
          // Show Login and Signup buttons on the Home page
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="register">
              Sign up
            </Link>
          </>
        ) : (
          // Show User Profile on other pages
          user && (
            <div className="user">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Avatar"
              />
              <span>John Doe</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          )
        )}
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="./public/images/menu.png" alt="Menu" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          {isHomePage ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          ) : (
            <Link to="/profile">Profile</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
