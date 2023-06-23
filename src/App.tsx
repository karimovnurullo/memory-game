import { Card } from "./components";
// Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
import classes from "./assets/css/board.module.scss";
import { useState } from "react";
interface Image {
  src: string;
}

interface CardData extends Image {
  id: number;
}

function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [turn, setTurn] = useState(0);

  const images: Image[] = [
    { src: "1" },
    { src: "2" },
    { src: "3" },
    { src: "4" },
    { src: "5" },
    { src: "6" },
    { src: "7" },
    { src: "8" },
    { src: "9" },
    { src: "10" },
  ];
  let arr = [...images, ...images]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
  // setCards(arr);
  // setTurn(0);

  const hundleCards = () => {};
  const handleCardClick = () => {
    console.log("Card clicked");
  };
  return (
    <div className={classes.board}>
      {arr.map(({ src, id }, idx) => (
        <Card card={handleCardClick} src={src} flipped={true} key={id} />
      ))}
      {/* <Card card={handleCardClick} src={"1"} flipped={true} /> */}
    </div>
  );
}

export default App;
