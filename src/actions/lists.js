export const LISTS_RENAME = 'LIST_RENAME';

export function renameList(listId, title) {
    return {
        type: LISTS_RENAME,
        payload: {
            id: listId,
            title
        }
    };
}