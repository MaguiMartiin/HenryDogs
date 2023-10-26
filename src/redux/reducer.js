import {GET_DOGS, GET_BY_ID, GET_TEMPERAMENTS, CREATE_DOGS, FILTER_BY_NAME, FILTER_DOGS_BY_TEMPERAMENT, FILTER_BY_SITE, SORT_BY_NAME, SORT_BY_WEIGHT} from "./actions"

const initialState = {
    dogs: [],
    dogsCopy: [],
    dogId: [],
    temperaments: [], 
    order: "asc"
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DOGS:
            return {...state, dogs: action.payload, dogsCopy: action.payload}
        case GET_BY_ID:
            return {...state, dogId: action.payload}
        case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload}
        case CREATE_DOGS:
            return {...state, dogs: [action.payload]}
        case FILTER_DOGS_BY_TEMPERAMENT:
            const temperament = action.payload  
            const allDogs = state.dogsCopy 
            const filteredDog = action.payload === "default" ? allDogs :
            action.payload === "none" ? state.dogsCopy.filter(dog => dog.temperament === undefined || dog.temperament.length === 0) :
            state.dogsCopy.filter((dog) =>
            Array.isArray(dog.temperament) && dog.temperament.includes(temperament)
            )
            return {...state, dogs: filteredDog}
        case FILTER_BY_NAME:
            return {...state, dogs: action.payload}
        case FILTER_BY_SITE:
            const fromDB = action.payload
            const dogFilter = state.dogsCopy.filter(dog=>dog.created === fromDB)
            return {...state, dogs: dogFilter}
        case SORT_BY_NAME:
            const order = action.payload
            const sortedDogs = state.dogs.slice().sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                return nameA.localeCompare(nameB)})
              if (order === "desc") {
                sortedDogs.reverse()}
              return { ...state, dogs: sortedDogs }
        case SORT_BY_WEIGHT: 
        const alldogs = state.dogsCopy
        const orderW = action.payload === "default"? alldogs : action.payload === "desc"
        ? [...state.dogs].sort((a, b) => {
            const weightMinA = parseInt(a.weightMin)
            const weightMinB = parseInt(b.weightMin)
            const weightMaxA = parseInt(a.weightMax)
            const weightMaxB = parseInt(b.weightMax)
            if (weightMinA === weightMinB) {
              return weightMaxB - weightMaxA}
            return weightMinB - weightMinA})
        : [...state.dogs].sort((a, b) => {
            const weightMinA = parseInt(a.weightMin)
            const weightMinB = parseInt(b.weightMin)
            const weightMaxA = parseInt(a.weightMax)
            const weightMaxB = parseInt(b.weightMax)
            if (weightMinA === weightMinB) {
              return weightMaxA - weightMaxB}
            return weightMinA - weightMinB})
        return { ...state, dogs: orderW }
        default: 
            return {...state}
    }
}

export default rootReducer