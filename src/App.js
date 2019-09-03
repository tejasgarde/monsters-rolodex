import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  

  constructor(){
    super();
    let allMonsters = [];
    this.state ={
      monsters : [],
      searchFiled : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        this.setState({monsters : users});
        this.allMonsters = users;
        
        });
  }
// All the Properties passed to components are received in props 
// setState is aSync call , onChange is JSX
  render() {
    
    return (
      <div className="App">
        <input type='search' placeholder='search monsters ' onChange={e => {
          this.state.searchFiled = e.target.value;
          
          this.setState({monsters : this.allMonsters.filter(mon => mon.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())),
            searchFiled : this.state.searchFiled
          })
          console.log(this.state.searchFiled);
        }} />
        <CardList monsters={this.state.monsters}/>
      
    </div>
    );
  }
}
export default App;
