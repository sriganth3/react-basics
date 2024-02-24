import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
      "monsters": [
          {
            id: '1',
            name: 'Phineas'
          },
          {
            id: '2',
            name: 'Ferb'
          },
          {
            id: '3',
            name: 'Perry'
          }
      ]
    }; // state is always a json object.
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {

          return  <div key = {monster.id} >
                    <h1> {monster.name} </h1>
                  </div>
        })
        }
      </div>
    );
  }

}

export default App;
