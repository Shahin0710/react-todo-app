import * as Types from "../Types";

const initializeState = {
    users: [],
    singleData: {},
    usersForm: {
        Title: ''
    },
}

function todoReducer(state = initializeState, action) {
    switch (action.type) {

        case Types.LOAD_TODO:
            return {
                ...state,
                users: action.payload,
            };
            break;

        case Types.ADD_TODO:
            return {
                ...state,
                usersForm: {
                    Title: ''
                },
                singleData: {},

             };
            break;

        case Types.CHANGE_INPUT:
            const usersForm = { ...state.usersForm };
            usersForm[action.payload.name] = action.payload.value
            return {
                ...state,
                usersForm: usersForm,
            };
            break;

        case Types.EDIT_TODO:
            return {
                ...state,
                singleData: action.payload
            };
            break;

        default:
            break;
    }
    return state;
}

export default todoReducer;




