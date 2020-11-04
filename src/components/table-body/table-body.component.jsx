import React from "react";
import "./table-body.styles.css";
import {TableRow} from "../table-row/table-row.component";
export const TableBody = ({users}) => (
    <tbody>
    {users.map((user) => (
      <TableRow key={user.id} user={user} />
    ))}
  </tbody>
);
