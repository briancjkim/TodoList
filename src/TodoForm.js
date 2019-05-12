import React, { Component } from "react";
import uuid from "uuid/v4";
import "./TodoForm.css";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      isEditing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task) {
      const todo = { task: this.state.task, id: uuid(), completed: false };
      this.props.addTodo(todo);
      this.setState({
        task: ""
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="NewTodoForm">
          <label htmlFor="task">New Todo</label>
          <input
            id="task"
            type="text"
            onChange={this.handleChange}
            name="task"
            value={this.state.task}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
