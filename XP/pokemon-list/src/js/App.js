import React, { Component } from 'react';
import logo from '../images/logoPokemon.png';
import '../css/App.css';
import MakeRequest from './MakeRequest';
import ListContainer from './ListContainer';

const makeRequest = new MakeRequest();
let limitList = 'limit=24';
let offset = 'offset=0';
const urlToRequest = 'https://pokeapi.co/api/v2/pokemon/?' + limitList + '&' + offset;

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemonData: {},
        }
    }

    componentDidMount () {
        var __self = this;
        makeRequest.createPromisseRequest(urlToRequest).then(function (xhr) {
            __self.setState ({
                pokemonData: JSON.parse(xhr.response)
            })
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to your Pokemon Database</h1>
                </header>
                <div>
                    <ListContainer pokemonData = { this.state.pokemonData } />
                </div>
            </div>
        );
    }
}

export default App;