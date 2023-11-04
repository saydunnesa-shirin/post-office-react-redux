// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import parcelsReducer from "./services/reducers/parcelsReducer";

// export const store = createStore(parcelsReducer, applyMiddleware(thunk));

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import parcelsReducer from "./services/reducers/parcelsReducer";
import bagsReducer from "./services/reducers/bagsReducer";

import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    parcelsReducer: parcelsReducer,
    bagsReducer: bagsReducer
});

export const store = createStore(allReducers, applyMiddleware(thunk));