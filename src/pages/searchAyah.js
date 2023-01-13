import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/search";



function SearchAyah(){

    const params = useParams()
    let [error, setError] = useState("")
    let [data , setData] = useState([])

    useEffect(() =>{
        fetch(`http://api.alquran.cloud/v1/search/${params.data}/all/fr`)
        .then((body) => {
            // console.log(body)
            if(body.status == 204){
                
                setError("Le mot rechercher n'existe pas dans le coran")

            }else{

                return body.json()
            }
        })
        .then( (result) => {

            return setData(result.data.matches);
        })

    }, [])


    return (
        <div className="searchCoran">
            <h1>Rechercher dans le coran</h1>

            <div className="box">
                
                <div className="ayahs">
                    <p>{ error }</p>
                    
                
                    {data.map( (result) => {
                           return <div className="ayah">
                                <p>sourate {result.surah.number} {result.surah.englishName} [verset :  {result.numberInSurah}]</p>
                                
                                <p>{result.text}</p>
                            </div>
                    })}
                    

                   
                </div>
            </div>
        </div>
    )

}

export default SearchAyah;