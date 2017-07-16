import {createStore} from "redux";
import {rootReducer} from "../reducers/index";

export const initialState = {
    lists: [
        {
            id: 0,
            title: 'To do',
            cards: [
                {
                    id: 0,
                    title: 'Learn about the react-saga',
                    user: null
                },
                {
                    id: 1,
                    title: 'Find out how to optimize React for performance',
                    user: null
                },
                {
                    id: 2,
                    title: 'Test the application',
                    user: null
                }
            ]
        },
        {
            id: 1,
            title: 'Doing',
            cards: [
                {
                    id: 4,
                    title: 'Using side-effects in Redux'
                }
            ]
        },
        {
            id: 2,
            title: 'Done',
            cards: [
                {
                    id: 5,
                    title: 'Learn React basics'
                }
            ]
        }
    ]
};

export const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
