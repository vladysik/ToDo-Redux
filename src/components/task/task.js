import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faArrowsAlt, faCheckCircle, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

import { COMPLETE_TASK_STYLE, NOT_COMPLETE_TASK_STYLE, WHITE_COLOR, BLUE_COLOR } from '../../constants/constants.js';

const moveTaskIco = <FontAwesomeIcon icon={faArrowsAlt} />
const editTaskIco = <FontAwesomeIcon icon={faPen} />
const removeTaskIco = <FontAwesomeIcon icon={faTrashAlt} />
const completeEditTaskIco = <FontAwesomeIcon icon={faCheckCircle} />
const checkedTaskIco = <FontAwesomeIcon icon={faFlagCheckered} />

export default class Task extends Component {

    handleEditMode = () => {
        this.props.editModeTask(this.props.id);
    }

    handleEditTask = (e) => {
        this.props.onEditTask(e, this.props.id);
    }

    handleEditTaskOK = () => {
        this.props.editTask(this.props.id);
    }

    handleCompleteTask = () => {
        this.props.completeTask(this.props.id);
    }

    handleRemoveTask = () => {
        this.props.removeTask(this.props.id);
    }

    render(){

        const { task } = this.props;

        return(
            task.isEdit ? (
                <li>
                    <input type='text' value={task.text} onChange={this.handleEditTask}/>
                    <button onClick={this.handleEditTaskOK}>{completeEditTaskIco}</button>
                </li>
            ) : (
                <li>
                    <button>{moveTaskIco}</button>
                    <button style={task.isComplete ? WHITE_COLOR : BLUE_COLOR} onClick={this.handleCompleteTask}>{checkedTaskIco}</button>
                    <span style={task.isComplete ? COMPLETE_TASK_STYLE : NOT_COMPLETE_TASK_STYLE}>{task.text}</span>
                    <button onClick={this.handleEditMode}>{editTaskIco}</button>
                    <button onClick={this.handleRemoveTask}>{removeTaskIco}</button>
                </li>
            )
        );
    }
}