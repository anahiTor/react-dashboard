export function createReducer(initialState, cb) {
    return function (state = initialState, action) {
        const switchableObject = cb(state, action);
        if (switchableObject.hasOwnProperty(action.type)) {
            if (typeof switchableObject[action.type] === 'function') {
                return switchableObject[action.type]();
            }
            return switchableObject[action.type];
        }
        return state;
    };
}