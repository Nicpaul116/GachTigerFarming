import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info-wrap">
      <div className="info-all">
        <div className="info-not">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="number" placeholder="Enter Age" />
            <input type="text" placeholder="ID" />
            <select name="Liverstock" id="Livestock">
              <option value="Layer">Layer</option>
              <option value="Duck">Duck</option>
              <option value="Pig">Pig</option>
              <option value="Dairy Cow">Dairy Cow</option>
              <option value="Hereford">Hereford</option>
            </select>
            <input type="number" placeholder="0" min={0} max={100} />
            <input type="text" placeholder="Select transport" />
            <select name="Age" id="Age">
              <option value="Small">Small</option>
              <option value="6 weeks">6 Weeks</option>
              <option value="1 year">1 year</option>
              <option value="5 years">5 years</option>
            </select>
          </form>
          <div className="info-button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
