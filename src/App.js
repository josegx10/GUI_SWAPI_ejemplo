import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/search";
import PeopleList from "./components/PeopleList";

function App() {
  var [people, setPeople] = useState([]);
  var [info, setInfo] = useState({});
  var [loading, setLoading] = useState(true);
  var [cont, setCont] = useState(1);
  var [enable, setEnable] = useState(true);
  const signoMayor = ">";
  const signoMenor = "<";
  const Paginacion = (uri, c) => {
    fetch(uri)
      .then((response) => response.json())
      .then((people) => {
        setPeople(people?.results);
        setInfo(people);
        setLoading(false);
        if (c === 1) {
          setCont(cont + 1);
        } else if (c === 2) {
          setCont(cont - 1);
        } else {
          setCont(1);
        }
        setEnable(true);
      });
  };

  const handleNextPage = () => {
    Paginacion(info.next, 1);
    window.scrollTo(0, 0);
    setEnable(false);
  };

  const handlePreviousPage = () => {
    Paginacion(info.previous, 2);
    window.scrollTo(0, 0);
    setEnable(false);
  };
  useEffect(() => {
    Paginacion(`${process.env.REACT_APP_API_URL}/people/`);
  }, []);

  return (
    <>
      <div className="Contenido">
        <Search
          setPeople={setPeople}
          setInfo={setInfo}
          setLoading={setLoading}
          setCont={setCont}
        />

        <div className="Title">
          {" "}
          <h1> Wiki Start Wars </h1>
        </div>

        <PeopleList people={people} loading={loading}>
          {" "}
          {setInfo?.count === 0 ? (
            <h2> Sin resultados </h2>
          ) : (
            "Sin resultado"
          )}{" "}
        </PeopleList>

        <footer>
          {" "}
          <div className="cont">
            {" "}
            {people.length} de {info?.count} personas{" "}
          </div>{" "}
          <div className="paginacion">
            {" "}
            {info.previous ? (
              <>
                {" "}
                <button
                  className="bottonPaginacion"
                  onClick={handlePreviousPage}
                  disabled={!enable}
                >
                  {" "}
                  {signoMenor}{" "}
                </button>{" "}
                <button
                  className="bottonPaginacion"
                  onClick={handlePreviousPage}
                  disabled={!enable}
                >
                  {cont - 1}
                </button>
              </>
            ) : null}{" "}
            <button className="bottonPaginacion" id="botonPrincipal">
              {" "}
              {cont}{" "}
            </button>{" "}
            {info.next ? (
              <>
                <button
                  className="bottonPaginacion"
                  onClick={handleNextPage}
                  disabled={!enable}
                >
                  {cont + 1}
                </button>
                <button
                  className="bottonPaginacion"
                  onClick={handleNextPage}
                  disabled={!enable}
                >
                  {" "}
                  {signoMayor}{" "}
                </button>
              </>
            ) : null}{" "}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
