import React, { useState } from "react";
import Modal from "./Modal";
import "./PeopleList.css";

const PeopleList = ({ people, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);

  return (
    <>
      {loading ? (
        <div class="spinner"></div>
      ) : (
        <table class="default">
          <tr>
            <th>Nombre</th>

            <th>Altura</th>

            <th>Peso</th>

            <th>Color de cabello</th>

            <th>Color de piel</th>

            <th>Color de ojos</th>

            <th>Fecha de nacimiento</th>

            <th>Genero</th>
          </tr>
          {people &&
            people?.map((item) => (
              <>
                <tr
                  onClick={() => {
                    setIsOpen(true);
                    setItem(item);
                  }}
                >
                  <td>{item?.name}</td>

                  <td>{item?.height}</td>

                  <td>{item?.mass}</td>

                  <td>{item?.hair_color}</td>

                  <td>{item?.skin_color}</td>

                  <td>{item?.eye_color}</td>

                  <td>{item?.birth_year}</td>

                  <td>{item?.gender}</td>
                </tr>
              </>
            ))}
        </table>
      )}
      <div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            films={item?.films}
            place={item?.homeworld}
            vehicles={item?.vehicles}
            ships={item?.starships}
          />
        )}
      </div>
    </>
  );
};

export default PeopleList;
