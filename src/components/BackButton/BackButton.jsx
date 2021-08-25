import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
    return (
        <button
            className="back-btn button-custom py-1 mt-5 box-shadow"
            onClick={useHistory().goBack}
        >
            <HiOutlineArrowNarrowLeft />
            Back
        </button>
    )
}
