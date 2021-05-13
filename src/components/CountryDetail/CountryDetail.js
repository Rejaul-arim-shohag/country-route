import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css'

const CountryDetail = () => {
    const {countryName} =useParams();
    const [details, setDetail] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(response => response.json())
        .then(data => setDetail(data[0]))
    },[countryName]);
    const {
        flag,name,capital,nativeName,timezones,population,region, subregion, numericCode,
      } = details;
    return (
        <div className="display-country">
            <div className="single-country">
               <div>
                  <div className="single-flag-image">
                  <img className="single-flag" src={flag} alt="" />
                  </div>
                  <h2>{name}</h2>
                  <h4>Capital: {capital}</h4>
                  <h4>NativeName: {nativeName}</h4>
                  <h4>Timezones: {timezones}</h4>
                  <h4>Population: {population}</h4>
                  <h4>Region: {region}</h4>
                  <h4>Subregion: {subregion}</h4>
                  <h4>NumericCode: {numericCode}</h4>
               </div>
            </div>
        </div>
    );
};

export default CountryDetail;