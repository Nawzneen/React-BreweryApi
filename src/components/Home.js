import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    (async () => {
      let cardData;
      try {
        const response = await fetch("https://api.openbrewerydb.org/breweries");

        cardData = await response.json();
      } catch (error) {
        console.log(error);
        cardData = [];
      }
      setAllCards(cardData);
      setCards(cardData);
    })();
  }, []);

  const filterCards = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredCards = allCards.filter((card) =>
      `${card.name}`.toLowerCase().includes(value)
    );
    setCards(filteredCards);
  };

  return (
    <div>
      <nav className=" searchNavbar fs-4">
        <input
          className="input-btn"
          placeholder="search here..."
          onInput={filterCards}
        />
        <button className="search-btn fs-4">Seach Brewery</button>
      </nav>

      <div className="row">
        {cards.map((card, index) => (
          <Card key={index} cardData={card} cardID={index} />
        ))}
      </div>
    </div>
  );
}
