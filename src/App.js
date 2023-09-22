import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import PeopleList from "./components/PeopleList";

function App() {
  var [people, setPeople] = useState([]);
  var [info, setInfo] = useState({});
  var [loading, setLoading] = useState(true);
  const Paginacion = (uri) => {
    fetch(uri)
      .then((response) => response.json())
      .then((people) => {
        setPeople(people?.results);
        setInfo(people);
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    Paginacion(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    Paginacion(info.previous);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    Paginacion(`${process.env.REACT_APP_API_URL}/people/`);
  }, []);

  return (
    <>
      <Search setPeople={setPeople} setInfo={setInfo} setLoading={setLoading} />

      <PeopleList people={people} loading={loading}>
        {" "}
      </PeopleList>

      <div className="botones">
        {info.previous ? (
          <button className="my-button" onClick={handlePreviousPage}>
            Previous
          </button>
        ) : null}
        {info.next ? (
          <button className="my-button" onClick={handleNextPage}>
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
