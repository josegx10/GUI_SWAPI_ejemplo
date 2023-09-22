import "./Modal.css";
import Sitio from "./Sitio";
const Modal = ({ setIsOpen, films, lugar, vehiculos, naves }) => {
  console.log(films);

  var results = [];
  results.push(
    <>
      Planeta de nacimiento <br />
    </>
  );
  results.push(
    <>
      <Sitio planeta={lugar.replace(process.env.REACT_APP_API_URL, "")} />
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
        <Sitio planeta={employee.replace(process.env.REACT_APP_API_URL, "")} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> vehiculos <br />
    </>
  );
  vehiculos.forEach((employee) => {
    results.push(
      <>
        <Sitio planeta={employee.replace(process.env.REACT_APP_API_URL, "")} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> Naves Espaciales
      <br />
    </>
  );
  naves.forEach((employee) => {
    console.log(employee);
    results.push(
      <>
        <Sitio planeta={employee.replace(process.env.REACT_APP_API_URL, "")} />
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
