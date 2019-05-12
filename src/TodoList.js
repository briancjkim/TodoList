import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(todo) {
    // 이렇게하면 push로할필요없다 push는 새로운 element의 인덱스를리턴한다
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  editTodo(editTodo) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === editTodo.id) {
        return { ...todo, task: editTodo.task };
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  toggleTodo(id) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  }
  removeTodo(id) {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos
    });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List <span>A Simple Todo List App!</span>
        </h1>

        <ul>
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              task={todo.task}
              id={todo.id}
              editTodo={this.editTodo}
              removeTodo={this.removeTodo}
              toggleTodo={this.toggleTodo}
              completed={todo.completed}
            />
          ))}
        </ul>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
