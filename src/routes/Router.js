import React from 'react'
import PokemonsListScreen from '../screens/PokemonsListScreen/PokemonsListScreen'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen'
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<PokemonsListScreen/>}/>
                <Route exact path={"/pokemon/:name"} element={<PokemonDetailScreen/>}/>
                <Route exact path={"/pokedex"} element={<PokedexScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router