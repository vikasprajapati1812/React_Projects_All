import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, sortType } = useGlobalContext();

  // Sort movies locally in this component
  const sortedMovies = [...movie].sort((a, b) => {
    if (sortType === "title") {
      return a.Title.localeCompare(b.Title);
    } else if (sortType === "year") {
      return b.Year - a.Year; // Sort by year in descending order
    }
    return 0;
  });

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {sortedMovies.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0, 15);

          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieName.length > 15 ? `${movieName}...` : movieName}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
