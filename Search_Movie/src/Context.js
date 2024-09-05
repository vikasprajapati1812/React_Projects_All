import React, { useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("avengers");
  const [sortType, setSortType] = useState(""); // Sorting state

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsError({ show: false, msg: "" });
        setMovie(data.Search); // Set the movies here
      } else {
        setIsError({ show: true, msg: data.Error });
        setMovie([]); // Clear movies on error
      }
    } catch (error) {
      console.log(error);
      setIsError({ show: true, msg: "Something went wrong." });
    } finally {
      setIsLoading(false); // Move loading state here
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim() !== "") {
        getMovies(`${API_URL}&s=${query}`);
      } else {
        setMovie([]); // Clear movies if the query is empty
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]); // Only re-run if query changes

  // Sort movies only when sortType or movie changes
  useEffect(() => {
    if (movie.length > 0) {
      const sortedMovies = [...movie].sort((a, b) => {
        if (sortType === "title") {
          return a.Title.localeCompare(b.Title);
        } else if (sortType === "year") {
          return b.Year - a.Year; // Sort by year in descending order
        }
        return 0;
      });
      setMovie(sortedMovies); // Ensure setMovie only runs if there are movies
    }
  }, [sortType]); // Only re-run if sortType changes

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        movie,
        query,
        setQuery,
        sortType,
        setSortType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
