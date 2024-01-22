import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Scroll.css";

const Scroll = () => {
  const [showTopBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showTopBtn && (
        <div className="Scroll_btn">
          <ul>
            <li>
              <FaAngleUp onClick={goToTop} className="Scroll_icon" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Scroll;
