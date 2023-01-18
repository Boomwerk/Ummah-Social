import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import searchImg from "../img/search.png";
import loadingImg from "./../img/loading.jpg" 


function SearchAyah(){

    const params = useParams()
    let [error, setError] = useState("")
    let [data , setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`https://api.alquran.cloud/v1/search/${params.data}/all/fr`)
        .then((body) => {
            if(body.status == 204){
                
                setError("Le mot rechercher n'existe pas dans le coran")

            }else{

                return body.json()
            }
        })
        .then( (result) => {

            setLoading(false)

            return setData(result.data.matches);
        })

    }, [])

    let handleChange = (e) => {

        fetch(`https://api.alquran.cloud/v1/search/${e.target.value}/all/fr`)
        .then((body) => {
            if(body.status == 204){
                
                setError("Le mot rechercher n'existe pas dans le coran")
                setData([])

            }else{
                setError("")
                return body.json()
            }
        })
        .then( (result) => {
            setLoading(false);
            return setData(result.data.matches);
        })

        
        

    }

    


    return (
        <div className="searchCoran">
           
           <h2>Rechercher dans le coran</h2>
            
            <div className="searchbar">

                <img src={searchImg} alt="logo rechercher" />
                <input type="search" onChange={ (e) => {
                    setLoading(true)

                    setTimeout(() => {
                        
                        handleChange(e)  


                    }, 1000);
                } } />
            </div>

            <div className="box">
                
                <div >

                    {loading ? <img src={loadingImg} alt="logo de chargement" width="200px"/> : <div className="ayahs">

                    <p>{ error }</p>
                    
                
                    {data.map( (result) => {
                           return <div className="ayah" key={result.number} >
                                <p>sourate {result.surah.number} {result.surah.englishName} [verset :  {result.numberInSurah}]</p>
                                
                                <p>{result.text}</p>
                            </div>
                    })}

                    </div> }
                    
                    
                    

                   
                </div>
            </div>
        </div>
    )

}

export default SearchAyah;