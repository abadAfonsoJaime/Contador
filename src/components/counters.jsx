import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // A Controlled Component as it doesn't have any state. It's entirely controlled by its parent
  // It simply receives data and methods to modify the data via props (in the App Component)
  render() {
    console.log("Counters - Rendered", this.props);
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            // The Counter component raises the on-events,
            // but is not handled by the parent component
            // instead events are bubblied up to Counters
            // un then bublied up again to App.js
          />
        ))}
      </div>
    );
  }
}

export default Counters;
