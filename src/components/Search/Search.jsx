import React, { Component } from 'react';
import { BsSearch } from "react-icons/bs";

export default class Search extends Component {
    render() {
        return (
            <div className="search-box box-shadow">
                <BsSearch />
                <input
                    id="seach-box" 
                    className="search-input button-custom w-100" 
                    type="text" 
                    placeholder="Search for a country" 
                    ria-label="Search" autoComplete="off"
                    onChange = {this.props.handleSearch}
                />
            </div>
        )
    }
}
