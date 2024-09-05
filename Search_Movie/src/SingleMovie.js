import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./Context"; // Assuming you're exporting API_URL from context

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovieDetails = async () => {
    try {
      const res = await fetch(`${API_URL}&i=${id}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error loading movie details</div>;
  }

  const { Title, Poster, Plot, Genre, Released } = movie;

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={Poster} alt={Title} />
        </figure>
        <div className="card-content">
          <h2 className="title">{Title}</h2>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Released:</strong> {Released}
          </p>
          <p>
            <strong>Plot:</strong> {Plot}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
