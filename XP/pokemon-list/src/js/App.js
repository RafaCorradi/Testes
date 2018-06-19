import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import MakeRequest from './makeRequest.js';

const makeRequest = new MakeRequest();
const pokeData = {};
let initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

function myCallback (data) {
    let pokeIndex = 0;
    let statusReady = false;

    for (let i = 0; i < data.results.length; i++) {
        let pokeObject = {
            name: 0,
            status: {
                id: 0,
                height: 0,
                sprite: 0,
                type_1: 0,
                type_2: 0,
                weight: 0
            },
            url: 0
        };

        pokeObject.name = data.results[i].name;
        pokeObject.url = data.results[i].url;

        makeRequest.createRequest(pokeObject.url, function (data) {
            pokeObject.status.id = data.id;
            pokeObject.status.height = data.height;
            pokeObject.status.weight = data.weight;
            pokeObject.status.sprite = data.sprites.front_default;

            if (data.types.lenght > 1) {
                for (let j = 0; j < data.types.length; j++) {
                    if (data.types[j].slot === 1) {
                        pokeObject.type_1 = data.types[j].type.name;
                    } else {
                        pokeObject.type_2 = data.types[j].type.name
                    }
                }
            } else if (data.types.lenght === 1) {
                pokeObject.type_1 = data.types[0].type.name;
            }

            statusReady = true;
        });

        let myInterval = setInterval(function () {
            if (statusReady = true) {
                pokeData[pokeIndex] = pokeObject;
                pokeIndex++;
                clearInterval(myInterval);
            }
        }, 100)
    }

    console.log(pokeData);
}

makeRequest.createRequest(initialUrl, myCallback);

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