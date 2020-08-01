import React, { Component } from 'react';
import DataTableRow from './DataTableRow';

class TableData extends Component {
  
    deleteButtonClick = (userId) => {
      this.props.deleteUser(userId);
    }
 
    mappingDataUser = () => {
      return this.props.dataUser.map((value, key) => {
          return <DataTableRow deleteButtonClick={(userId) => {this.deleteButtonClick(userId)}} editFuncClick={ () => { this.editFunc(value) } } key={ key } id={ value.id } name={ value.name } tel={ value.tel } permission={ value.permission }/>;
      })
    }

    editFunc = (user) => {
      this.props.edit(user);
    }

    render() {
        return (
            <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">SĐT</th>
                  <th scope="col">Quyền</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
              {
                this.mappingDataUser()
              }
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;
