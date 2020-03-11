import React, { Component } from 'react';

import Task from '../../components/task/task.js';

import { addTask, removeTask } from '../../actions/todo.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const addTaskIco = <FontAwesomeIcon icon={faPlusCircle} />

export class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newTask: '',
            tasksArray: []
        };
    }

    onChange = ({ target: { value } }) => {
        this.setState({
            newTask: value
        });
    }

    addTask = (e) => {
        e.preventDefault();

        const {
            newTask
        } = this.state;

        const {
            addTask
        } = this.props;

        addTask(newTask, false, false);

        this.setState({
            newTask: ''
        });
    }

    render() {

        const {
            newTask
        } = this.state;

        const {
            tasksArrayProps,
            removeTask
        } = this.props;

        const tasksArrayItems = tasksArrayProps.map((task, id) => {
            return <Task
                key={id}
                id={id}
                task={task}
                editModeTask={this.editModeTask}
                onEditTask={this.onEditTask}
                editTask={this.editTask}
                completeTask={this.completeTask}
                removeTask={removeTask}
            />
        });

        return(
            <div className='todo__wrapper'>
                <form>
                    <input type='text' value={newTask} onChange={this.onChange} placeholder='write a task'/>
                    <button onClick={this.addTask}>{addTaskIco}</button>
                </form>
                <div className='todo__tasks'>
                    <ul>
                        {tasksArrayItems}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    tasksArrayProps: state.todoReducer.tasksArray
}), { addTask, removeTask })(Todo);