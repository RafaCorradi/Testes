import React, { Component } from 'react';
import '../css/Card.css';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Card extends Component {
    render () {
        let thisPokemon = {};
        thisPokemon.name = capitalizeFirstLetter(this.props.pokemon.name);
        thisPokemon.id = this.props.pokemon.id;
        thisPokemon.sprite = this.props.pokemon.sprites.front_default;
        thisPokemon.height = this.props.pokemon.height;
        thisPokemon.weight = this.props.pokemon.weight;

        if (this.props.pokemon.types.length > 1) {
            for (let i = 0; i < this.props.pokemon.types.length; i++) {
                if (this.props.pokemon.types[i].slot === 1) {
                    thisPokemon.type_1 = capitalizeFirstLetter(this.props.pokemon.types[i].type.name);
                } else if (this.props.pokemon.types[i].slot === 2) {
                    thisPokemon.type_2 = capitalizeFirstLetter(this.props.pokemon.types[i].type.name);
                }
            }
            thisPokemon.type = thisPokemon.type_1 + '/' + thisPokemon.type_2;
        } else if (this.props.pokemon.types.length === 1) {
            thisPokemon.type = capitalizeFirstLetter(this.props.pokemon.types[0].type.name);
        }
        
        return (
            <li className="card">
                <div className="flip-container">
                    <div className="flipper">
                        <div className="front_card">
                            <img src={thisPokemon.sprite} alt={thisPokemon.name} />
                            <h4>{thisPokemon.name}</h4>
                            <h4>#{thisPokemon.id}</h4>
                        </div>
                        <div className="back_card">
                            <img src={thisPokemon.sprite} alt={thisPokemon.name} />
                            <p>Name: {thisPokemon.name}</p>
                            <p>Pokedex Nº: #{thisPokemon.id}</p>
                            <p>Height: {thisPokemon.height}</p>
                            <p>Weight: {thisPokemon.weight}</p>
                            <p>Type: {thisPokemon.type}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;