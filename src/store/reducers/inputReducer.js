import { SET_FILTER_NAME } from "../constants/type"

const initialState = {
    filterName: ""
}

const inputReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_FILTER_NAME:
        return { ...state, filterName: payload }

    default:
        return state
    }
}

export default inputReducer;