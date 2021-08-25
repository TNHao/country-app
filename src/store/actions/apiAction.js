import { SET_LOADING, SET_COUNTRY_DATA, SET_ERROR } from "../constants/type";
import { getContryApi } from '../../services/CountryServices';

const actSetLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading
})

export const actSetCountryData = (data) => ({
    type: SET_COUNTRY_DATA,
    payload: data
})

export const actSetError = (err) => ({
    type: SET_ERROR,
    payload: err
})

export const actFetchCountryApi = (endPoint) => {
    return async (dispatch) => {
        dispatch(actSetLoading(true));

        try {
            const data = (await getContryApi(endPoint)).data;
            dispatch(actSetCountryData(data));
        } catch(err){
            console.log(err);
            dispatch(actSetError(err)); 
        }

        dispatch(actSetLoading(false));
    }
}