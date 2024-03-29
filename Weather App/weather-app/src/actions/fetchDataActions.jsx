export const GET_DATA = 'GET_DATA';
export const FETCHING_ERROR = 'FETCHING_ERROR';
/* export const IS_LOADING = 'IS_LOADING'; */

const apiKey = '6c6e849d54a8a74f5542dc039fea4bb4';

export function fetchDataSearch(location) { // action that handles two fetch and possible errors
    return async (dispatch) => {
        try {
          const [response1, response2] = await Promise.all([
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=2&units=metric&appid=${apiKey}`),
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=2&units=metric&appid=${apiKey}`),
          ]);

          const data1 = await response1.json();
          const data2 = await response2.json();
    
          console.log(data1);
          console.log(data2);

          if (response1.ok && response2.ok) {
            const cityData = {
              city: data1,
              details: data2,
            };
            dispatch({ type: FETCHING_ERROR, payload: null});
            dispatch({ type: GET_DATA, payload: cityData });
   /*          dispatch({ type: IS_LOADING, payload: false}); */

          }else{
            dispatch({ type: FETCHING_ERROR, payload: true});
       /*      dispatch({ type: IS_LOADING, payload: false}); */
          }
        } catch (error) {
          console.log(error);
          dispatch({ type: FETCHING_ERROR, payload: true});
        }
      };
}

export const GET_DETAILS = 'GET_DETAILS';

export function fetchClimeDetails(lat, lon) {// action that handles one fetch and possible error
  return async (dispatch) => {
      try {
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        const data = await resp.json();
  
        console.log(data);

        const climeData = {
          climeDetails: data
        };
        dispatch({ type: FETCHING_ERROR, payload: null});
        dispatch({ type: GET_DETAILS, payload: climeData });
     /*    dispatch({ type: IS_LOADING, payload: false}); */
      } catch (error) {
        console.log(error);
        dispatch({ type: FETCHING_ERROR, payload: true});
      /*   dispatch({ type: IS_LOADING, payload: false}); */
      }
    };
}
