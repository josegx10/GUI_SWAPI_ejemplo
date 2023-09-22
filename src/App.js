import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import PeopleList from "./components/PeopleList";

function App() {
  var [city, setCity] = useState([]);
  var [cont, setCont] = useState({});

  const Paginacion = (uri) => {
    fetch(uri)
      .then((response) => response.json())
      .then((dog) => {
        setCity(dog?.results);
        setCont(dog);
      });
  };

  const handleNextPage = () => {
    Paginacion(cont.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    Paginacion(cont.previous);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    Paginacion(`${process.env.REACT_APP_API_URL}/people/`);
  }, []);

  return (
    <>
      <Search setPeople={setCity} setCont={setCont} />

      <PeopleList city={city}/>

      <div className="botones">
        {cont.previous ? (
          <button className="my-button" onClick={handlePreviousPage}>
            Previous
          </button>
        ) : null}
        {cont.next ? (
          <button className="my-button" onClick={handleNextPage}>
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
