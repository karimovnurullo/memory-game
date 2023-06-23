import React, { useState } from "react";
import classes from "../assets/css/card.module.css";
import "../assets/css/main.css";
import cover from "../assets/images/cover.jpg";

interface CardProps {
  card: () => void;
  src: string;
  flipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, flipped, src }) => {
  const [active, setActive] = useState("");
  // let img = `../assets/images/${src}.jpg`;
  let img = require(`../assets/images/${src}.jpg`);

  const handleClick = () => {
    card();
    setActive("flipped");
    setTimeout(() => {
      setActive("");
    }, 1000);
  };
  return (
    <div className={`item`} onClick={handleClick}>
      <div className={`${active}`}>
        <img src={img} className="cover" alt="" />
        <img src={cover} className="main-img" alt="" />
      </div>
    </div>
  );
};

export default Card;
