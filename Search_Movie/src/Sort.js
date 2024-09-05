// Sort.js
import React from "react";
import { useGlobalContext } from "./Context";

const Sort = () => {
  const { sortType, setSortType } = useGlobalContext();

  return (
    <section className="sort-section">
      <form>
        <label htmlFor="sort" style={{ fontSize: "24px" ,marginLeft:"28px"}}>
          Sort by:
        </label>
        <select
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          style={{ height: "30px", fontSize: "24px", paddingInline:"10px"}}
        >
          <option value="title">Title</option>
          <option value="year">Year</option>
        </select>
      </form>
    </section>
  );
};

export default Sort;
