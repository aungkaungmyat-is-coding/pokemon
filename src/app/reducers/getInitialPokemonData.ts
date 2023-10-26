import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { pokemonRoute } from "../../utils/constants"

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonRoute)
      return data.results
    } catch (error) {
      console.log("Error==>", error)
    }
  },
)
