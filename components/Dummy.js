import React, { Component } from 'react';
class App extends Component {
    componentDidMount() {
      // Runs after the first render() lifecycle
      console.log("Did mount called");
    }
    render() {
      console.log('Render lifecycle')
      return <h1>Hello World!</h1>;
    }
}
export default App;  