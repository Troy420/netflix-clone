import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // state is the way to write variables in react
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // because i'm sending a request to outside to a third party service. its gonna take a second or half a sec, we call it async.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
      setMovies(request.data.results);
      // console.log(request.data.results);

      return request;
    }
    fetchData();
    // if [], run once when the row loads, and dont run it again
    // if [movies], loads again whenever movies changes
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      {/* TITLE */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {/* CONTAINER -> POSTERS */}
    </div>
  );
};

export default Row;
