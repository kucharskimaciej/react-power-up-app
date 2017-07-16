import {CARD_CREATE, CARD_MOVE, CARD_REMOVE, CARD_UPDATE} from "../actions/card";

export default function CardsReducer(state = [], action) {
    switch (action.type) {
        case CARD_CREATE:
            return [...state, { ...action.payload.card, list_id: action.payload.listId }];

        case CARD_REMOVE:
            return state.filter(card => card.id !== action.payload.id);

        case CARD_UPDATE:
            return state.map(card => {
                if (card.id === action.payload.id) {
                    return {...card, ...action.payload.updates};
                } else {
                    return card;
                }
            });

        case CARD_MOVE:
            return state.map(card => {
                if (card.id === action.payload.id) {
                    return {...card, list_id: action.payload.listId};
                } else {
                    return card;
                }
            });

        default:
            return state;
    }
}