import {createStore} from "redux";
import {rootReducer} from "../reducers/index";

export const initialState = {
    "cards": [
        {
            "id": 0,
            "title": "Learn about the react-saga",
            "list_id": 0,
            "user": null
        },
        {
            "id": 1,
            "title": "Find out how to optimize React for performance",
            "list_id": 0,
            "user": null
        },
        {
            "id": 2,
            "title": "Test the application",
            "list_id": 0,
            "user": null
        },
        {
            "id": 4,
            "list_id": 1,
            "title": "Using side-effects in Redux"
        },
        {
            "id": 5,
            "list_id": 2,
            "title": "Learn React basics"
        }
    ],
    "lists": [
        {
            "id": 0,
            "title": "To do"
        },
        {
            "id": 1,
            "title": "Doing"
        },
        {
            "id": 2,
            "title": "Done"
        }
    ],
    "users": []
};

export const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
