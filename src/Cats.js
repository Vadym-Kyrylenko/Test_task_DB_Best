import React, {Component} from 'react';
import './Cats.css';

class Cats extends Component {
    state = {
        selectedCat: false
    };

    setSelectedCat = (id) => {
        this.setState({selectedCat: id})
    };

    handleSubmit = () => {
        const catId = this.state.selectedCat;
        if (catId === false) {
            alert('Select a cat!')
        } else {
            alert(`Cat ID =  ${catId}`)
        }
    };

    componentWillMount(){
        document.addEventListener('click', this.handleClickOutside, false)
    }

    handleClickOutside = (event) => {
        if(event.path[0] !== 'cats'){
            const button = document.querySelector('.button');
            if (!event.path.includes(button)) this.setState({selectedCat: false})
        }
    };

    render() {
        return (
            <>
                {
                    this.props.data && this.props.data.map((item) => {
                        return (
                            <div
                                key={item.id} className="cats"
                                onClick={() => this.setSelectedCat(item.id)}
                                style={{
                                    borderStyle: 'solid',
                                    borderWidth: this.state.selectedCat === item.id ? '3px' : '1px',
                                    borderColor: this.state.selectedCat === item.id ? 'lawngreen' : '#61dafb',
                                }}
                            >
                                <img src={item.imageUrl} alt={item.name}/>
                                <p> {item.name} </p>
                            </div>
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
