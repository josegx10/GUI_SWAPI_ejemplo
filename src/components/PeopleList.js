import React, { useEffect, useState } from "react";
import Sitio from "./Sitio";
import Modal from "./Modal";
import './PeopleList.css';

const PeopleList = ({ city, setValidar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemIndividual, setItem] = useState([]);
    
    
    useEffect(() => {
      setValidar = true;
        
      }, []);
  return (
    <>
    
    <table class="default">

      <tr>

        <th>Nombre</th>

        <th>Altura</th>

        <th>Peso</th>

        <th>Color de Cabello</th>

        <th>Color de piel</th>

        <th>Color de ojos</th>

        <th>Fecha de nacimiento</th>

        <th>Genero</th>

        

      </tr>
      {city && city?.map((item, index) => (
        <><tr onClick={() =>  {setIsOpen(true); setItem(item)}}>

          <td>{item?.name}</td>

          <td>{item?.height}</td>

          <td>{item?.mass}</td>

          <td>{item?.hair_color}</td>

          <td>{item?.skin_color}</td>

          <td>{item?.eye_color}</td>

          <td>{item?.birth_year}</td>

          <td>{item?.gender}</td>

          

          


        </tr></>
      ))}


    </table>

    <div> {isOpen && <Modal setIsOpen={setIsOpen} films={itemIndividual?.films} lugar={itemIndividual?.homeworld} vehiculos={itemIndividual?.vehicles} naves={itemIndividual?.starships}/>}</div>
    </>
  );
};

export default PeopleList;