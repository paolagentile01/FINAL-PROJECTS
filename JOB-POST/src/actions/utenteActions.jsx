export const ADD_FAV = 'ADD_FAV';



export const addFavorite = (title) => {
    return {
        type: ADD_FAV,
        payload: title
    }
}
 