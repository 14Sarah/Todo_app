import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handlechange = (event) => {
    this.setState({
      input: event.target.value,
    });
    // console.log(this.state.input)
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;
    allItems.push(input);
    this.setState({
      items: allItems,
    });
  };

  deleteitems = (key) => {
    // console.log(key)
    const allItems = this.state.items;
    allItems.splice(key, 1);

    this.setState({
      items: allItems,
    });
  };

  render() {
    const { input, items } = this.state;

    console.log(items);

    return (
      <div className="todo-container">
        <h1>Todo-App</h1>
        <form className="input-section" onSubmit={this.storeItems}>
          <input
            type="text"
            value={input}
            onChange={this.handlechange}
            placeholder="Enter the items...."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {" "}
              {data}{" "}
              <i
                class="fa-solid fa-trash-can"
                onClick={() => this.deleteitems(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
