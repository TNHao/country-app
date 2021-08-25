import React from 'react';
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { actSetFilterName } from '../../store/actions/inputAction';

export default function Search() {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(actSetFilterName(event.target.value));
    }

    return (
        <div className="search-box box-shadow">
            <BsSearch />
            <input
                id="seach-box"
                className="search-input button-custom w-100"
                type="text"
                placeholder="Search for a country"
                ria-label="Search" autoComplete="off"
                onChange={handleSearch}
            />
        </div>
    )
}