import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json';

class News extends Component {
    render() {
        return (
            <div>
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto mx-auto mt-5 pt-5">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5 text-center text-uppercase">danh sách tin tức</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* start news */}
                <div className="container">
                    <div className="row my-2">
                        {
                            data.map((value, key) => {
                                return (
                                    <NewsItem key={key} newId={value.id} image={value.image} title={value.title} summary={value.summary}/> 
                                )
                            })
                        }                                               
                    </div>
                </div>
                {/* end news */}
            </div>
        );
    }
}

export default News;
