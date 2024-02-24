import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
       name: 'John Doe',
       company: 'FB'
    }; // state is always a json object.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>

          <button onClick={() => {

            /* 
            React will not detect this way of changing the and re-render the object

            this.state.name = 'Jane Doe'
            console.log(this.state.name);
            */

            /*
            this.setState({name: 'Jane Doe'});
            
            setState is a async call, so while doing console log first time, state will remain same :)

            console.log(this.state);
            */

            this.setState((state, props) => {
              return {
                name: 'Jane Doe'
              }
            }, () => {
              console.log(this.state)
            })

            

          }}>Change Name</button>
          {/* EventHandler */}

        </header>
      </div>
    );
  }

}

export default App;
