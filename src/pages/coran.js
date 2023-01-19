import { useState } from "react";
import Surah from "../components/Surah";
import Ayah from "../components/Ayah";
import { useRef } from "react";
import bgHome from "../img/bghome.png";
import triangle from "../img/triangle.png"

export default function Coran(){

    const [isOpen, setIsOpen] = useState(true);
    const [ ayahNumber, setAyahNumber] = useState(1);
    const scroll = useRef(null)
    
    function openSurat(){

        setIsOpen(!isOpen);

    }

    function getAyah(number){
       
        setAyahNumber(number);
        scroll.current.scrollTop = 0;
    }



    return <section>
        
        <div className="bg-coran">
            <img src={bgHome} alt="image ou il y a écrit Au nom de dieu le tout miséricordieux, le très miséricordieux" />
        </div>

        <div className="media">

            <div className="surat">

                <div className={`allSurat ${ isOpen ? 'allSuratActive' : ""}`}>
                    <Surah getAyah={getAyah} openSurat={openSurat}/>
                    
                </div>
                <div className="open" onClick={ () => openSurat()}> <img src={triangle} alt="" /> </div>
               
               
            </div>
            
            <div className="verset" ref={scroll}>
                <Ayah number={ayahNumber} />
                
            </div>

        </div>


    </section>
}