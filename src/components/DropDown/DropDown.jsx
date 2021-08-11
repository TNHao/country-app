import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom';

export default class DropDown extends Component {
    render() {
        return (
            <div className="dropdown box-shadow">
                <button className="dropdown-btn button-custom w-100 text-start d-flex align-items-center justify-content-between" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.props.regionName}
                    <IoIosArrowDown />
                </button>
                <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenu2">
                    <li><Link to="/region/Africa" className="dropdown-item" type="button">Africa</Link></li>
                    <li><Link to="/region/Americas" className="dropdown-item" type="button">Americas</Link></li>
                    <li><Link to="/region/Asia" className="dropdown-item" type="button">Asia</Link></li>
                    <li><Link to="/region/Europe" className="dropdown-item" type="button">Europe</Link></li>
                    <li><Link to="/region/Oceania" className="dropdown-item" type="button">Oceania</Link></li>
                </ul>
            </div>
        )
    }
}
