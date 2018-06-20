import React, { Component } from 'react';
import Card from './Card';
let pokemonCardList = [];

console.log(this.props);

for (let i = 0; i < 25; i++) {
    pokemonCardList.push(
        <Card key={'card_' + i.toString()} keyIndex = {i} />
    )
}

class ListContainer extends Component {
    render () {
        return (
            <ul className="listContainer">
                { pokemonCardList }
            </ul>
        );
    }

    populateCardList() {}
}

export default ListContainer;