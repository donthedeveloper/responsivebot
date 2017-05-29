const initialState = [];

const messages = (state=initialState, action) => {
    const messages = [...state];

    switch (action.type) {
        case ADD_MESSAGE:
            messages.unshift(action.message);
            break;
        default:
            return state;
    }

    return messages;
};

const ADD_MESSAGE = 'ADD_MESSAGE';

export const add = (message) => ({
    type: ADD_MESSAGE, 
    message
});

export {messages};