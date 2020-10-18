import React from 'react';
import './search.css'

const Search = () => {
    return (
        <div className='search-cont'>
            <div>
           <span><i className="fas icons fa-search"></i></span><input type='text' placeholder='Search for closest facility' className='search-input' />
            </div>
            <div>
            <span><i className="fas icons fa-map-marker-alt"></i></span><input type='text' placeholder='Set location' className='search-input'/>
            </div>
            <div>
            <select className='search-select'>
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