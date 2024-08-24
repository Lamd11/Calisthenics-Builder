import React from "react";

const SearchBar = ({searchTerm, handleSearchChange}) => {
    return(
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search skills..."
            className=" p-2 border border-gray rounded-md">
        </input>
    );
}

export default SearchBar;