import {
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    EDIT_MODE_TASK,
    EDIT_TASK,
} from '../constants/constants.js';

export const addTask = (text, isCompleted, isEdit, isDelete) => ({
    type: ADD_TASK,
    payload: {
        text,
        isCompleted,
        isEdit,
        isDelete,
    }
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: {
        id,
    }
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload: {
        id,
    }
});

export const editModeTask = (id) => ({
    type: EDIT_MODE_TASK,
    payload: {
        id,
    }
});

export const editTask = (id) => ({
    type: EDIT_TASK,
    payload: {
        id,
    }
});
