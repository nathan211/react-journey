import React, { Component } from 'react'
import { connect } from 'react-redux'

class News extends Component {

    // useEditStatusInStore = () => {
    //     var {dispatch} = this.props;
    //     dispatch({
    //         type: 'CHANGE'
    //     });
    // }

    render() {
        return (
            <div>
                <h2>This is a component</h2>
                <button onClick={() => {this.props.useEditStatusInStore()}}>click me!</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type: 'CHANGE'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);