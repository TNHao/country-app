import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import BorderCountryButton from '../../components/BorderCountryButton/BorderCountryButton';
import Loader from '../../components/Loader/Loader';
import NotFound from '../NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCountryApi } from '../../store/actions/apiAction';

export default function Detail() {
    const { code } = useParams();

    const { loading, data: country, error} = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const { topLevelDomain, currencies, languages, borders } = country ? country : {};

    useEffect(() => {
        // When code changed (URL changed), fetch api
        dispatch(actFetchCountryApi(`alpha/${code}`));
    }, [code, dispatch])

    // Error when fetch api 
    if (error) return <NotFound />

    if (loading) return (<div style={{ padding: "35px" }}><Loader /></div>);

    return (
        <div className="detail container">
            <BackButton />
            <div className="detail-container mt-5">
                <div className="row">
                    <div className="flagImg col-12 col-md-5">
                        <img className="w-100" src={country.flag} alt="" />
                    </div>
                    <div className="p-0 col"></div>
                    <div className="detail-info col-12 col-md-6 col-xl-5 p-md-0 mt-5 mt-md-0">
                        <h4><strong>{country.name}</strong></h4>
                        <div className="detail-description d-block d-md-flex justify-content-between p-auto pe-xl-5 mt-4">
                            <div className="leftCol">
                                <p className="mb-2 p-tag">Native Name: <span>{country.nativeName}</span></p>
                                <p className="mb-2 p-tag">Population: <span>{country.population}</span></p>
                                <p className="mb-2 p-tag">Region: <span>{country.region}</span></p>
                                <p className="mb-2 p-tag">Sub Region: <span>{country.subregion}</span></p>
                                <p className="mb-2 p-tag">Capital: <span>{country.capital}</span></p>
                            </div>
                            <div className="rightCol mt-4 mt-md-0">
                                <p className="mb-2 p-tag">Top Level Domain: <span>{topLevelDomain?.join(', ')}</span></p>
                                <p className="mb-2 p-tag">Currencies: <span>{currencies?.map((obj) => obj.name).join(', ')}</span></p>
                                <p className="mb-2 p-tag">Languages: <span>{languages?.map((obj) => obj.name).join(', ')}</span></p>
                            </div>
                        </div>
                        <div className="country-border mt-4">
                            <h5 className="mb-4">Border Countries:</h5>
                            {borders?.map((obj) => <BorderCountryButton key={obj} code={obj} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
