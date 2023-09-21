import { useEffect, useState } from "react";


const Sitio = ({planeta}) => {
    var [lugar, setLugar] = useState({});
    
    useEffect(() => {
        fetch(planeta)
        .then((response) => response.json())  
        .then((dog) => {
          setLugar(dog);
          console.log(lugar.title)
         
    })
      }, []);

    return (
        <>{lugar?.title}
          {lugar?.name}
        
        </>
        
    );
}
export default Sitio;