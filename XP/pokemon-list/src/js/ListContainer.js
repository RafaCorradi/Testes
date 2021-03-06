import React, { Component } from 'react';
import '../css/ListContainer.css';
import Card from './Card';
import Loader from './Loader';
import UpdateList from './UpdateList';
import MakeRequest from './MakeRequest';

const makeRequest = new MakeRequest();

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: [],
            loaderVisibility: 'notShow',
        }
    }    

    updateList (url) {
        var __self = this;

        if (!url) {
            return;
        }

        __self.setState({loaderVisibility: 'show'});

        makeRequest.createPromisseRequest(url).then( xhr => {
            let { results, previous, next } = JSON.parse(xhr.response);
            
            __self.setState({
                previousLink: previous,
                nextLink: next,
            });
            let newPokemonsList = results.map(result => makeRequest.createPromisseRequest(result.url));

            Promise.all(newPokemonsList)
                .then(pokemonRequests => pokemonRequests.map(pokemonRequest => JSON.parse(pokemonRequest.response)))
                .then(pokemons => __self.setState({ pokemonData: pokemons, loaderVisibility: 'notShow' }));
        });
    }

    render () {
        if (this.state.pokemonData.length === 0) {
            return (
                <Loader />
            )
        }

        return (
            <div>
                <Loader loaderVisibility={this.state.loaderVisibility}/>
                <ul className="listContainer">
                    { this.state.pokemonData.map((pokemon, index) => <Card key={index} pokemon={pokemon}/>) }
                </ul>
                <UpdateList className='previousButton' updateList={this.updateList.bind(this)} link={this.state.previousLink} buttonDescription='Prev' />
                <UpdateList className='nextButton' updateList={this.updateList.bind(this)} link={this.state.nextLink} buttonDescription='Next' />
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        let __self = this;

        let xhrPokemonList = nextProps.pokemonData.results.map(result => makeRequest.createPromisseRequest(result.url))

        __self.setState({
            previousLink: nextProps.pokemonData.previous,
            nextLink: nextProps.pokemonData.next,
        });

        Promise.all(xhrPokemonList)
            .then(pokemonRequests => pokemonRequests.map(pokemonRequest => JSON.parse(pokemonRequest.response)))
            .then(pokemons => {
                __self.setState( prevState => {
                    return { pokemonData: prevState.pokemonData.concat(pokemons) }
                });
            });
    }
}

export default ListContainer;