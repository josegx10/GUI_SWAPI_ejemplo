
import './App.css';
import React ,{ useState, useEffect } from 'react';
import Search from "./components/search";
import PeopleList from './components/PeopleList';



function App() {
  var uri = 'https://swapi.dev/api/people/'
  var [city, setCity] = useState([]);
  var [cont, setCont] = useState({});
  var [validar, setValidar] = useState(true);
  
  
  const Paginacion = (uri) => {
    fetch(uri)
        .then((response) => response.json())  
        .then((dog) => {
          setCity(dog?.results);
          console.log(dog);
          setCont(dog)
    //window.scrollTo(0, 0);
  })}

  const handleNextPage = () => {
    Paginacion(cont.next);
    window.scrollTo(0, 0);
    setValidar(false)
    setValidar(true)
  };

  const handlePreviousPage = () => {
    Paginacion(cont.previous);
    window.scrollTo(0, 0);
    setValidar(false)
    setValidar(true)
    
  };
  useEffect(() => {
    Paginacion(uri);
  }, []);
  
 
  return (
    
    
      <>
      
      <Search setPeople={setCity} setCont={setCont}/>
      
    <PeopleList city={city} setValidar={validar}/>
    
    <div className='botones'>
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


