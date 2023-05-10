import React from "react";

function SearchBar( { handleSearchChange } ) {




    return (
        <div className="search-bar">
            <div className="search-icon-input">
                <input placeholder="Search by Artist" className="prompt" onChange={handleSearchChange} />
                <i className="search-icon" />
            </div>
        </div>
    );
}

export default SearchBar;