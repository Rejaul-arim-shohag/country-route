import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    // console.log(props.country)
    const {name, flag} = props.country;
    const history = useHistory()
    console.log(history)
    const handleClick = () => {
        const url = `/countrydetails/${name}`
        history.push(url)
    }
    return (
        <div className="display-countries">
            <div className="country">
               <div>
                  <div className="flag-image">
                  <img src={flag} alt="" />
                  </div>
                  <h3>{name}</h3>
                  <button onClick={()=>handleClick(name)} className="details-btn">More Details</button>
                  {/* <Link to={`/country/${name}`}>Detail Information {name}</Link>
                  <button>Click For Detail</button> */}
               </div>
            </div>
        </div>
    );
};

export default Country;