import { useState } from "react"
import './search.css'

const Search = ({setCont, setPeople}) => {
    var uri = 'https://swapi.dev/api/people/?search='
    const [busqueda, setBusqueda] = useState('');
    const SearchChange = e =>{
        setBusqueda(e.target.value)
        fetch(uri + e.target.value)
            .then((response) => response.json())  
            .then((dog) => {
                setPeople(dog?.results);
                console.log(dog);
                setCont(dog)
            }

            )
        console.log(e.target.value)
    }
    
    return (
        <div>
            <input
                name="busqueda"
                value={busqueda}
                className="Buscador"
                placeholder="Buscar por nombre"
                onChange={SearchChange}            
            />
            

        </div>
    )
}

export default Search;