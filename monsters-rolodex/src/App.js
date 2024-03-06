import { Component } from 'react';
import './App.css';
import CardList, { CardListComponent } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }; // state is always a json object.

    // console.log('constructor');
  }

  componentDidMount() {
    
    // console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState(  
      () => {
        return {monsters: users, filteredMonsters: users};
      }, 

      () => {
        // console.log(this.state);
      }));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);

    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchString };
    })
  };

  render() {

    console.log('render from App.js');

    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    
    return (
      <div className="App">

        <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }

  /*

  Lifecycle of components
  1. constructor
  2. render
  3. componentDidMount
  4. render

  */

}

export default App;
