import React, { Component } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default class BackButton extends Component {
    render() {
        return (
            <button className="back-btn button-custom py-1 mt-5 box-shadow">
                <HiOutlineArrowNarrowLeft />
                Back
            </button>
        )
    }
}
