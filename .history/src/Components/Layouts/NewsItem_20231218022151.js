import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class NewsItem extends Component {
    render() {
        let {title,  description, imageUrl, newsUrl} = this.props;
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="card">
                                <img src={imageUrl} className="card-img-top" style={{height: '200px',}} alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">{title}...</h6>
                                    <p className="card-text"> {description}... </p>
                                    <Link to={newsUrl} className="btn btn-sm btn-primary">Go somewhere</Link>
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