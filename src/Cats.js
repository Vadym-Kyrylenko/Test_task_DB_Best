import React, {Component} from 'react';
import './Cats.css';
import { selectedCats } from './selectService';
import Cat from './Cat';

class Cats extends Component {

    handleSubmit = () => {
        if (selectedCats.length === 0) {
            alert('Select a cat!')
        } else {
            alert(`Selected Cats IDs: ${selectedCats.toString()}`)
        }
    };

    render() {
        return (
            <>
                {
                    this.props.data && this.props.data.map((item) => {
                        return (
                            <Cat key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} />
                        )
                    })
                }
                <div>
                    <button className='button' onClick={() => this.handleSubmit()}> SUBMIT </button>
                </div>
            </>
        );
    }
}

export default Cats;
