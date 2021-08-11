import React, { Component } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class BorderCountryButton extends Component {
    render() {
        return (
            <Link 
                to={`/country/${this.props.code}`} 
                className="text-decoration-none country-border__btn d-inline-flex align-items-center button-custom box-shadow py-3 me-3 mb-3"
                onClick={() => {this.props.update(this.props.code)}}
            >
                {this.props.code}
                <FaRegHandPointRight />
            </Link>
        )
    }
}
