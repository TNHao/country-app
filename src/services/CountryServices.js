import axios from "axios"; 

const apiURL = 'https://restcountries.eu/rest/v2'; 

export const getContryApi = (endPoint) => {
    return axios ({
        url: `${apiURL}/${endPoint}`,
        method: 'GET'
    })
}