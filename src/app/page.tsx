"use client";
import { useState } from "react";
export default function Home() {
  const [pokemonId, setPokemonId] = useState("");

  function handleButtonClick(number: string) {
    setPokemonId(pokemonId + number);
  }

  function clearInput() {
    setPokemonId("");
  }

  return (
    <div>
      <div id="pokedex">
        <div id="pokedata"></div>
        <div id="inputs">
          <div id="display">{pokemonId}</div>
          <div id="buttonContainer">
            <button
              className="button"
              onClick={() => {
                handleButtonClick("7");
              }}
            >
              7
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("8");
              }}
            >
              8
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("9");
              }}
            >
              9
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("6");
              }}
            >
              6
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("5");
              }}
            >
              5
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("5");
              }}
            >
              4
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("1");
              }}
            >
              1
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("2");
              }}
            >
              2
            </button>
            <button
              className="button"
              onClick={() => {
                handleButtonClick("3");
              }}
            >
              3
            </button>
          </div>
          <button className="searchButton">Search</button>
          <button className="searchButton" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
