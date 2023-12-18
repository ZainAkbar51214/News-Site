import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <NewsItem title="Zain" description="I am a web developer" />
                        </div>
                        <div className='col-lg-3'>
                            <NewsItem title="Waqas" description="He is a designer" />
                        </div>
                        <div className='col-lg-3'>
                            <NewsItem title="Usama" description="He is a Laravel Developer" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;