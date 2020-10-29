const location = (state = [7.3775, 3.9470], action) => {
    switch(action.type) {
        case 'latlng':
            return state = action.data;
        default:
            return state;
    }
}

export default location;