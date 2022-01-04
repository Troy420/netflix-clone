import React, { useState } from "react";
import axios from "./axios";

const Row = ({ title }) => {
  // state is the way to write variables in react
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run it again
    // if [movies], loads again whenever movies changes
  }, []);

  return (
    <div>
      {/* TITLE */}
      <h2>{title}</h2>
      {/* CONTAINER -> POSTERS */}
    </div>
  );
};

export default Row;
