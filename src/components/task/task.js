import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTrashAlt,
  faCheckCircle,
  faFlagCheckered,
} from '@fortawesome/free-solid-svg-icons';

import {
  COMPLETE_TASK_STYLE,
  NOT_COMPLETE_TASK_STYLE,
  WHITE_COLOR, BLUE_COLOR,
} from '../../constants/constants.js';

const editTaskIco = <FontAwesomeIcon icon={faPen} />
const removeTaskIco = <FontAwesomeIcon icon={faTrashAlt} />
const completeEditTaskIco = <FontAwesomeIcon icon={faCheckCircle} />
const checkedTaskIco = <FontAwesomeIcon icon={faFlagCheckered} />

export default class Task extends Component {

  handleRemoveTask = () => {
    const {
      id,
      removeTask
    } = this.props;

    removeTask(id);
  }

  handleCompleteTask = () => {
    const {
      id,
      completeTask
    } = this.props;

    completeTask(id);
  }

  handleEditMode = () => {
    const {
      id,
      editModeTask
    } = this.props;

    editModeTask(id);
  }

  onEdit = (e) => {
    const {
      id,
      onEdit
    } = this.props;

    onEdit(e, id);
  }

  handleEditTask = () => {
    const {
      id,
      editTask
    } = this.props;

    editTask(id);
  };

  render(){

    const {
      task
    } = this.props;

    return(
      task.isDelete ? (
        null
      ) : (
        task.isEdit ? (
          <li>
            <input type='text' value={task.text} onChange={this.onEdit}/>
            <button onClick={this.handleEditTask}>{completeEditTaskIco}</button>
          </li>
        ) : (
          <li>
            <button style={task.isComplete ? WHITE_COLOR : BLUE_COLOR} onClick={this.handleCompleteTask}>{checkedTaskIco}</button>
            <span style={task.isComplete ? COMPLETE_TASK_STYLE : NOT_COMPLETE_TASK_STYLE}>{task.text}</span>
            <button onClick={this.handleEditMode}>{editTaskIco}</button>
            <button onClick={this.handleRemoveTask}>{removeTaskIco}</button>
          </li>
        )
      )
       
    );
  }
}
