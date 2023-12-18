import React, { Component } from 'react';
import News from '../Layouts/News';

class Home extends Component {
    render() {
        return (
            <div>
                <News pageSize={5} country="in" category="sports" />
            </div>
        );
    }
}

export default Home;