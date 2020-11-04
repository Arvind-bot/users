import React from "react";
import "./search-box.styles.css";

const SearchBox =(props)=>{
    const { placeholder, handleChange, handleBlur, value, name} = props;
    return (
      <input
        className="search"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
      />
    );
  }

export default SearchBox;
