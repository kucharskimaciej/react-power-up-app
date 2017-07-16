import {combineReducers} from "redux";
import lists from "./lists";
import cards from "./cards";

export const rootReducer = combineReducers({
    lists,
    cards
});