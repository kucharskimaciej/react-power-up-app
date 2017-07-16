import {LISTS_RENAME} from "../actions/lists";
import {CARD_CREATE, CARD_MOVE, CARD_REMOVE, CARD_UPDATE} from "../actions/card";

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

        case CARD_CREATE:
            return state.map(list => {
                if (list.id === action.payload.listId) {
                    return {...list, cards: [...list.cards, action.payload.card]};
                } else {
                    return list;
                }
            });

        case CARD_REMOVE:
            return state.map(list => {
                const cards = list.cards.filter(card => card.id !== action.payload.id);

                if (cards.length !== list.cards.length) {
                    return {...list, cards};
                } else {
                    return list;
                }
            });

        case CARD_UPDATE:
            return state.map(list => {
                let change = false;
                const cards = list.cards.map(card => {
                    if (card.id === action.payload.id) {
                        change = true;
                        return {...card, ...action.payload.updates};
                    } else {
                        return card;
                    }
                });

                return change ? {...list, cards} : list;
            });

        case CARD_MOVE:
            let movedCard;
            return state
                .map(list => {
                    const cards = list.cards.filter(card => {
                        if (card.id === action.payload.id) {
                            movedCard = card;
                        }

                        return card.id !== action.payload.id;
                    });

                    return cards.length !== list.cards.length ?
                        {...list, cards} : list;
                }).map(list => {
                    return list.id === action.payload.listId ?
                        { ...list, cards: [...list.cards, movedCard]} :
                        list;
                });

        default:
            return state;
    }
}