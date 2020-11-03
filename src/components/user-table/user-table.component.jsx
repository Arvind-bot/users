import React from "react";
import "./user-table.styles.css";

import {TableRow} from "../table-row/table-row.component";

export const UserTable = (props) => {
  return (
    <div className="card-table">
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <TableRow key={user.id} user={user}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
