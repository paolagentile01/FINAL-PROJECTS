import { FETCHING_ERROR } from "../actions/fetchDataActions";


const initialState = { //this is the reducer for the error handling
    error: null,
  };
  
  const errorReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_ERROR:
        return {
          error: action.payload
        };
    
      default:
        return {
            error: null
          };;
    }
  };
  
  export default errorReducer;