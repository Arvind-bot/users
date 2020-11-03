import React from "react";
import "./table-row.styles.css";
import {UserImage} from "../user-image/user-image.component";

export const TableRow = (props) => {
  const {id,avatar,first_name,last_name,email}=props.user;
  return (
    <tr className="table-row">
      <td>{id}</td>
      <td><UserImage imageUrl={avatar}/></td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};
