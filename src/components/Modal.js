import "./Modal.css";
import Sitio from "./Sitio";
const Modal = ({ setIsOpen, films, place, vehicles,  ships}) => {
  console.log(films);

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
