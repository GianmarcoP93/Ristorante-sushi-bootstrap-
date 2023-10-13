import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import California from "./assets/California.jpg";
import DynamiteRoll from "./assets/Dynamite-Roll.jpg";
import gio from "./assets/gio.png";
import salmone from "./assets/hosomaki.jpg";
import inside from "./assets/insideOut.png";
import nigiriSalmone from "./assets/nigiriSalmone.jpg";
import nigiriAnguilla from "./assets/nigiriAnguilla.png";
import philadelphia from "./assets/PhiladelphiaRoll.jpg";
import sashimi from "./assets/sashimi.jpg";
import spicy from "./assets/SpicySalmon.jpg";
import tiger from "./assets/tiger-roll.jpg";
import uramaki from "./assets/uramakiTempura.jpg";

const App = () => {
  const [roll, setRoll] = useState([
    {
      id: 0,
      name: "California Roll",
      img: California,
      price: 12.99,
      quantità: 0,
    },
    {
      id: 1,
      name: "Dynamite Roll",
      img: DynamiteRoll,
      price: 14.99,
      quantità: 0,
    },
    {
      id: 2,
      name: "Sushi giò",
      img: gio,
      price: 3.99,
      quantità: 0,
    },
    {
      id: 3,
      name: "Hosomaki salmone",
      img: salmone,
      price: 4.99,
      quantità: 0,
    },
    {
      id: 4,
      name: "Inside out",
      img: inside,
      price: 9.99,
      quantità: 0,
    },
    {
      id: 5,
      name: "Nigiri salmone",
      img: nigiriSalmone,
      price: 3.99,
      quantità: 0,
    },
    {
      id: 6,
      name: "Nigiri anguilla",
      img: nigiriAnguilla,
      price: 3.99,
      quantità: 0,
    },
    {
      id: 7,
      name: "Philadelphia roll",
      img: philadelphia,
      price: 8.99,
      quantità: 0,
    },
    {
      id: 8,
      name: "Sashimi salmon",
      img: sashimi,
      price: 5.99,
      quantità: 0,
    },
    {
      id: 9,
      name: "Spicy salmon",
      img: spicy,
      price: 11.99,
      quantità: 0,
    },
    {
      id: 10,
      name: "Tiger roll",
      img: tiger,
      price: 13.99,
      quantità: 0,
    },
    {
      id: 11,
      name: "Uramaki tempura",
      img: uramaki,
      price: 7.99,
      quantità: 0,
    },
  ]);

  const handleDelete = (cardId) => {
    const updatedCards = roll.filter((card) => card.id !== cardId);
    setRoll(updatedCards);
  };

  const handleIncrement = (cardId) => {
    const cards = [...roll];
    const id = cards.findIndex((c) => c.id === cardId);
    cards[id].quantità++;
    setRoll(cards);
  };

  const handleDecrement = (cardId) => {
    const cards = [...roll];
    const id = cards.findIndex((c) => c.id === cardId);

    if (cards[id].quantità > 0) {
      cards[id].quantità--;

      setRoll(cards);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <h1>Cosa desideri ordinare?</h1>

          {roll.map((roll) => {
            return (
              <Card
                key={roll.id}
                title={roll.name}
                img={roll.img}
                price={roll.price}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                cardId={roll.id}
                quantità={roll.quantità}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
