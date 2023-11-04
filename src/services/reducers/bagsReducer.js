import { GET_BAGS, ADD_BAG, EDIT_BAG, DELETE_BAG, 
    FAILED, SUCCESS, ADD_SUCCESS } from "../constants/bagsConstants";

const initailState = {
    isLoading: false,
    bags: [],
    error: null,
    successMessage: null
}

const bagsReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_BAGS:
            return {
                ...state,
                isLoading: true,
                successMessage: null
            } 
        case ADD_BAG:
            return {
                ...state,
                successMessage: null
            } 
        case EDIT_BAG:
            return {
                ...state,
                successMessage: null
            } 
        case DELETE_BAG:
            return {
                ...state,
                successMessage: null
            } 
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                bags: action.payload
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
                bags: [],
                successMessage: null
            }  

        default:
            return state;
    }
}

export default bagsReducer;