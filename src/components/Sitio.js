import { useEffect, useState } from "react";

const Sitio = ({ info }) => {
  var [data, setData] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + info)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data?.title}
      {data?.name}
    </>
  );
};
export default Sitio;
