import React, { useState } from "react";
import "./styles.css";

var MoviesData = {
  Humour: [
    { name: "The Shithouse", Rating: "4/5" },
    { name: "Downhill", Rating: "3/5" },
    { name: "Friendsgiving", Rating: "3.5/5" },
    { name: "Love Wedding Repeat", Rating: "4.5/5" }
  ],
  Horror: [
    { name: "Ready or Not", Rating: "4/5" },
    { name: "One Cut of the Dead", Rating: "3/5" },
    { name: "Depraved", Rating: "3.5/5" },
    { name: "Crawl", Rating: "4.2/5" }
  ],
  Romance: [
    { name: "Falling Inn Love", Rating: "4.5/5" },
    { name: "The Last Summer", Rating: "3.5/5" },
    { name: "Plus One", Rating: "3.2/5" },
    { name: "The Sun Is Also a Star", Rating: "4/5" }
  ],
  Action: [
    { name: "John Wick: Chapter 3 – Parabellum", Rating: "4.7/5" },
    { name: "The Standoff at Sparrow Creek", Rating: "3.5/5" },
    { name: "Shadow", Rating: "3.2/5" },
    { name: "Avengement", Rating: "4.3/5" }
  ],
  Scifi: [
    { name: "High Life", Rating: "4.6/5" },
    { name: "Ad Astra", Rating: "3.3/5" },
    { name: "Glass", Rating: "3.9/5" },
    { name: " Diamantino", Rating: "4/5" }
  ]
};

export default function App() {
  var [buttonslt, setbuttonslt] = useState("Romance");

  function buttonClickHandler(items) {
    buttonslt = items;
    setbuttonslt(buttonslt);

    console.log("clicked", items);
  }

  return (
    <div className="App">
      <h1 className="heading">🎦Movie Recommender🎦</h1>
      <h2>Select from the the list of Genres to get our recommendation list</h2>

      <ul>
        {Object.keys(MoviesData).map(function (items) {
          // console.log(items)
          return (
            <li
              onClick={() => buttonClickHandler(items)}
              style={{ display: "inline", padding: "0.5rem" }}
            >
              <button className="button">{items}</button>
            </li>
          );
        })}
      </ul>

      <ul>
        {MoviesData[buttonslt].map(function (genre) {
          // console.log(items)
          return (
            <li style={{ padding: "0.5rem", listStyle: "none" }}>
              <span className="genre-list">
                <h3>{genre.name}</h3>
                <div>Rating: {genre.Rating}</div>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
