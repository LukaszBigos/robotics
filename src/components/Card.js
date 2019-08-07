import React from "react";

import "./Card.css";

export default function Card({ id, name }) {
  return (
    <div className="single-card">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
