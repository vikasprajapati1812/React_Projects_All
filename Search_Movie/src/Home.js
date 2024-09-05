// Home.js
import React from "react";
import Movies from "./Movies";
import Search from "./Search";
import Sort from "./Sort"; // Import the Sort component

const Home = () => {
  return (
    <>
      <Search />
      <Sort /> {/* Add sorting component */}
      <Movies />
    </>
  );
};

export default Home;
