import React from "react";
import CardItems from "../CardItems/CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={require("../../media/images/img-9.jpg")}
              text="Explore the hidden waterfalls deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />

            <CardItems
              src={require("../../media/images/img-2.jpg")}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={require("../../media/images/img-3.jpg")}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src={require("../../media/images/img-4.jpg")}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItems
              src={require("../../media/images/img-8.jpg")}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
