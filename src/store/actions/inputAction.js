import { SET_FILTER_NAME, SET_REGION } from "../constants/type"

export const actSetFilterName = (filerName) => ({
    type: SET_FILTER_NAME, 
    payload: filerName
})