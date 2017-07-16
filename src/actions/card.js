export const CARD_UPDATE = 'CARD_UPDATE';
export const CARD_CREATE = 'CARD_CREATE';
export const CARD_REMOVE = 'CARD_REMOVE';
export const CARD_MOVE = 'CARD_MOVE';

export function createCard(listId, title) {
    return {
        type: CARD_CREATE,
        payload: {
            listId,
            card: {
                title,
                id: Date.now()
            }
        }
    };
}

export function removeCard(cardId) {
    return {
        type: CARD_REMOVE,
        payload: {
            id: cardId
        }
    };
}

export function updateCard(cardId, updates) {
    return {
        type: CARD_UPDATE,
        payload: {
            id: cardId,
            updates
        }
    };
}

export function moveCard(cardId, targetListId) {
    return {
        type: CARD_MOVE,
        payload: {
            id: cardId,
            listId: targetListId
        }
    };
}