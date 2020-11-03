import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state={
      users:[]
    };
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response=>response.json())
    .then(users=>users.data)
    .then(data=>this.setState({users:data}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hi there! 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={()=>console.log(this.state.users)}>click</button>
        </header>
      </div>
    );
  } 
}

export default App;
