import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    // console.log(props.country)
    const {name, flag} = props.country;
    return (
        <div className="display-countries">
            <div className="country">
               <div>
                  <div className="flag-image">
                  <img src={flag} alt="" />
                  </div>
                  <h3>{name}</h3>
                  <Link to={`/country/${name}`}>Detail Information {name}</Link>
               </div>
            </div>
        </div>
    );
};

export default Country;