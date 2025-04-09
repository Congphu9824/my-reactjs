import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../Components/Todolist';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoForm from '../../Components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
    const initTodolist = [
        { id: 1, title: 'Learn React', status: 'new' },
        { id: 2, title: 'Sleep React', status: 'completed' },
        { id: 3, title: 'Code React', status: 'new' },
    ];

    const [todoList, setTodoList] = useState(initTodolist);

    const location = useLocation(); // is hook react router (v6+) get infor Url
    const navigate = useNavigate(); // used navigate to another page 

    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    // Nếu thay đổi URL (filter), cập nhật lại state
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        };
        newTodoList[index] = newTodo;
        setTodoList(newTodoList);
    };

    const handleFilterChange = (status) => {
        const queryParams = { status };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    };

    const renderTodoList = todoList.filter(
        todo => filterStatus === 'all' || filterStatus === todo.status
    );

    const handleTodoFormSubmit = (formValues) => {
        const newTodo = {
            id: todoList.length + 1,
            title: formValues.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>Todo Form</h3>
            {/* nhận dữ liệu từ todoform */}
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todos={renderTodoList} onTodoClick={handleTodoClick} />
            <div className='todo-filter'>
                <button onClick={() => handleFilterChange('all')}>Show all</button>
                <button onClick={() => handleFilterChange('completed')}>Show completed</button>
                <button onClick={() => handleFilterChange('new')}>Show new</button>
            </div>
        </div>
    );
}

export default ListPage;
