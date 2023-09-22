import { useEffect, useState } from "react";

const Sitio = ({ planeta }) => {
  var [lugar, setLugar] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + planeta)
      .then((response) => response.json())
      .then((dog) => {
        setLugar(dog);
      });
  }, []);

  return (
    <>
      {lugar?.title}
      {lugar?.name}
    </>
  );
};
export default Sitio;
