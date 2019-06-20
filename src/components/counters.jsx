import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // A Controlled Component as it doesn't have any state
  // It simply receives data and methods to modify the data via props (in the App Component)
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // The Counter component raises the on-events,
            // but is not handled by the parent component
            // instead events are bubblied up to Counters
          />
        ))}
      </div>
    );
  }
}

export default Counters;
