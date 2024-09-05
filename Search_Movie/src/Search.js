import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  const handleChange = (e) => {
    setQuery(e.target.value); // Update query
  };

  return (
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here..."
            value={query}
            onChange={handleChange} // Use the handleChange function
          />
        </div>
      </form>
      {isError.show && <h1 className="card-error">{isError.msg}</h1>}
    </section>
  );
};

export default Search;
