import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';


class App extends Component {

  constructor() {
    super(); //calls constructor on component class for access to state variable
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //arrow function can automatically bind custom defined function to the class
  //lexical scoping: bind the function to the context in which it was defined -> class app
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    //destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        ></SearchBox>

        <CardList monsters={filteredMonsters}>

        </CardList>

      </div>
    );
  };
}

export default App;
