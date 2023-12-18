import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class NewsItem extends Component {
    render() {
        let {title,  description, imageUrl, newsUrl} = this.props;
        return (
                <div className="card">
                    <img src={imageUrl} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text"> {description}... </p>
                        <Link to={newsUrl} className="btn btn-sm btn-primary">Detail</Link>
                    </div>
                </div>
        );
    }
}

export default NewsItem;