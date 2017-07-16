export const LISTS_RENAME = 'LIST_RENAME';
export const LISTS_UPDATE = 'LIST_UPDATE';
export const LISTS_REMOVE = 'LIST_REMOVE';
export const LISTS_CREATE = 'LIST_CREATE';

export function renameList(listId, title) {
    return {
        type: LISTS_RENAME,
        payload: {
            id: listId,
            title
        }
    };
}