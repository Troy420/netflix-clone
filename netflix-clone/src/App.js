import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/* Nav */}

      {/* Banner */}
      <Banner />
      <Row
        //props
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        //props
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        //props
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        //props
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        //props
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        //props
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        //props
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        //props
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
