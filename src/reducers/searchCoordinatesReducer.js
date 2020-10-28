const searchCoordinates = (state = [], action) => {
    switch(action.type) {
        case 'coordinates':
            return state = action.data;
        default:
            return state;
    }
}

export default searchCoordinates;