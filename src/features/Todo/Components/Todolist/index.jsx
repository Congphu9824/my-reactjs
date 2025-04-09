import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

//check data type of passed props
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

// if props are not passed then default value will be assigned to it
 TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
 }

function TodoList({todos, onTodoClick}) {
    const handleTodoClick = (todo, index) => {
        if(!onTodoClick){
            return;
        }
        else {
            onTodoClick(todo, index);
        }
    }
    return (
        // show list lên UI
        <ul className='todo-list'>
            {todos.map((todo, index) => (
                // key là thuộc tính duy nhất của từng phần tử trong mảng
                <li key={todo.id} className={classNames({
                    'todo-item': true,
                     completed: todo.status === 'completed'
                    })}
                    // todo là 1 object, index là vị trí của nó trong mảng
                    onClick={() => handleTodoClick(todo, index)}> 
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
