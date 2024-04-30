import React from "react"
import Pokecard from "./Pokecard"
import "./Pokedex.css"

function Pokedex(props) {//Index of Pokemon: show individual cards
    let winMessage = null
    if (props.isWinner) winMessage = <span className="Pokedex-winner"> THIS HAND WINS</span>
    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {props.pokemon.map(p=>(<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>))}
            </div>
            <h4>Total experience: {props.exp} {winMessage}</h4>            
        </div>
    )
}
export default Pokedex
