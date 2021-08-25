import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
    const { country } = props;
    
    return (
        <div className="col country-card">
            <Link
                className="card h-100 overflow-hidden box-shadow text-decoration-none"
                to={`/country/${country.alpha3Code}`}
            >
                <div className="card-img h-50">
                    <img src={country.flag} className="card-img-top" alt="..." />
                </div>
                <div className="card-body p-4">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text m-0 p-tag">Population: <span>{country.population}</span></p>
                    <p className="card-text m-0 p-tag">Region: <span>{country.region}</span></p>
                    <p className="card-text m-0 p-tag">Capital: <span>{country.capital}</span></p>
                </div>
            </Link>
        </div>
    )
}
