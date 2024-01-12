import React, { useEffect, useState } from "react";
import "./livestock.css";
import broiler from "../../assets/chicken-13826.png";
import duck from "../../assets/duck-19421.png";
import pigs from "../../assets/5a3aea296953c3.19162533151381047343147991.png";
import dairycow from "../../assets/cow-12871.png";
import brownswiss from "../../assets/pngimg.com - cow_PNG50601.png";

const Livestock = () => {
  const [animalsimg, setanimalsimg] = useState(broiler);
  const [info1, setinfo1] = useState("laying eggs / Meat");
  const [desc, setdesc] = useState(
    "average-sized fowls, characterized by smaller heads, short beaks and wings, and a round body perched on featherless legs. Exact size varies greatly among breeds, as does color. In many breeds, both sexes will have fleshy skin folds on the chin and atop the head, known as wattles and combs, respectively."
  );
  const [count, setcount] = useState("50");
  const [Price, setPrice] = useState("$100");
  const [status, setStatus] = useState("Chicks");
  const [breed, setbreed] = useState("Layer");
  const [transport, settransport] = useState("Buyer");

  const img1 = () => {
    setanimalsimg(broiler);
    setinfo1("laying eggs / Meat");
    setdesc(
      "average-sized fowls, characterized by smaller heads, short beaks and wings, and a round body perched on featherless legs. Exact size varies greatly among breeds, as does color. In many breeds, both sexes will have fleshy skin folds on the chin and atop the head, known as wattles and combs, respectively."
    );
    setcount("50");
    setPrice("$100");
    setStatus("Chicks");
    setbreed("Layer");
    settransport("Buyer");
  };

  const img2 = () => {
    setanimalsimg(duck);
    setinfo1("Made for meat");
    setdesc(
      "any of various species of relatively small, short-necked, large-billed waterfowl. In true ducks—i.e., those classified in the subfamily Anatinae in the waterfowl family Anatidae—the legs are placed rearward, as in swans, rather than forward, as in geese. The result is a distinctive waddling gait."
    );
    setcount("20");
    setPrice("$120");
    setStatus("Ducklins");
    setbreed("Broiler");
    settransport("Buyer");
  };

  const img3 = () => {
    setanimalsimg(pigs);
    setinfo1("Meat production");
    setdesc(
      "stout-bodied, short-legged, omnivorous mammals, with thick skin usually sparsely coated with short bristles. Their hooves have two functional and two nonfunctional digits. Domestic North American pigs originated from wild stocks still found in European, Asian, and North African forests"
    );
    setcount("1");
    setPrice("$500");
    setStatus("Adult");
    setbreed("Enviropig");
    settransport("Company");
  };

  const img4 = () => {
    setanimalsimg(dairycow);
    setinfo1("Milk Production");
    setdesc(
      "a domestic animal that is very common, and can be seen often. It is found worldwide in various sizes, shapes, and colours. The cow has two ears and eyes, one big nose, a long tail, four limbs, and two sharp horns. It can live in jungles, villages, pastures, and even cities."
    );
    setcount("2");
    setPrice("$1000");
    setStatus("Adult");
    setbreed("Holstein Friesian");
    settransport("Depends on Buyer");
  };

  const img5 = () => {
    setanimalsimg(brownswiss);
    setinfo1("Meat Production");
    setdesc(
      "a domestic animal that is very common, and can be seen often. It is found worldwide in various sizes, shapes, and colours. The cow has two ears and eyes, one big nose, a long tail, four limbs, and two sharp horns. It can live in jungles, villages, pastures, and even cities."
    );
    setcount("2");
    setPrice("$1200");
    setStatus("Vary");
    setbreed("Hereford");
    settransport("Depends on Buyer");
  };

  return (
    <div className="container_livestock" id="Livestock">
      <div className="container_livestock_info">
        <div className="container_livestock_wrap fade-in-fwd">
          <div className="livestock-img ">
            <img src={animalsimg} alt="#" />
          </div>
          <div className="details-wrap">
            <div className="livestock-details">
              <h2>Production</h2>
              <p>{info1}</p>
            </div>
            <div className="livestock-details">
              <h2>Description</h2>
              <p className="details-p">{desc}</p>
            </div>
            <div className="livestock-details">
              <h2>Amount</h2>
              <p>{count}</p>
            </div>
            <div className="livestock-details">
              <h2>Price</h2>
              <p>{Price}</p>
            </div>
            <div className="livestock-details">
              <h2>Age</h2>
              <p>{status}</p>
            </div>
            <div className="livestock-details">
              <h2>Breed</h2>
              <p>{breed}</p>
            </div>
            <div className="livestock-details">
              <h2>Transport</h2>
              <p>{transport}</p>
            </div>
          </div>
        </div>
        <div className="livestock-buttons">
          <button onClick={img1}>broiler</button>
          <button onClick={img2}>duck</button>
          <button onClick={img3}>pigs</button>
          <button onClick={img4}>dairycow</button>
          <button onClick={img5}>swiss</button>
        </div>
      </div>
    </div>
  );
};

export default Livestock;
