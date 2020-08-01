import React, { Component } from 'react';

class EditForm extends Component {
    //this.props.userEditObject

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    
    //getUserEditInfo

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value    
        });
    }

    saveButton = () => {
        this.props.change();

        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
    }

    render() {
        return (
                <div className="col-12 card text-white bg-warning mb-3 p-3">
                    <div className="card-header">Sửa thông tin user</div>
                    <form>
                        <input defaultValue={ this.props.userEditObject.name } name="name" type="text" className="form-control my-2" placeholder="Nhập tên" onChange={ (event) => {this.isChange(event)} }/>
                        <input defaultValue={ this.props.userEditObject.tel } name="tel" type="text" className="form-control my-2" placeholder="Nhập SĐT" onChange={ (event) => {this.isChange(event)} }/>
                        <label htmlFor="exampleFormControlSelect1">Quyền</label>
                        <select defaultValue={ this.props.userEditObject.permission }  name="permission" className="form-control" onChange={ (event) => {this.isChange(event)} }>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal User</option>
                        </select>
                        <input type="button" className="btn btn-secondary my-2" value="Lưu" onClick={ () => { this.saveButton() } }/>
                    </form>
                </div>
        );
    }
}

export default EditForm;
