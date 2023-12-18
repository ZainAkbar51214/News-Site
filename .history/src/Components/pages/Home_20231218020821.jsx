import React, { Component } from 'react';
import News from '../Layouts/News';

class Home extends Component {
    render() {
        return (
            <div>
                <News pageSize={5} country="in" category="science" />
            </div>
        );
    }
}

export default Home;