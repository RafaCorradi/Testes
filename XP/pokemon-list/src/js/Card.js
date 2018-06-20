import React, { Component } from 'react';

class Card extends Component {
    render () {
        return (
            <li className="card">
                <div className="flipper">
                    <div className="front_card">
                        <img src="" alt="" />
                        <h3>Name</h3>
                        <h3>ID: { this.props.keyIndex }</h3>
                        <h3>URL: { this.props.pokemonUrl }</h3>
                    </div>
                    <div className="back_card">
                        <img src="" alt="" />
                        <p>Nome: Name</p>
                        <p>Número na Pokedex: { this.props.keyIndex }</p>
                        <p>Altura: height</p>
                        <p>Peso: weight</p>
                        <p>Tipos: type_1/type_2</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;