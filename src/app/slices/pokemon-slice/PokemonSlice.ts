import { createSlice } from "@reduxjs/toolkit"
import { PokemonTypeInitialState } from "../../../utils/types"
import { getInitialPokemonData } from "../../reducers/getInitialPokemonData"

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
}

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
  },
})

export const {} = PokemonSlice.actions
