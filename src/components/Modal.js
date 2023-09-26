import "./Modal.css";
import Sitio from "./Sitio";

const Modal = ({ setIsOpen, films, place, vehicles, ships }) => {
  var results = [];
  results.push(
    <>
      Lugar de nacimiento <br />
    </>
  );

  results.push(
    <>
      <Sitio info={place} />
      <br />
    </>
  );

  results.push(
    <>
      <br /> Películas
      <br />
    </>
  );
  if (films.length === 0) {
    results.push(<> n/a </>);
  }
  films.forEach((employee) => {
    results.push(
      <>
        <Sitio info={employee} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> Vehículos <br />
    </>
  );
  if (vehicles.length === 0) {
    results.push(<> n/a </>);
  }
  vehicles.forEach((employee) => {
    results.push(
      <>
        <Sitio info={employee} />
        <br />
      </>
    );
  });
  results.push(
    <>
      <br /> Naves espaciales
      <br />
    </>
  );
  if (ships.length === 0) {
    results.push(<> n/a </>);
  }
  ships.forEach((employee) => {
    results.push(
      <>
        <Sitio info={employee} />
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
