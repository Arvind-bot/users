import React from "react";
import "./search-row.styles.css";
import SearchBox from "../search-box/search-box.component";

export const SearchRow = ({ handleChange, handleBlur,value,type }) => (
  <thead>
    <tr className="search-row">
      <th></th>
      <th></th>
      <th>
        <SearchBox
          type="search"
          placeholder="Search by First Name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={type==="first-name"?value:""}
          name="first-name"
        />
      </th>
      <th>
        <SearchBox
          type="search"
          placeholder="Search by Last Name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="last-name"
          value={type==="last-name"?value:""}
        />
      </th>
      <th>
        <SearchBox
          type="search"
          placeholder="Search by Email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="email"
          value={type==="email"?value:""}
        />
      </th>
    </tr>
  </thead>
);
