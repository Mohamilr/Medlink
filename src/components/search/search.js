import React from 'react';
import './search.css'

const Search = () => {
    return (
        <div className='search-cont'>
            <div className="form-group">
           <span><i className="fas icons fa-search"></i></span><input type='text' placeholder='Search for closest facility' className='search-input form-control' />
            </div>
            <div className="form-group">
            <span><i className="fas icons fa-map-marker-alt"></i></span><input type='text' placeholder='Set location' className='search-input form-control'/>
            </div>
            <div className="form-group">
            <select className='search-select form-control'>
                <option>Specialty</option>
                <option>Dentists</option>
                <option>Gynecologists</option>
                <option>Optamologists</option>
                <option>Pediatritians</option>
                <option>Cardiologists</option>
            </select>
            </div>

            <input type='button' value='search' className='search-btn' />
        </div>
    ) 
}

export default Search;