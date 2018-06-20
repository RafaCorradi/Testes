import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import MakeRequest from './MakeRequest';
import ExtractData from './ExtractData';

const makeRequest = new MakeRequest();
const extractData = new ExtractData();
const pokemonData = {};
let limitList = 'limit=25';
let offset = 'offset=25';
const urlToRequest = 'https://pokeapi.co/api/v2/pokemon/?' + limitList + '&' + offset;

function initialCallback (data) {
    let pokemonIndex = 0;

    if (data.previous != null) {
        pokemonData.previousLink = data.previous;
    }

    if (data.next != null) {
        pokemonData.nextLink = data.next;
    }

    for (let i = 0; i < data.results.length; i++) {
        let pokemonUrl = data.results[i].url;
        makeRequest.createRequest(pokemonUrl, extractData.extractPokemonData, pokemonData, pokemonIndex);

        pokemonIndex++;
    }
}

makeRequest.createRequest(urlToRequest, initialCallback);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;