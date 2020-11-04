import React from "react";
import "./user-table.styles.css";

import { TableRow } from "../table-row/table-row.component";
import { SearchRow } from "../search-row/search-row.component";

export const UserTable = ({ users, handleChange, handleBlur, value,type}) => {
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
        <SearchRow handleChange={handleChange} handleBlur={handleBlur} value={value} type={type}/>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
