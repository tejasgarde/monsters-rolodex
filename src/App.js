import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state ={
      monsters : [
        {
          name : 'Frankenstein',
          id: 'asc1'
        },
        {
          name : 'Dracula',
          id: 'asc2'
        },
        {
          name : 'Zombi',
          id: 'asc3'
        }
      ]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }
// All the Properties passed to components are received in props 
  render() {
    return (
      <div className="App">
        <CardList name="Luke Skywalker">
          Luke Skywalker
        </CardList>
      {this.state.monsters.map(mon => <h1 key={mon.id}>{mon.name}</h1>)}
    </div>
    );
  }
}
export default App;
