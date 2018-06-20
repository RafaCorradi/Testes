import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import MakeRequest from './MakeRequest';
import ListContainer from './ListContainer';

const makeRequest = new MakeRequest();
let limitList = 'limit=25';
let offset = 'offset=0';
const urlToRequest = 'https://pokeapi.co/api/v2/pokemon/?' + limitList + '&' + offset;

function initialCallback (data, instance) {
    instance.setState ({
        pokemonData: data,
    })
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemonData: {},
        }
    }

    componentDidMount () {
        var __self = this;
        makeRequest.createRequest(urlToRequest, initialCallback, __self);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <ListContainer pokemonData = { this.state.pokemonData } />
                </div>
            </div>
        );
    }
}

export default App;