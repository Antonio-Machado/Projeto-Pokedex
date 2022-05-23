import React, { useEffect , useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import {BASE_URL } from "../constants/urls"
import axios from 'axios'




const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]) //nome do pokemon + url
    const [pokemons, setPokemons] = useState([]) //lista dos 20 pokemons com todas as habilidadesF₢₢                  
    const [pokedex, setPokedex] = useState([])

 

    useEffect(() => {
        getPokemonNames()
    }, []) 

    useEffect(() => {
        const newList = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then((response) => {
                newList.push(response.data)
                if(newList.length === 20){
                    const orderedList = newList.sort((a,b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((error) => console.log(error.message))
    })
    },[pokemonNames])

    const getPokemonNames = () => {
        axios.get(`${BASE_URL}/pokemon`)
        .then((response) => setPokemonNames(response.data.results)) //o problema é aqui. mudei aqui e renderizou
        .catch((error) => console.log(error.message))
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    return(
        <GlobalStateContext.Provider value={data}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState