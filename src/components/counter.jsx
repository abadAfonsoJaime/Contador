import React, { Component } from "react";
// Controlled Component that raises events
class Counter extends Component {
  /*
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }*/

  componentWillUnmount() {
    console.log("Counter - Unmount");
    // Clean timers or listeners to avoid memory leaks
  }

  render() {
    console.log("Counter - Rendered", this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.setBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
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
