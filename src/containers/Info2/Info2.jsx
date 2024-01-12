import React from "react";
import "./info2.css";
const Info2 = () => {
  return (
    <div className="info2-wrap">
      <div className="info2-all">
        <div className="info2-details">
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="number" placeholder="Enter Age" />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone number"
            />
            <select name="Machines" id="Machines">
              <option value="Plows">Plows</option>
              <option value="Harrows">Harrows</option>
              <option value="Fertilizer Spreaders">Fertilizer Spreaders</option>
              <option value="Seeders">Seeders</option>
              <option value="Balers">Balers</option>
            </select>
            <input type="text" placeholder="Enter number of Machines" />
            <input type="text" placeholder="Select transport" />
          </form>
          <div className="info2-button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
