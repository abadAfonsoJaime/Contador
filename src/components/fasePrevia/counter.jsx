import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  setBadgeClasses() {
    let classNames = "badge m-2 badge-";
    classNames += this.props.value === 0 ? "warning" : "primary";
    return classNames;
  }

  formatCount() {
    // Object Destructuring
    const { value } = this.props;
    // Pick the value property and store it in a separated constant
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
