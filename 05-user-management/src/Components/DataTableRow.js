import React, { Component } from 'react';

class DataTableRow extends Component {

    permissionShow = () => {
        if(this.props.permission === 1){
            return 'Admin';
        } else if(this.props.permission === 2){
            return 'Moderator';
        } else{
            return 'Normal User';
        }
    }

    deleteButtonClick = (userId) => {
        this.props.deleteButtonClick(userId);
    }

    render() {
        return (
            <tr>
                <th scope="row">{ this.props.id+1 }</th>
                <td>{ this.props.name }</td>
                <td>{ this.props.tel }</td>
                <td>{ this.permissionShow() }</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={ () => { this.props.editFuncClick() } }>
                            Sửa
                        </button>
                        <button className="btn btn-danger" onClick={ () => { this.deleteButtonClick(this.props.id) } }>
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DataTableRow;
