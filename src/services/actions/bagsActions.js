import axios from "axios";
import { GET_BAGS, GET_BAGS_API_URL, FAILED, SUCCESS,
ADD_BAG, EDIT_BAG, DELETE_BAG, ADD_SUCCESS } from "../constants/bagsConstants";

export const getAllBags = () => async(dispatch) => {
    dispatch({type: GET_BAGS});
    try {
        const response = await axios.get(GET_BAGS_API_URL);

        dispatch({type: SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const addBag = (bagRequest) => async(dispatch) => {
    dispatch({type: ADD_BAG});
    try {
        const response = await axios.post(GET_BAGS_API_URL, {
            "bagNumber": bagRequest.bagNumber,
            "contentType": bagRequest.contentType,
            "itemCount": bagRequest.itemCount,
            "weight": bagRequest.weight,
            "price": bagRequest.price,
            "shipmentId": bagRequest.shipmentId
        });

        dispatch({type: ADD_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const editBag = (bagRequest) => async(dispatch) => {
    dispatch({type: EDIT_BAG});
    try {
        const response = await axios.put(GET_BAGS_API_URL, {
            "bagId": bagRequest.bagId,
            "bagNumber": bagRequest.bagNumber,
            "contentType": bagRequest.contentType,
            "itemCount": bagRequest.itemCount,
            "weight": bagRequest.weight,
            "price": bagRequest.price,
            "shipmentId": bagRequest.shipmentId
        });

        dispatch({type: ADD_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const deleteBag = (id) => async(dispatch) => {
    dispatch({type: DELETE_BAG});
    try {
        const url = GET_BAGS_API_URL + "/DeleteAsync/" + id; 
        
        const response = await axios.post(url);

        dispatch({type: ADD_SUCCESS, payload: response.data});
        dispatch(getAllBags());

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 