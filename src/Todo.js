import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todo = ({list, markAsCompleted}) => {
    return (
        <div>
            <TodoList list={list} setComplete={markAsCompleted} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        list: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        markAsCompleted: (itemIndex) => {
            dispatch({
                type: 'mark_as_completed',
                payload: itemIndex
            });
        }
    };
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);
export default TodoContainer;