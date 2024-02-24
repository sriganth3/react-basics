import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
       name: 'John Doe'
    } // state is always a json object.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Hi {this.state.name}
          </p>

          <button>Change Name</button>


        </header>
      </div>
    );
  }

}

export default App;
