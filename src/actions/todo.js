import { ADD_TASK, REMOVE_TASK } from '../constants/constants.js';

export const addTask = (text, isCompleted, isEdit) => ({
    type: ADD_TASK,
    text,
    isCompleted,
    isEdit
});

export const removeTask = () => ({
    type: REMOVE_TASK
});