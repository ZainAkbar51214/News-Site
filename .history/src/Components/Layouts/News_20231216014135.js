import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <NewsItem title="Zain" description="I am a web developer" imageUrl="https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/14/7751c4b5-02f3-410f-8f64-1358b7a09ea8/thumbnail/1200x630/ac418d5a8d0a1eb10481f72712d0f1d7/morningsick.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0" />
                        </div>
                        <div className='col-lg-3'>
                            <NewsItem title="Waqas" description="He is a designer" />
                        </div>
                        <div className='col-lg-3'>
                            <NewsItem title="Usama" description="He is a Laravel Developer" />
                        </div>
                        <div className='col-lg-3'>
                            <NewsItem title="Noman" description="He is a Photpgrapher" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;