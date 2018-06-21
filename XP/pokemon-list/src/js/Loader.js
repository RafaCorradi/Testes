import React, { Component } from 'react';
import '../css/Loader.css';
import pikachu from '../images/pikachuFace.png';
import reactLogo from '../images/logo.svg';

class Loader extends Component {
    render () {
        return (
            <div className="loaderContainer" id={this.props.loaderVisibility}>
                <div className="loader">
                    <img src={reactLogo} className="reactLogo" alt="reactLogo" />
                    <img src={pikachu} className="pikachuFace" alt="pikachuFace" />
                    <h2>Loading Data</h2>
                </div>
            </div>
        )
    }
}

export default Loader;