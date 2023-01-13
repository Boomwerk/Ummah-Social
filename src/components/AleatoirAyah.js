import { useState } from "react";
import { useEffect } from "react";

function AleatoirAyah(){

    const [randomnAyah, setRandomnAyah] = useState("");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    
    useEffect(() =>{
        let surah = getRandomInt(1,114);

        console.log(surah)

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-shahnazsaidiben/${surah}.json`)
        .then((body) => {
            return body.json();
        })
        .then((result)=> {
            setRandomnAyah(result.chapter[getRandomInt(0, result.chapter.length)])
        })
    },[])


    return(
        <div className="hadith animate__animated animate__fadeInRight">
            <h4>Verset Aléatoire</h4>
            <p>
                {console.log(randomnAyah)}
                {randomnAyah.text} <br /> <br />
                [sourate : {randomnAyah.chapter} , Verset: {randomnAyah.verse}]
            </p>

        </div>
    )



}

export default AleatoirAyah;