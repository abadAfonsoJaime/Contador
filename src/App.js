import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

// import './App.css';

// Lifting the state up
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", props);
    // setState directly in the constructor
    // this.state = this.props.something
  }

  componentDidMount() {
    console.log("App - Mounted");
    // Ajax Call
    // this.setState({ newData })
  }

  render() {
    console.log("App - Mounted");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters} // The state of App Component
            // The props of the Counters Component: 5 properties
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = theCounter => {
    console.log(theCounter); // parameter
    const counters = [...this.state.counters]; // Cloning the array
    // Index of the first occurrence of counter (paremater) in the counters array
    const index = counters.indexOf(theCounter);
    // Clone the counter at the given location to avoid mutation of the state
    counters[index] = { ...theCounter };
    counters[index].value++; // Now the state remains inmmutable!
    //console.log(this.state.counters[0]);
    this.setState({ counters }); // Finally update the state
  };

  handleDecrement = theCounter => {
    console.log("Event Handler 'DECREMENT' called", theCounter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(theCounter);
    counters[index] = { ...theCounter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler 'Delete' Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    console.log("Event Handler called: Reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default App;
