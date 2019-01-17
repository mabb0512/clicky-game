import React from "react";
import "./CatCard.css";

const CatCard = props => (
  <div className="card" onClick={props.clickCat}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default CatCard;
