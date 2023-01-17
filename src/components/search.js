import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchImg from "../img/search.png";

function Search(){
    const [searchValue, setSearchValue] = useState();
    const navigate = useNavigate()

    const handleChange = (e) => {

        setSearchValue(e.target.value);
    }

    const submitValue = () => {
        navigate("/searchAyah/" + searchValue, {replace : true});
    }


    return (
        <div className="divSearch">
            <input type="search" name="" id="" placeholder="rechercher dans le coran" onChange={handleChange}/>
            <img src={searchImg} alt="logo rechercher" className="searchLogo" onClick={submitValue}/>
        </div>
    )
}

export default Search;