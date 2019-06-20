import React, { Component } from "react";
// Controlled Component that raises events
class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  setBadgeClasses() {
    let classNames = "badge m-2 badge-";
    classNames += this.props.counter.value === 0 ? "warning" : "primary";
    return classNames;
  }

  formatCount() {
    // Object Destructuring
    const { value } = this.props.counter;
    // Pick the value property and store it in a separated constant
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
