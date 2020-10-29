export const locationAction = data => {
    return {
        type: 'latlng',
        data
    }
}

export const placeAction = data => {
    return {
        type: 'place',
        data
    }
}