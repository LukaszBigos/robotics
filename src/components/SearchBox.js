import React from "react";
import "./SearchBox.css";

export default function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        className="search-input"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
