import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import Search from "./search";

export default function Nav(){

    const [isOpen, setIsOpen] = useState(false);
    const location= useLocation();

    function menuOpen (){
        setIsOpen(!isOpen);

    }

    
    
  
    return (
        <header>
            <nav>
                
                <NavLink to="/" className="title">Ummah-Social</NavLink>
                
                {location.pathname.indexOf("searchAyah") != -1 ? "": <Search/>}
                
                <div className={`links ${isOpen ? "activemenu" : ""}`}>
                
                    <NavLink to="/" className="">Accueil</NavLink>
                    <NavLink to="/coran" className="">Coran</NavLink>
                    
                </div>

               

                <div className={`menu ${isOpen ? "active-cross" : ""}`} onClick={() => menuOpen()}>

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                

            </nav>

        </header>
    )
}