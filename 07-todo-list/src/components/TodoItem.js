import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import check from '../img/tick.svg';
import checked from '../img/ticked.svg';

export default class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url  = check;
        if(item.isComplete){
            url = checked;
        }
        return (
            <div>
                <div className={classNames('TodoItem', {
                    'TodoItem-complete': item.isComplete
                    })}>
                        <img onClick={onClick} src={url} width={30} height={30} alt="check or uncheck"/>
                        <p>{this.props.item.title}</p>
                </div>
            </div>
        )
    }
}


