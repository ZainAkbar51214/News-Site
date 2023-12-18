import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    render() {
        return (
            <div>
                This is a New Components
                <NewsItem title="Zain" description="I am a web developer" />
                <NewsItem title="Waqas" description="He is a designer" />
                <NewsItem />
            </div>
        );
    }
}

export default News;