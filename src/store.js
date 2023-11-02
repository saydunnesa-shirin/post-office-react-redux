import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import parcelsReducer from "./services/reducers/parcelsReducer";

export const store = createStore(parcelsReducer, applyMiddleware(thunk));