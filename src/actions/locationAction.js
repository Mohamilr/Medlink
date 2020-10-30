export const locationAction = data => {
    return {
        type: 'latlng',
        data
    }
}

// it does nothing for now
export const placeAction = data => {
    return {
        type: 'place',
        data
    }
}