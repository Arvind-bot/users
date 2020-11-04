import React from "react";
import "./user-table.styles.css";

import { SearchRow } from "../search-row/search-row.component";
import { TableHead } from "../table-head/table-head.component";
import { TableBody } from "../table-body/table-body.component";

export const UserTable = ({ users, handleChange, handleBlur, value,type}) => {
  return (
    <div className="card-table">
      <table className="user-table">
        <TableHead/>
        <SearchRow handleChange={handleChange} handleBlur={handleBlur} value={value} type={type}/>
        <TableBody users={users}/>
      </table>
    </div>
  );
};
