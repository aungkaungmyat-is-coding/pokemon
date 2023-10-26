import React, { useEffect } from "react"
import Wrapper from "../../sections/wrapper/Wrapper"
import { getInitialPokemonData } from "../../app/reducers/getInitialPokemonData"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getPokemonData } from "../../app/reducers/getPokemonData"

const Search = () => {
  const dispatch = useAppDispatch()

  const { allPokemon } = useAppSelector(({ pokemon }) => pokemon)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon]
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20)
      dispatch(getPokemonData(randomPokemonsId))
    }
  }, [allPokemon, dispatch])

  return <div>search</div>
}

export default Wrapper(Search)
