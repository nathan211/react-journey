import React, { Component } from 'react';
import EditForm from './EditForm';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditObj(info);
    }
    //props.userEditObject

    isShowEditForm = () => {
        if(this.props.displayEditForm === true){
            return <EditForm getUserEditInfo={ (info) => {this.getUserEditInfo(info)} } userEditObject={ this.props.userEditObject } change={ () => { this.props.changeStatus() } }/>;
        }
    }

    checkStatus = () => {
        if (this.props.status === true) {
            return <div className="btn col-3 float-right btn-outline-dark mb-2" onClick={() => this.props.change()}>Đóng</div>;
        }
        else {
            return <div className="btn col-3 float-right btn-outline-primary mb-2" onClick={() => this.props.change()}>Thêm mới</div>;
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue);
    }


    render() {

        return (
            <div className="row search-box">
                <div className="col-12">
                    <div className="row">
                        {
                            this.isShowEditForm()
                        }
                    </div>
                    <div className="row">
                        <div className=" col-9">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Nhập từ khóa" onChange={(event) => this.isChange(event)} />
                                <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={() => this.props.checkConnectProps(this.state.tempValue)}>Tìm</button>
                            </div>
                        </div>
                        <hr />
                        {
                            this.checkStatus()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;
