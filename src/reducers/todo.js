import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  EDIT_MODE_TASK,
  EDIT_TASK,
} from '../constants/constants.js';

const initialState = {
  tasksArray: [
  { text: 'Learn JS', isComplete: false, isEdit: false, isDelete: false },
  { text: 'Learn React', isComplete: false, isEdit: false, isDelete: false },
  { text: 'Learn Redux', isComplete: false, isEdit: false, isDelete: false },
  ]
};

const todoReducer = (state = initialState, { payload, type }) => {
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
    updatedTasksArray[payload.id] = {
    ...updatedTasksArray[payload.id],
    isDelete: !updatedTasksArray[payload.id].isDelete,
    };
    return {
    ...state,
    tasksArray: updatedTasksArray
    };
  case COMPLETE_TASK:
    const completedTasksArray = [...state.tasksArray];
    completedTasksArray[payload.id] = {
      ...completedTasksArray[payload.id],
      isComplete: !completedTasksArray[payload.id].isComplete,
    };
    return {
    ...state,
    tasksArray: completedTasksArray
    };
  case EDIT_MODE_TASK:
    const editModeArray = [...state.tasksArray];
    editModeArray[payload.id] = {
      ...editModeArray[payload.id],
      isEdit: !editModeArray[payload.id].isEdit,
    };
    return {
    ...state,
    tasksArray: editModeArray
    };
  case EDIT_TASK:
    const editedTasksArray = [...state.tasksArray];
    editedTasksArray[payload.id] = {
      ...editedTasksArray[payload.id],
      isEdit: !editedTasksArray[payload.id].isEdit,
    };
    return {
    ...state,
    tasksArray: editedTasksArray
    };
  default:
    return state;
  }
}

export default todoReducer;
