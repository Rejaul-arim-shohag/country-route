import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';
import './Home.css';
const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        const url = ("https://restcountries.eu/rest/v2/all")
        fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <div className="navlink">
                <div className="main-li">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/nai">Details</a></li>
                    <li><a href="/nai">Countries</a></li>
                </div>
            </div>
            <div className="all-countries">
                {
                    countries.map(country => <Country country ={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;