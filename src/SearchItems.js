import React from "react";

const SearchItems = ({search,setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search Items"
        role="searchbox"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItems;
