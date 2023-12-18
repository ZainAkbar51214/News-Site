import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsItem extends Component {
    render() {
        let {title,  description} = this.props;
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div class="card" style={{width: '18rem'}}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text"> {description} </p>
                                    <Link to="/" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;