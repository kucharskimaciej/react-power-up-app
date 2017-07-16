import {LISTS_RENAME} from "../actions/lists";

export default function ListsReducer(state = [], action) {
    switch (action.type) {
        case LISTS_RENAME:
            return state.map(list => {
                if (list.id === action.payload.id) {
                    return {...list, title: action.payload.title};
                } else {
                    return list;
                }
            });

        default:
            return state;
    }
}