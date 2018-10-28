import React, { Component } from 'react';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Pixel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    return <div
              className={this.state.isOn ? 'Pixel Blue' : 'Pixel Red'}
              onMouseOver={this.mouseOver}
            ></div>
  }
}

class PixelGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridSize: 256 }
  }

  createPixelGrid(size) {
    let grid = [];

    for (let i = 0; i < size; i++) {
      grid.push(<Pixel />);
    }
    return grid;
  }

  render() {
    return(
      <div className="PixelGrid-Wrapper">
        {this.createPixelGrid(this.state.gridSize)}
      </div>
    )
  }
}

class AddingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return(
      <div className="AddingButtonWrapper">
        <button onClick={this.handleClick}>Click me</button>
        <p> Counter: {this.state.counter} </p>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Welcome">
          <Welcome name="Chase" />
        </div>
        <AddingButton />
      </div>
    );
  }
}

export default App;
