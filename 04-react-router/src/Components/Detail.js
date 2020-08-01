import React, { Component } from 'react';
import data from './data.json';

class Detail extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead news">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-7 my-auto mx-auto mt-5 pt-5">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-5 text-center text-uppercase">chi tiết tin tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* start news */}

                    {
                        data.map((value, key) => {
                            if(value.id === parseInt(this.props.match.params.id, 20)){
                                return (
                                    <div className="jumbotron container" key={key}>
                                        <h1 className="display-3 text-center">{ value.title }</h1>
                                        <p className="lead">{ value.summary }</p>
                                        <hr className="my-2" />
                                        <p>More info</p>
                                        <p className="lead">
                                           { value.content }
                                        </p>
                                    </div>
                                )
                            }
                            else{
                                return 0;
                            }
                        })
                    }

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h2>Tin liên quan</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html"><img className="card-img-top" src="https://via.placeholder.com/300x200" alt="Card image cap" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html"><img className="card-img-top" src="https://via.placeholder.com/300x200" alt="Card image cap" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html"><img className="card-img-top" src="https://via.placeholder.com/300x200" alt="Card image cap" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <a href="detail.html"><img className="card-img-top" src="https://via.placeholder.com/300x200" alt="Card image cap" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end news */}
                </div>
            </div>
        );
    }
}

export default Detail;
