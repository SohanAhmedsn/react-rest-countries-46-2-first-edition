import React from 'react';
import  './Countries.css'
import { useEffect, useState } from 'react/cjs/react.development';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <ul>
                {
                    countries.map(country =><Country 
                    name={country.name}
                    population={country.population}
                    borders={country.borders}
                    numericCode={country.numericCode}
                    timezones={country.timezones}
                    flag={country.flag}
                    subregion={country.subregion}      
                    ></Country>)
                }
            </ul>
        </div>
    )
}

const Country = (props) => {
    // const {name, flag, population, borders, numericCode, timezones, subregion} = props.country;

    return (
        <div className="country">
            <h1>Country: {props.name}</h1>
            <img src={props.flag} alt="" />
            <h1>Population: {props.population}</h1>
            <h1>Border: {props.borders}</h1>
            <h1>NemericCode: {props.numericCode}</h1>
            <h1>Timezone: {props.timezones}</h1>
            <h1>Subregion: {props.subregion}</h1>
        </div>
    )
}
export default Countries;

//name, population,borders,numericCode,timezones, flag, subregion,population ,timezones