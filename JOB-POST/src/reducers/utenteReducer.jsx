import { ADD_FAV } from '../actions/utenteActions';

const initialState = {
    list:[]   
}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
/*         case 'REMOVE_FAV':
            return {
                ...state,
                list: state.list.filter((fav) => fav !== action.payload)
            } */
        default:
            return state;
    }
}

export default favReducer;