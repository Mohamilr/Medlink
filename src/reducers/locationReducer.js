export const location = (state = [6.5244, 3.3792], action) => {
    switch(action.type) {
        case 'latlng':
            return state = action.data;
        default:
            return state;
    }
}

export const place = (state = [], action) => {
    switch(action.type) {
        case 'place':
            return state = action.data;
        default:
            return state;
    }
}