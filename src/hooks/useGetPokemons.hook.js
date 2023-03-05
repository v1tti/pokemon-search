import axios from "axios";
import { useState } from "react";

export function useGetPokemons() {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(null)
    const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    
      async function fetchPokemons() {
        setIsLoading(true)
        try {
            const response = await axios.get(`${POKEMON_URL}`)
            setPokemons(response.data.results)
        } catch(error) {
            setHasError('An error has occured')
        } finally {
            setIsLoading(false)
        }
      }
    
      
    
    
    return {pokemons, setPokemons, isLoading, hasError, fetchPokemons}
}
