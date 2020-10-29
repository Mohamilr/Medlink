const detailsCoordinate = (state = [], action) => {
    switch(action.type) {
        case 'detail-coordinate':
            return state = action.data;
        default:
            return state;
    }
}

export default detailsCoordinate;