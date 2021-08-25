import { SET_LOADING, SET_COUNTRY_DATA, SET_ERROR } from "../constants/type";

const initialState = {
    loading: false,
    data: "",
    error: null
}

const apiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return { ...state, loading: payload }

        case SET_COUNTRY_DATA:
            return { ...state, data: payload }

        case SET_ERROR:
            return { ...state, error: payload }

        default:
            return state
    }
}

export default apiReducer;