import { useState } from "react";
import Surah from "../components/Surah";
import Ayah from "../components/Ayah";

export default function Coran(){

    const [isOpen, setIsOpen] = useState(true);
    const [ ayahNumber, setAyahNumber] = useState(1);
    
    function openSurat(){

        setIsOpen(!isOpen);

    }

    function getAyah(number){
       
        setAyahNumber(number);
    }



    return <section>
        
        <div className="bg-coran">
            <img src="img/bghome.png" alt="image ou il y a écrit Au nom de dieu le tout miséricordieux, le très miséricordieux" />
        </div>

        <div className="media">

            <div className="surat">

                <div className={`allSurat ${ isOpen ? 'allSuratActive' : ""}`}>
                    <Surah getAyah={getAyah} openSurat={openSurat}/>
                    
                </div>
                <div className="open" onClick={ () => openSurat()}> open </div>
               
               
            </div>
            
            <div className="verset">
                <Ayah number={ayahNumber} />
                
            </div>

        </div>


    </section>
}