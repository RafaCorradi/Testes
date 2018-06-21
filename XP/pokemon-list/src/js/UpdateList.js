import React, { Component } from 'react';

class UpdateList extends Component {
    handleClick (event) {
        event.preventDefault();
        this.props.updateList(this.props.link);
    }

    render () {
        return (
            <button onClick={this.handleClick.bind(this)}> {this.props.buttonDescription} </button>
        )
    }
}

export default UpdateList;