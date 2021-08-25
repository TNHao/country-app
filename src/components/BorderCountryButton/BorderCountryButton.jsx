import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BorderCountryButton(props) {
    return (
        <Link
            to={`/country/${props.code}`}
            className="text-decoration-none country-border__btn d-inline-flex align-items-center button-custom box-shadow py-3 me-3 mb-3"
        >
            {props.code}
            <FaRegHandPointRight />
        </Link>
    )
}
