import React from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header_wrap">
      <div className="header_heading">
        <h1>
          Gach<span>Tiger</span>'s Farming
        </h1>
        <p>
          It is a newly establish company with a goal to satisfy the needs of a
          customer and provide excellent services
        </p>
        <Link to="#Blog">
          <button className="header_button">See Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
