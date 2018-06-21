import React, { Component } from 'react';

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
        } else if (this.props.pokemon.types.length === 1) {
            thisPokemon.type_1 = capitalizeFirstLetter(this.props.pokemon.types[0].type.name);
        }
        
        return (
            <li className="card">
                <div className="flipper">
                    <div className="front_card">
                        <img src={thisPokemon.sprite} alt={thisPokemon.name} />
                        <h3>Name: {thisPokemon.name}</h3>
                        <h3>ID: #{thisPokemon.id}</h3>
                    </div>
                    <div className="back_card">
                        <img src={thisPokemon.sprite} alt={thisPokemon.name} />
                        <p>Nome: {thisPokemon.name}</p>
                        <p>Número na Pokedex: {thisPokemon.id}</p>
                        <p>Altura: {thisPokemon.height}</p>
                        <p>Peso: {thisPokemon.weight}</p>
                        <p>Tipos: {thisPokemon.type_1} / {thisPokemon.type_2}</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;