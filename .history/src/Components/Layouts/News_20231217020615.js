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
        let passData = data.json();
        console.log(passData);
        
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
                </div>
            </div>
        );
    }
}

export default News;