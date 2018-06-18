import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import MakeRequest from './makeRequest.js';

var makeRequest = new MakeRequest();

function myCallback (data) {
    console.log(data);
}

var url = 'https://pokeapi.co/api/v2/pokemon/';

makeRequest.createRequest(url, myCallback);

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