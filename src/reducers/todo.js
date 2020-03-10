import { ADD_TASK, REMOVE_TASK } from '../constants/constants.js';

const initialState = {
    tasksArray: [
        { text: 'Learn JS', isComplete: false, isEdit: false },
        { text: 'Learn React', isComplete: false, isEdit: false },
        { text: 'Learn Redux', isComplete: false, isEdit: false }
    ]
};

const todoReducer = (state = initialState, { text, isComplete, isEdit, type }) => {
    switch (type) {
        case ADD_TASK:
            return[
                ...state,
                {
                    text,
                    isComplete,
                    isEdit,
                }
            ];
        default:
            return state;
    }
}

export default todoReducer;