import React from "react";
import Card from "./Card";
import "./CardList.css";

export default function CardList({ robots }) {
  const card = robots.map((robot, index) => {
    return <Card key={index} id={robot.id} name={robot.login} />;
  });
  return <div className="card-container">{card}</div>;
}
