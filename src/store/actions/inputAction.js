import { SET_FILTER_NAME } from "../constants/type"

export const actSetFilterName = (filerName) => ({
    type: SET_FILTER_NAME, 
    payload: filerName
})