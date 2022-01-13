import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions/actionAMBAdmin";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getByName(name));
        setName('');
    }

    return(
        <form onSubmit={(event) => handleClick(event)}>
            <div>
                <input type="text" 
                placeholder="Buscar afiliado..." 
                onChange={(e) => handleInputChange(e)} />
                <button type="submit">Buscar</button>
            </div>
        </form>
    )

}