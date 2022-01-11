import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // state is the way to write variables in react
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log("url", url);
          console.log("movie", movie.key);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log("trailerUrl", trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  // console.log(movies);

  return (
    <div className="row">
      {/* TITLE */}
      <h2 className="title">{title}</h2>
      {/* CONTAINER -> POSTERS */}
      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => {
              handleClick(movie);
            }}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
