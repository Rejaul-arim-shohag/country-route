import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {name} =useParams();
    const [country, setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data))
    });
    const {population } = country;
    return (
        <div>
            <p>Name :{population}</p>
        </div>
    );
};

export default CountryDetail;