import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import Input from '../../shared/input';
import './search.css'

const Search = ({ setResults, setLat, setLng, lat, lng}) => {
    const [searchKey, setSearchKey] = useState('');
    // const [location, setLocation] = useState('');


    // debounce call to the location api
    const delayedQuery = useCallback(_.debounce(q => handleLocation(q), 500), []);


    const handleLocation = async (location) => {
                try {
                    const response = await fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${location}`, {
                        method: 'GET',
                        headers: {
                            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
                            "x-rapidapi-key": "feb5a7b223msh76b7a43e38446bfp1eb31ajsne300800cf916"
                        }
                    });

                    const data = await response.json()
                    if (data.length < 1) {
                        return console.log('not found')
                    }

                    setLat(data.results[0].geometry.location.lat);
                    setLng(data.results[0].geometry.location.lng);
                }
                catch (e) {
                    console.error(e);
                }
    }


    const handleSearch = async (searchKey) => {
        try {

            const response = await fetch(`https://api.tomtom.com/search/2/geometrySearch/${searchKey}.json?geometryList=%5B%7B%22type%22%3A%22POLYGON%22%2C%20%22vertices%22%3A%5B%22${lat}%2C%20${lng}%22%2C%20%22${lat}%2C%20${lng}%22%2C%20%22${lat}%2C%20${lng}%22%2C%20%22${lat}%2C%20${lng}%22%5D%7D%2C%20%7B%22type%22%3A%22CIRCLE%22%2C%20%22position%22%3A%22${lat}%2C%20${lng}%22%2C%20%22radius%22%3A10000%7D%5D&limit=20&idxSet=POI&key=ciIsGdG3irXcWG9ukyhZfMvZ0aZUbnkU`, {
                method: 'GET',
            })
            const data = await response.json();
            console.log('lat', lat)
            console.log('results', data)
            if (!data.results) {
                return console.log('not found')
            }

            // array to store latitude and longitude
            const latAndLng = []
            data.results.map((latlng) => {
               return latAndLng.push({
                    lat: latlng.position.lat,
                    lng: latlng.position.lon,
                })
            })
            setResults(latAndLng)
        }
        catch (e) {
            console.error(e)
        }

    }

    const handleSearchKey = (e) => {
        setSearchKey(e.target.value)
    }


    return (
        <div className='search-cont'>
            <div className="form-group">
                <span><i className="fas icons fa-search"></i></span>
                <Input
                type='text'
                placeholder='Search for closest facility'
                className='search-input form-control'
                value={searchKey}
                onChange={e => handleSearchKey(e)}
                />
            </div>
            <div className="form-group">
                <span><i className="fas icons fa-map-marker-alt"></i></span>
                <Input
                type='text'
                placeholder='Set location'
                className='search-input form-control'
                onChange={e => delayedQuery(e.target.value)}
                />
            </div>
            {/* <div className="form-group">
            <select className='search-select form-control' onChange={e => console.log(e.target.value)}>
                <option>Specialty</option>
                <option>Dentists</option>
                <option>Gynecologists</option>
                <option>Optamologists</option>
                <option>Pediatritians</option>
                <option>Cardiologists</option>
            </select>
            </div> */}

            <input type='button' value='search' className='search-btn' onClick={() => handleSearch(searchKey)} />
        </div>
    )
}

export default Search;