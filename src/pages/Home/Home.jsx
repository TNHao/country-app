import React from 'react'
import DropDown from '../../components/DropDown/DropDown';
import Search from '../../components/Search/Search';
import CountryList from '../../components/CountryList/CountryList';
import { useSelector } from 'react-redux';
import NotFound from '../NotFound/NotFound';

export default function Home() {
    const { error } = useSelector(state => state.apiReducer);

    // error on fetch data
    if (error) return <NotFound />
    return (
        <div className="home container-sm container">
            <div className="d-block d-sm-flex justify-content-between mt-4">
                <Search />
                <div className="my-3 d-block d-sm-none"></div>
                <DropDown />
            </div>
            <CountryList />
        </div>
    )
}