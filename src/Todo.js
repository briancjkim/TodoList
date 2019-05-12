import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedTodo: this.props.task
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: true
    });
  }
  // toggle "completed":false or true
  handleToggleTodo() {
    this.props.toggleTodo(this.props.id);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  // edit한것을 제출한다.
  handleSubmit(e) {
    e.preventDefault();
    const editedTodo = { task: this.state.editedTodo, id: this.props.id };
    this.props.editTodo(editedTodo);
    this.setState({
      isEditing: false
    });
  }
  render() {
    const { task, completed } = this.props;
    return (
      <>
        {this.state.isEditing ? (
          <div className="Todo">
            <form className="Todo-edit-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.editedTodo}
                name="editedTodo"
                onChange={this.handleChange}
              />
              <button>Save</button>
            </form>
          </div>
        ) : (
          <div className="Todo">
            <li
              onClick={this.handleToggleTodo}
              className={completed ? "Todo-task completed" : "Todo-task"}
            >
              {task}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.toggleForm}>
                <i className="fas fa-pen" />
              </button>
              <button onClick={this.handleRemove}>
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Todo;
