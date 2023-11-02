import axios from "axios";
import { GET_PARCELS, GET_PARCELS_API_URL, FAILED, SUCCESS,
ADD_PARCEL, EDIT_PARCEL, DELETE_PARCEL, ADD_SUCCESS } from "../constants/parcelsConstants";

export const getAllParcels = () => async(dispatch) => {
    dispatch({type: GET_PARCELS});
    try {
        const response = await axios.get(GET_PARCELS_API_URL);

        dispatch({type: SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const addParcel = (parcelRequest) => async(dispatch) => {
    dispatch({type: ADD_PARCEL});
    try {
        const response = await axios.post(GET_PARCELS_API_URL, {
            "parcelNumber": parcelRequest.parcelNumber,
            "recipientName": parcelRequest.recipientName,
            "destinationCountry": parcelRequest.destinationCountry,
            "weight": parcelRequest.weight,
            "price": parcelRequest.price,
            "bagId": parcelRequest.bagId
        });

        dispatch({type: ADD_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const editParcel = (parcelRequest) => async(dispatch) => {
    dispatch({type: EDIT_PARCEL});
    try {
        const response = await axios.put(GET_PARCELS_API_URL, {
            "parcelId": parcelRequest.parcelId,
            "parcelNumber": parcelRequest.parcelNumber,
            "parcelNumber": parcelRequest.parcelNumber,
            "recipientName": parcelRequest.recipientName,
            "destinationCountry": parcelRequest.destinationCountry,
            "weight": parcelRequest.weight,
            "price": parcelRequest.price,
            "bagId": parcelRequest.bagId
        });

        dispatch({type: ADD_SUCCESS, payload: response.data});

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 

export const deleteParcel = (id) => async(dispatch) => {
    dispatch({type: DELETE_PARCEL});
    try {
        const url = GET_PARCELS_API_URL + "/DeleteAsync/" + id; 
        
        const response = await axios.post(url);

        dispatch({type: ADD_SUCCESS, payload: response.data});
        dispatch(getAllParcels());

    } catch (error) {
        dispatch({type: FAILED, payload: error.message});
    }
} 