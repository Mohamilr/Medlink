import { combineReducers } from 'redux';
import location from './locationReducer';
import searchCoordinates from './searchCoordinatesReducer';
import detailsCoordinate from './detailsCoordReducer';


const allReducers = combineReducers({
    location: location,
    coordinates: searchCoordinates,
    detailsCoordinates: detailsCoordinate
})

export default allReducers;