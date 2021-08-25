import React, { useState, useEffect } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import EmptyResult from '../EmptyResult/EmptyResult';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Loader from '../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actFetchCountryApi } from '../../store/actions/apiAction';

export default function CountryList() {
    const [renderSize, setRenderSize] = useState(12);
    const region = useParams().regionName;

    const dispatch = useDispatch();
    const { loading, data: countries } = useSelector(state => state.apiReducer);
    const { filterName } = useSelector(state => state.inputReducer);

    let renderCountries = [];

    // data receive is array
    if (countries !== "" && Array.isArray(countries)) {
        if (!filterName) renderCountries = countries.slice(0, renderSize);
        else {
            renderCountries = countries.filter((country) => {
                return country.name.toLowerCase().includes(filterName.toLowerCase());
            }).slice(0, renderSize);
        }
    }

    useEffect(() => {   
        return () => { // set renderSize back to 12 when component unmount
            setRenderSize(12);
        };
    }, []);

    useEffect(() => {
        const endPoint = region ? `region/${region}` : "all";

        // When region changed (URL changed), fetch api
        dispatch(actFetchCountryApi(endPoint));
    }, [region, dispatch]);

    if (loading) return <Loader />

    return (
        <div className="cards-container mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
                {renderCountries.length !== 0 && renderCountries.map((country) => {
                    return <CountryCard key={country.alpha3Code} country={country} />
                })}
                {renderCountries.length === 0 && filterName && <EmptyResult searchInput={filterName} />}
            </div>

            {renderSize <= renderCountries.length && <LoadMoreButton handleLoad={() => setRenderSize(renderSize + 12)} />}
        </div>
    )
}
