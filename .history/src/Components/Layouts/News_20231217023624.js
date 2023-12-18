import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?apiKey=ad02bf3d34a0416cb244eb374fced0bb&q=news";
        let data = await fetch(url);
        let passData = await data.json();
        console.log(passData);
        this.setState({articles: passData.articles})
        
    }

    handPrevClick = () => {
        console.log("prev");
    }
    handNextClick = () => {
        console.log("Next");
    }



    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
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
                        <button disabled={true} type='button' className='btn btn-dark' onClick={this.handPrevClick}>&larr; Previous</button>
                        <button type='button' className='btn btn-dark' onClick={this.handNextClick}>Next &rarr;</button>
                    </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default News;