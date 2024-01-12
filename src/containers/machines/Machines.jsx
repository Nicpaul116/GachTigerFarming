import React, { useState } from "react";
import "./machines.css";
import img1 from "../../assets/truck5.png";
import img2 from "../../assets/truck1.png";
import img3 from "../../assets/truck2.png";
import img4 from "../../assets/truck3.png";
import img5 from "../../assets/truck4.png";

const Machines = () => {
  const [machine, setmachine] = useState(img1);
  const [name, setname] = useState("Plows");
  const [desc, setdesc] = useState(
    "A plow is a large tractor attachment that drags behind the tractor, using long blades to cut furrows in the soil. This process loosens and turns the soil and helps kill off any surface vegetation not intended to be there. While the soil has to go through several subsequent steps to be ready for planting, plowing is an essential first step."
  );
  const [count, setcount] = useState("1");
  const [price, setprice] = useState("$120000");
  const [transport, settransport] = useState("Company");

  const item1 = () => {
    setmachine(img1);
    setname("Plows");
    setdesc(
      "A plow is a large tractor attachment that drags behind the tractor, using long blades to cut furrows in the soil. This process loosens and turns the soil and helps kill off any surface vegetation not intended to be there. While the soil has to go through several subsequent steps to be ready for planting, plowing is an essential first step."
    );
    setcount("1");
    setprice("$120000");
    settransport("Company");
  };

  const item2 = () => {
    setmachine(img2);
    setname("HARROWS");
    setdesc(
      "Where plowing primes the soil, harrowing further agitates it in preparation for agricultural work. These attachments break down clumps of soil, make the soil surface level and redistribute crop and weed residue to make it easier for new plants to grow. Harrows can also be used after distributing manure and fertilizer, as they can help break up clumps and distribute the fertilizer more evenly."
    );
    setcount("2");
    setprice("$200000");
    settransport("Buyer");
  };

  const item3 = () => {
    setmachine(img3);
    setname("Fertilizer Spreaders");
    setdesc(
      " they spread fertilizer across a field. While there are fertilizer spreaders that can be run separately, most farming operations require a tractor-run fertilizer spreader for quick, evenly distributed fertilization."
    );
    setcount("1");
    setprice("$70000");
    settransport("Company");
  };

  const item4 = () => {
    setmachine(img4);
    setname("Seeders");
    setdesc(
      "Seeders are designed to spread seeds across large plots of land quickly and efficiently. While small farms may use small mechanical seeders or even hand-seeding methods, tractor-pulled seeders are most commonly used in large-scale farms today."
    );
    setcount("5");
    setprice("$500000");
    settransport("Company");
  };

  const item5 = () => {
    setmachine(img5);
    setname("Balers");
    setdesc(
      "Balers are essential for hay, straw and corn stalk collection. These tractor attachments collect these materials and wrap them into more easily manageable bales."
    );
    setcount("10");
    setprice("$110000");
    settransport("Buyer");
  };
  return (
    <div className="container_machines" id="Machines">
      <div className="container_machine_wrap">
        <div className="machine_wrap">
          <div className="machine-img">
            <img src={machine} alt="" style={{ width: 450, height: 450 }} />
          </div>
          <div className="machine-details">
            <div className="details-info">
              <h2>Machine</h2>
              <p>{name}</p>
            </div>
            <div className="details-info">
              <h2>Description</h2>
              <p className="specific">{desc}</p>
            </div>
            <div className="details-info">
              <h2>Machines left</h2>
              <p>{count}</p>
            </div>
            <div className="details-info">
              <h2>Price</h2>
              <p>{price}</p>
            </div>
            <div className="details-info">
              <h2>Transport</h2>
              <p>{transport}</p>
            </div>
          </div>
        </div>
        <div className="machine-buttons">
          <button onClick={item1}>Plows</button>
          <button onClick={item2}>HARROWS</button>
          <button onClick={item3}>Fertilizer Spreaders</button>
          <button onClick={item4}>Seeders</button>
          <button onClick={item5}>Balers</button>
        </div>
      </div>
    </div>
  );
};

export default Machines;
