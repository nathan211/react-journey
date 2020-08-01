import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: 3
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;

        console.log(item);
    }

    checkDisplay = () => {
        if (this.props.displayForm === true) {
            return (
                <div className="col">
                    <div className="card border-secondary mb-3 p-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Thêm mới user</div>
                        <form>
                            <input name="name" type="text" className="form-control my-2" placeholder="Nhập tên" onChange={(event) => this.isChange(event)} />
                            <input name="tel" type="text" className="form-control my-2" placeholder="Nhập SĐT" onChange={(event) => this.isChange(event)} />
                            <label htmlFor="exampleFormControlSelect1">Quyền</label>
                            <select value={this.state.permission} name="permission" className="form-control" onChange={(event) => this.isChange(event)}>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal User</option>
                            </select>
                            <input type="reset" className="btn btn-success my-2" onClick={() => { this.props.add(this.state.name, this.state.tel, this.state.permission) }} value="Thêm" />
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.checkDisplay()
                }
            </div>
        );
    }
}

export default AddUser;
