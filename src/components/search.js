import React from "react";
import { useState } from "react";


function Search(){
    const [searchValue, setSearchValue] = useState();


    const handleChange = (e) => {

        setSearchValue(e.target.value);
    }

    const submitValue = () => {
        

        window.location.assign("/searchAyah/" + searchValue);
    }


    return (
        <div className="divSearch">
            <input type="search" name="" id="" placeholder="rechercher dans le coran" onChange={handleChange}/>
            <img src="img/search.png" alt="logo rechercher" className="searchLogo" onClick={submitValue}/>
        </div>
    )
}

export default Search;