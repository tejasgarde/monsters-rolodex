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

    // binds this to contex of handleChange function
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}) );
  }

  // Here this is not defined as the JS does not define contex on function
  // TO do so we use the bind in constuctor
  // handleChange(e){
  //   this.setState({searchFiled : e.target.value});
  // }

  // This binding can be completly avoided using arrow => functionality of ES6
  handleChange = (e) => {
    this.setState({searchFiled : e.target.value});
  };

 
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
        handleChange={this.handleChange}
         />
        <CardList monsters={filterMonsters}/>
      
    </div>
    );
  }
}
export default App;
