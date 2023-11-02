import { GET_PARCELS, ADD_PARCEL, EDIT_PARCEL, DELETE_PARCEL, 
    FAILED, SUCCESS, ADD_SUCCESS } from "../constants/parcelsConstants";

const initailState = {
    isLoading: false,
    parcels: [],
    error: null,
    successMessage: null
}

const parcelsReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_PARCELS:
            return {
                ...state,
                isLoading: true,
                successMessage: null
            } 
        case ADD_PARCEL:
            return {
                ...state,
                successMessage: null
            } 
        case EDIT_PARCEL:
            return {
                ...state,
                successMessage: null
            } 
        case DELETE_PARCEL:
            return {
                ...state,
                successMessage: null
            } 
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                parcels: action.payload
            }  
        case ADD_SUCCESS:
            return {
                ...state,
                successMessage: action.payload
            }  
        case FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                parcels: [],
                successMessage: null
            }  

        default:
            return state;
    }
}

export default parcelsReducer;