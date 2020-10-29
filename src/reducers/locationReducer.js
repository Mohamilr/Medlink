const location = (state = [6.4550575, 3.3941795], action) => {
    switch(action.type) {
        case 'latlng':
            return state = action.data;
        default:
            return state;
    }
}

export default location;