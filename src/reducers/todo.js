import { ADD_TASK, REMOVE_TASK } from '../constants/constants.js';

const initialState = {
    tasksArray: [
        { text: 'Learn JS', isComplete: false, isEdit: false, isDelete: false },
        { text: 'Learn React', isComplete: false, isEdit: false, isDelete: false },
        { text: 'Learn Redux', isComplete: false, isEdit: false, isDelete: false },
    ]
};

const todoReducer = (state = initialState, { id, payload, type }) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasksArray: [
                    ...state.tasksArray, payload
                ] 
            };
        case REMOVE_TASK:
            const updatedTasksArray = [...state.tasksArray];
            updatedTasksArray[payload.id].isDelete = !updatedTasksArray[payload.id].isDelete; 
            return {
                ...state,
                tasksArray: updatedTasksArray
            };
        default:
            return state;
    }
}

export default todoReducer;