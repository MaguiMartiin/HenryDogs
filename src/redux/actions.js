import axios from 'axios'

export const GET_DOGS = "GET_DOGS"
export const GET_BY_ID = "GET_BY_ID"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const CREATE_DOGS = "CREATE_DOGS"
export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const FILTER_DOGS_BY_TEMPERAMENT = "FILTER_DOGS_BY_TEMPERAMENT"
export const FILTER_BY_SITE = "FILTER_BY_SITE"
export const SORT_BY_NAME = "SORT_BY_NAME"
export const SORT_BY_WEIGHT = "SORT_BY_WEIGHT"
const URL = process.env.REACT_APP_URL;

export const getDogs = () => {
    return async function (dispatch) {
        const dogs = (await axios.get(`http://localhost:3001/dogs`)).data
        return dispatch({type: GET_DOGS, payload: dogs})
    }
}

export const getById = (id) => {
    return async function (dispatch) {
        const dogDetail = await axios.get(`http://localhost:3001/dogs/${id}`)
        dispatch({type: GET_BY_ID, payload: dogDetail.data})
    }
}

export const getTemperaments = () => {
    return async function (dispatch){
        const temperaments = await axios.get(`http://localhost:3001/temperaments`)
        dispatch({type: GET_TEMPERAMENTS, payload: temperaments.data})
    }
}

export const createDog = (payload) => {
    return async function (dispatch){
        await axios.post(`http://localhost:3001/dogs`, payload)
        dispatch({type: CREATE_DOGS})
    }
}

export const filterByName = (name) => {
    return async function (dispatch) {
        const dog = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
        dispatch({type: FILTER_BY_NAME, payload: dog.data})
    }
}

export const filterDogsByTemperament = (temperament) => {
    return {type: FILTER_DOGS_BY_TEMPERAMENT, payload: temperament}
}

export const filterBySite = (fromDB) => {
    return {type: FILTER_BY_SITE, payload: fromDB}
}

export const sortByName = (order) => {
    return {type: SORT_BY_NAME, payload: order}
}

export const sortByWeight = (orderW) => {
    return {type: SORT_BY_WEIGHT, payload: orderW}
}
