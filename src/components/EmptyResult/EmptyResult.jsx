import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default class EmptyResult extends Component {
    render() {
        return (
            <div className="empty-result text-center w-100">
                <BiSearchAlt />
                <p>Sorry, we couldn't find any result for '<strong>{this.props.searchInput}</strong>'</p>
            </div>
        )
    }
}
