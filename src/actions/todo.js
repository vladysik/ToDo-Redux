import { ADD_TASK, REMOVE_TASK } from '../constants/constants.js';

export const addTask = (text, isCompleted, isEdit, isDelete) => ({
    type: ADD_TASK,
    payload: {
        text,
        isCompleted,
        isEdit,
        isDelete
    }
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: {
        id
    }
});