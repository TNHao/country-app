import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export default function EmptyResult(props) {
    return (
        <div className="empty-result text-center w-100">
            <BiSearchAlt />
            <p>Sorry, we couldn't find any result for '<strong>{props.searchInput}</strong>'</p>
        </div>
    )
}
