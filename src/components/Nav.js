import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Search from "./search";

export default function Nav(){

    const [isOpen, setIsOpen] = useState(false);

    function menuOpen (){
        setIsOpen(!isOpen);

    }
    
  
    return (
        <header>
            <nav>
                
                <NavLink to="/">Ummah-Social</NavLink>

                <Search/>

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