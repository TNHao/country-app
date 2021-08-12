import React, { Component } from 'react'
import CountryCard from '../../components/CountryCard/CountryCard';
import DropDown from '../../components/DropDown/DropDown';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';
import { getContryApi } from '../../services/CountryServices';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';

export default class Home extends Component {
    state = {
        countries: [],
        regionName: "",
        filterName: "",
        renderSize: 12
    }

    handleSearch = (event) => {
        this.setState({ filterName: event.target.value });
    }

    handleLoad = () => {
        let {renderSize} = this.state;
        renderSize += 12;

        this.setState({ renderSize });
    }

    render() {
        const { countries, regionName, filterName, renderSize } = this.state;
        let renderCountries = [];

        if (!filterName) renderCountries = countries.slice(0, renderSize);
        else {
            renderCountries = countries.filter((country) => {
                return country.name.toLowerCase().includes(filterName.toLowerCase());
            }).slice(0, renderSize);
        }

        return (
            <div className="home container-sm container">
                <div className="d-block d-sm-flex justify-content-between mt-4">
                    <Search handleSearch={this.handleSearch} />
                    <div className="my-3 d-block d-sm-none"></div>
                    <DropDown regionName={regionName} />
                </div>
                {countries.length === 0 && <Loader />}
                {countries.length !== 0 &&
                    <div className="cards-container mt-5">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
                            {/* {!filterName && countries.map((country) => {
                                return <CountryCard key={country.alpha3Code} country={country}/>
                            })}
                            {filterName && countries.filter((country) => {
                                    return country.name.toLowerCase().includes(filterName.toLowerCase());
                                }).map((country) => {
                                    return <CountryCard key={country.alpha3Code} country={country}/>
                                })
                            } */}

                            {renderCountries.map((country) => {
                                return <CountryCard key={country.alpha3Code} country={country} />
                            })}
                        </div>

                        {renderSize <= renderCountries.length && <LoadMoreButton handleLoad={this.handleLoad}/>}
                    </div>
                }
            </div>
        )
    }

    async componentDidMount() {
        const { params } = this.props.match;
        let endPoint = "";
        let regionName = "";

        endPoint = (Object.keys(params).length === 0) ? "all" : `region/${params.regionName}`;
        regionName = (Object.keys(params).length === 0) ? "Filter by region" : `${params.regionName}`;

        const countries = (await getContryApi(endPoint)).data;
        this.setState({ countries, regionName });
    }

    async shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(nextState) !== JSON.stringify(this.state)) return true;

        if (nextProps.match.url !== this.props.match.url) {
            const { params } = nextProps.match;
            let endPoint = "";
            let regionName = "";

            endPoint = (Object.keys(params).length === 0) ? "all" : `region/${params.regionName}`;
            regionName = (Object.keys(params).length === 0) ? "Filter by region" : `${params.regionName}`;

            const countries = (await getContryApi(endPoint)).data;
            this.setState({ countries, regionName });
            return true;
        }

        return false;
    }

    componentWillUnmount(){
        this.setState({ renderSize: 12 })
    }
}
