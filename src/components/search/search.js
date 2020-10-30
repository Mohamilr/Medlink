/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { locationAction } from "../../actions/locationAction";
import { coordinateAction } from "../../actions/searchCoordinateAction";
import Input from "../../shared/input";
import "./search.css";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [locationText, setLocationText] = useState("");
  // redux state
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  // debounce call to the location api
  const delayedQuery = useCallback(
    _.debounce((q) => handleLocation(q), 500),
    []
  );

  // search history
  const handleSearchHistory = (searchKey, locationText) => {
    let local = localStorage.getItem("search-data");
    let oldLocal = JSON.parse(local);

    const history = [];

    const store = {
      searchKey,
      locationText,
    };
    history.push(store);

    // update localstorage content
    if (local === null) {
      localStorage.setItem("search-data", JSON.stringify(history));
    } else {
      // let oldLocal = JSON.parse(local);
      let newLocal = oldLocal;
      if (newLocal.length >= 5) {
        newLocal.shift();
      }
      newLocal.push(store);
      localStorage.setItem("search-data", JSON.stringify(newLocal));
    }
  };

  const handleLocation = async (location) => {
    try {
      const response = await fetch(
        `https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${location}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key":
              "feb5a7b223msh76b7a43e38446bfp1eb31ajsne300800cf916",
          },
        }
      );

      const data = await response.json();
      if (data.length < 1) {
        return console.log("not found");
      }

      const coord = [
        data.results[0].geometry.location.lat,
        data.results[0].geometry.location.lng,
      ];
      // redux action
      dispatch(locationAction(coord));

      // location text for search history
      setLocationText(location);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearch = async (searchKey) => {
    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/geometrySearch/${searchKey}.json?geometryList=%5B%7B%22type%22%3A%22POLYGON%22%2C%20%22vertices%22%3A%5B%22${location[0]}%2C%20${location[1]}%22%2C%20%22${location[0]}%2C%20${location[1]}%22%2C%20%22${location[0]}%2C%20${location[1]}%22%2C%20%22${location[0]}%2C%20${location[1]}%22%5D%7D%2C%20%7B%22type%22%3A%22CIRCLE%22%2C%20%22position%22%3A%22${location[0]}%2C%20${location[1]}%22%2C%20%22radius%22%3A10000%7D%5D&limit=20&idxSet=POI&key=ciIsGdG3irXcWG9ukyhZfMvZ0aZUbnkU`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      if (!data.results) {
        return console.log("not found");
      }

      // array to store latitude and longitude
      const latAndLng = [];
      data.results.map((latlng) => {
        return latAndLng.push({
          lat: latlng.position.lat,
          lng: latlng.position.lon,
          name: latlng.poi.name,
          address: latlng.address.freeformAddress,
        });
      });
      // redux action
      dispatch(coordinateAction(latAndLng));

      // call search history function
      handleSearchHistory(searchKey, locationText);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="search-cont">
      <div className="form-group">
        <span>
          <i className="fas icons fa-search"></i>
        </span>
        <select
          className="search-select form-control"
          onChange={(e) => handleSearchKey(e)}
        >
          <option>Hospital</option>
          <option>Clinic</option>
          <option>Dental</option>
          <option>General Surgeon</option>
          <option>Laboratory</option>
          <option>Optical</option>
          <option>Pharmacy</option>
          {/* <option>Psychiatrist</option> */}
          <option>Physiotherapy</option>
          <option>Scan</option>
          <option>X - ray</option>
          {/* <option>Neurologist</option> */}

          {/* <option>Paediatrician</option> */}
        </select>
        {/* <Input
                type='text'
                placeholder='Search for closest facility e.g hospital, pharmacy, optician'
                className='search-input form-control'
                value={searchKey}
                onChange={e => handleSearchKey(e)}
                required
                spellcheck="true"
                />
            </div>
            <div className="form-group">
                <span><i className="fas icons fa-map-marker-alt"></i></span>
                <Input
                type='text'
                placeholder='Set location e.g Ikeja, Nigeria'
                className='search-input form-control'
                onChange={e => delayedQuery(e.target.value)}
                required
                spellcheck="true"
                />
            </div>
            {/* <div className="form-group">
            <select className='search-select form-control' onChange={e => console.log(e.target.value)}>
                <option>Specialty</option>
                <option>Dentists</option>
                <option>Gynecologists</option>
                <option>Opthamologists</option>
                <option>Pediatricians</option>
                <option>Cardiologists</option>
            </select>
            </div> */}

      <input
        type="button"
        value="search"
        className="search-btn"
        onClick={() => handleSearch(searchKey)}
      />
    </div>
  );
};

export default Search;
