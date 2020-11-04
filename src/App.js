import React from "react";
import "./App.css";
import { UserTable } from "./components/user-table/user-table.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      type:""
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((users) => users.data)
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users, searchField,  type} = this.state;

    const filteredUsers=users.filter((user)=>{
      let filterAgainst="";
      
      if(type==="first-name"){
        filterAgainst=user.first_name.toLowerCase();
      }else if(type==="last-name"){
        filterAgainst=user.last_name.toLowerCase();
      }else if(type==="email"){
        filterAgainst=user.email.toLowerCase();
      }
      return filterAgainst.includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <UserTable
          users={filteredUsers}
          value={this.state.searchField}
          type={this.state.type}
          handleChange={(e) => this.setState({ searchField: e.target.value, type:e.target.name })}
          handleBlur={() => {
            this.setState({ searchField: "",type:"" });
          }}
        />
      </div>
    );
  }
}

export default App;
