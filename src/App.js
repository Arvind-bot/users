import React from "react";
import "./App.css";
import { UserTable } from "./components/user-table/user-table.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((users) => users.data)
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="App">
        <UserTable users={this.state.users}>
        </UserTable>
        
      </div>
    );
  }
}

export default App;
