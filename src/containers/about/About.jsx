import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [about1, setabout1] = useState("");
  const [about2, setabout2] = useState("");
  const [about3, setabout3] = useState("");
  const [about4, setabout4] = useState("");
  const activ = () => {
    about1 == ""
      ? setabout1(
          " At the very heart of agriculture is the drive to feed the world"
        )
      : setabout1("");
  };
  const activ2 = () => {
    about2 == ""
      ? setabout2(
          "   Wonderful products with long lasting Machines, Thank you GachTiger"
        )
      : setabout2("");
  };

  const activ3 = () => {
    about3 == ""
      ? setabout3(
          " Wonderful products with long lasting Machines, Thank you GachTiger"
        )
      : setabout3("");
  };
  const activ4 = () => {
    about4 == ""
      ? setabout4(
          "We don't just produce food. We produce nutrition for mankind."
        )
      : setabout4("");
  };

  return (
    <div className="about" id="About">
      <div className="about_header">
        {" "}
        <h1>
          <span>What People Say about our Farm</span>
        </h1>
      </div>
      <div className="about_content">
        <div className="about1">
          <button onClick={activ}>Ben Potter</button>

          <div className="wrap-about1">{about1}</div>
        </div>
        <div className="about1">
          <div>
            <button onClick={activ2}>Jim fisher</button>
          </div>
          <div>
            <p>{about2}</p>
          </div>
        </div>
        <div className="about1">
          <div>
            <button onClick={activ3}>Henri Alain</button>
          </div>
          <div>
            <p>{about3}</p>
          </div>
        </div>
        <div className="about1">
          <div>
            <button onClick={activ4}>Nicpaul Gacha</button>
          </div>
          <div>
            <p>{about4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
