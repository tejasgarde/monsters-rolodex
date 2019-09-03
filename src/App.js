import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  

  constructor(){
    super();
   
    this.state ={
      monsters : [],
      searchFiled : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}) );
  }

 
// All the Properties passed to components are received in props 
// setState is aSync call , onChange is JSX
// Tutorial Code
// change of state with new SearchFiled causes component to rerender and hence 
// render() methods get called which in turn created filterMonsters which then 
// used by CardList Components 

  render() {
    const {monsters , searchFiled} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
        placeholder='search monsters'
        handleChange={e => this.setState({searchFiled : e.target.value})}
         />
        <CardList monsters={filterMonsters}/>
      
    </div>
    );
  }
}
export default App;
