import React from 'react'
import './Pokecard.css'
// https://pokeapi.co
const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard=props=>
    <div className="Pokecard">
        <div className="Pokecard-title">{ props.name }</div>
        <img className="Pokecard-image" src={`${POKE_API}${props.id}.png`} alt=''/>
        <div className="Pokecard-data">Type:{props.type}</div>
        <div className="Pokecard-data">Experience:{props.exp}</div>
    </div>
export default Pokecard
