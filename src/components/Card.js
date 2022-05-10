import React from "react";
import { useNavigate } from "react-router-dom";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function Card({ cardData, cardID }) {
  let navigate = useNavigate();
  const toDetails = () => {
    navigate("/Details", { state: { id: cardID, cardData: cardData } });
  };

  return (
    <div className="col-md-4 beer-card   ">
      <div className="card--box ">
        <div className="card--stats">
          <p className="card--name">{cardData.name}</p>
          <p className="card--type">{cardData.brewery_type}</p>
          <p className="card--city">{cardData.city}</p>
        </div>
        <button
          className="card--details--btn fs-5"
          onClick={() => {
            toDetails();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
