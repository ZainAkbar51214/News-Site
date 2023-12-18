import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from '../Spinner';

class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?apiKey=ad02bf3d34a0416cb244eb374fced0bb&q=news&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);
        this.setState({
            articles: passData.articles,
            totalResults: passData.totalResults
        })
        
    }

    handPrevClick = async () => {
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?apiKey=ad02bf3d34a0416cb244eb374fced0bb&q=news&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);

        this.setState({
            page: this.state.page - 1,
            articles: passData.articles
        })
    }
    handNextClick = async () => {
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=ad02bf3d34a0416cb244eb374fced0bb&q=news&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);

        this.setState({
            page: this.state.page + 1,
            articles: passData.articles
        })
    }
    }



    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    {
                        this.state.loading ?
                        <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <Spinner />
                        </div>
                    </div> :
                    <div className='row'>
                        {this.state.articles.map((element) => {
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
                    }
                   
                </div>
            </div>
        );
    }
}

export default News;