import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        }
    }

    notify = () => {
        alert('This is a notification');
    }

    notify2 = (x) => {
        alert(x);
    }
    
    notify3 = (x) => {
        alert(x);
    }

    renderButton = () => (
        <div className="btn-group align-items-center">
            <div className="btn btn-success" onClick={ () => this.editClick() }>Edit</div>
            <div className="btn btn-danger" onClick={ () => this.notify2("tesst") }>button 2</div>
            <div className="btn btn-warning" onClick={ this.notify3.bind(this, "test") }>button 3</div>
        </div>
    )

    renderForm = () => (
        <div className="row">
            <input ref={ (data) => { this.input = data } } defaultValue={ this.props.title } type="text" className="form-control col-sm-9"/>
            <button type="submit" className="btn btn-primary ml-2 col-sm-2" onClick={ () => this.saveClick() }>Save</button>
        </div>
    )

    displayCheck = () => {
        if(this.state.status === 0){
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({
            status: 1
        });
    }

    saveClick = () => {
        this.setState({
            status: 0
        });
        console.log(this.input.value);
    }
 
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.pos}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4">{this.props.title}</h2>
                                <p>Lorem ipsum dolor sit  recusandae!</p>
                                { this.displayCheck() }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
