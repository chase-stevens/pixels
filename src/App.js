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
    this.state = { gridSize: 2 }
  }

  createPixelGrid = () => {
    let grid = [];

    for (let i = 0; i < 1024; i++) {
      grid.push(<Pixel />);
    }
    return grid;
  }

  render() {
    return(
      <div className="PixelGrid-Wrapper">
        {this.createPixelGrid()}
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
        <PixelGrid />
      </div>
    );
  }
}

export default App;
