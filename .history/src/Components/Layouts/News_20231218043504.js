import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
      }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        
      }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url =    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5869a5b7afe45f0975749f435cea4b5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);
        this.setState({
            articles: passData.articles,
            totalResults: passData.totalResults,
            loading: false
        })
        
    }

    handPrevClick = async () => {
        console.log("prev");
        let url =    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5869a5b7afe45f0975749f435cea4b5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);

        this.setState({
            page: this.state.page - 1,
            articles: passData.articles,
            loading: false
        })
    }
    handNextClick = async () => {
        console.log("Next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5869a5b7afe45f0975749f435cea4b5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);

        this.setState({
            page: this.state.page + 1,
            articles: passData.articles,
            loading: false
        })
        }
    }



    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    {
                        this.state.loading &&
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <Spinner />
                            </div>
                        </div>
                    }
                    <div className='row'>
                        {this.state.loading && this.state.articles.map((element) => {
                           return element.urlToImage?<div className='col-lg-4 col-md-6 mt-5' key={element.url}>
                           <NewsItem title={element.title?element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 86): ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                       </div> 
                       :""
                        })}
                        
                    </div>
                   
                   <div className='row'>
                   <div className='col-lg-12 d-flex justify-content-between mt-5 mb-5'>
                        <button disabled={this.state.page<1} type='button' className='btn btn-dark' onClick={this.handPrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handNextClick}>Next &rarr;</button>
                    </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default News;