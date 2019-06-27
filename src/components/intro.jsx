/* Essence of React Components
    - Rendering Lists
    - Conditional Rendering
    - JS styles applications
    - Handling Events
    - Updating the State
*/
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Introduction extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imageURL} alt="" />
        <span style={this.styles}>{this.formatCount()}</span>
        <p style={{ fontSize: 30 }}>texto con estilos inline</p>

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.doHandleIncrement({ id: 1 })}>
          Increment
        </button>
        <div>{this.renderTags()}</div>
      </div>
    );
  }
  // Look at the console to recognize methods!!
  doHandleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
    // <button onClick={this.handleIncrement()}>Increment</button> ERROR: Maximum update depth exceeded error
  };

  renderTags() {
    if (this.state.tags.length === 0) return <span>There are no tags!</span>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { count } = this.state;
    //const noHay = <span>Zero</span>;
    return count === 0 ? "Zero" : count;
  }
}

export default Introduction;
