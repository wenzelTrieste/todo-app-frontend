import React, { Component } from 'react';
import Header from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <Header name="Tafefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}