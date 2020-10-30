import { combineReducers } from 'redux';
import { place, location } from './locationReducer';
import searchCoordinates from './searchCoordinatesReducer';
import detailsCoordinate from './detailsCoordReducer';


const allReducers = combineReducers({
    location: location,
    place: place,
    coordinates: searchCoordinates,
    detailsCoordinates: detailsCoordinate
})

export default allReducers;