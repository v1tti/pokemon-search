import { useEffect, useMemo, useRef, useState } from "react";
import { useGetPokemons } from "../../../hooks/useGetPokemons.hook";
import "./search.css";
import pokeBallLogo from "../../../assets/images/pokeball.png";
import searchIcon from "../../../assets/images/SeekPng.com_searchicon-png_1177717.png";

export function HomeScreen() {
  const { pokemons, setPokemons, isLoading, hasError, fetchPokemons } =
    useGetPokemons();
  const [query, setQuery] = useState("");
  const POKEMON_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const filteredQuery = useMemo(() => {
    return pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [pokemons, query]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="search-container">
      <div className="search-title">
        <div className="logo-and-title-container">
          <img
            className="pokeball-logo"
            src={pokeBallLogo}
            alt="pokeBall logo"
          ></img>
          Pokédex
        </div>
        <div className="input-and-icon-container">
          <img className="search-icon" src={searchIcon} alt="search icon"></img>
          <input
          className="search-pokemon-input"
            placeholder="Search Pokemon"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
          />
        </div>
      </div>

      <div className="search-results-container">
        {query !== "" ? (
          filteredQuery.map(({ name, url }) => (
            <div className="pokemon-card">
              <div>
                <img
                  className="pokemon-image"
                  src={`${POKEMON_URL}${url
                    .replace("https://pokeapi.co/api/v2/pokemon/", "")
                    .slice(0, -1)}.png`}
                  alt={`${name}`}
                ></img>
              </div>
              <div className="pokemon-card-name-container">
                <div className="pokemon-card-name">{name}</div>
              </div>
            </div>
          ))
        ) : (
          <div>
            As soon as you type something in the search bar, the pokemon will
            appear here
          </div>
        )}
      </div>
    </div>
  );
}
