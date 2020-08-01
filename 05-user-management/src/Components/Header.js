import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3">Project quản lý users bằng Reactjs</h1>
                <h3 className="display-3">với dữ liệu json</h3>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;
