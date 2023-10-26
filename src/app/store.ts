import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { AppSlice } from "./slices/app-slice/AppSlice"
import { PokemonSlice } from "./slices/pokemon-slice/PokemonSlice"

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: PokemonSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
