import React, { Component } from 'react';
import './Cats.css';
import { selectCat } from './selectService';

class Cat extends Component {
    state = {
        selectedCat: false
    };

    setSelectedCat = (id) => {
        this.setState({ selectedCat: !this.state.selectedCat });
        selectCat(id);
    };

    render() {
        return (
            <div
                key={this.props.id}
                className="cats"
                onClick={() => this.setSelectedCat(this.props.id)}
                style={{
                    borderStyle: 'solid',
                    borderWidth: this.state.selectedCat ? '3px' : '1px',
                    borderColor: this.state.selectedCat ? 'lawngreen' : '#61dafb',
                }}
            >
                <img src={this.props.imageUrl} alt={this.props.name} />
                <p> {this.props.name} </p>
            </div>
        );

    }
}
export default Cat;
