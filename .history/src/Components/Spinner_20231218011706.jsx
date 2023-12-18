import React, { Component } from 'react';
import loading from '../img/index.svg';

class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading" />
            </div>
        );
    }
}

export default Spinner;