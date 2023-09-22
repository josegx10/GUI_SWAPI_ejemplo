import "./Modal.css";
import Sitio from "./Sitio";
const Modal = ({ setIsOpen, films, place, vehicles,  ships}) => {

  var results = [];
  results.push(
    <>
      info de nacimiento <br />
    </>
  );
  results.push(
    <>
      <Sitio info={place.replace(process.env.REACT_APP_API_URL, "")} />
      <br />
    </>
  );
  results.push(
    <>
      <br /> Pelicula
      <br />
    </>
  );
  if(films.length === 0){
    results.push(
      <> n/a </>
    )
  }
  films.forEach((employee) => {
    results.push(
      <>
        <Sitio info={employee.replace(process.env.REACT_APP_API_URL, "")} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> vehiculos <br />
    </>
  );
  if(vehicles.length === 0){
    results.push(
      <> n/a </>
    )
  }
  vehicles.forEach((employee) => {
    results.push(
      <>
        <Sitio info={employee.replace(process.env.REACT_APP_API_URL, "")} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> naves Espaciales
      <br />
    </>
  );
  if(ships.length === 0){
    results.push(
      <> n/a </>
    )
  }
  ships.forEach((employee) => {
    console.log(employee);
    results.push(
      <>
        <Sitio info={employee.replace(process.env.REACT_APP_API_URL, "")} />
        <br />
      </>
    );
  });

  return (
    <>
      <article className="modal is-open">
        <div className="modal-pantalla">
          <div className="button-modal">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>

          {results}
        </div>
      </article>
    </>
  );
};

export default Modal;
