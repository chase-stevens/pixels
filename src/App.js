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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    return <div
              className={this.state.isOn ? 'Pixel Blue' : 'Pixel Red'}
              onClick={this.handleClick}
            ></div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Welcome">
          <Welcome name="Chase" />
        </div>
        <div><Pixel /><Pixel /><Pixel /><Pixel /></div>
        <div><Pixel /><Pixel /><Pixel /><Pixel /></div>
        <div><Pixel /><Pixel /><Pixel /><Pixel /></div>
        <div><Pixel /><Pixel /><Pixel /><Pixel /></div>
      </div>
    );
  }
}

export default App;
