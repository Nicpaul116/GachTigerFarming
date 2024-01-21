import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";

const Menu = () => (
  <>
    <p>
      <Link to="#Home" className="link1">
        Home
      </Link>
    </p>
    <p>
      <Link to="#About" className="link7">
        About
      </Link>
    </p>
    <p>
      <Link to="#Livestock" className="link2">
        Livestock
      </Link>
    </p>

    <p>
      <Link to="#Machines" className="link4">
        Machines
      </Link>
    </p>
    <p>
      <Link to="#Blog" className="link5">
        Blog
      </Link>
    </p>
    <p>
      <Link to="#Contact" className="link6">
        Contact
      </Link>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar_header">
      <div className="navbar_wrap">
        <div className="navbar_header1">
          <h1>
            Gach<span>Tiger</span>'s
          </h1>
        </div>
        <div className="navbar_links">
          <Menu />
        </div>
        <div className="navbar_login">
          <div className="login">
            <Link to="/Signin">
              <button>Login</button>
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar_menu-container scale-up">
              <div className="navbar_menu-container-links">
                <Menu />
                <div className="navbar_login-links">
                  <div className="login">
                    <Link to="/Signin">
                      <button>Login</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
