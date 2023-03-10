import React from "react";
import imgLoading from "../img/loading.jpg";

class Ayah extends React.Component
{

    constructor(props){

        super(props);
        
        this.state = {
            ayahs: [],
            number: 0,
            loading: false,
            surahName: "Al-Faatiha"
        }
        
    }
    
    componentDidMount(){

        this.getAyah(1)
        
    }

    componentDidUpdate(){
        
        this.getAyah(this.props.number, this.props.surah);
    }


    getAyah(number, surah){


        

        if(this.props.number !== this.state.number){
            if(!this.state.loading){
                this.setState({loading:true})
            }

            

            setTimeout(() => {
                
                fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-muhammadhameedu-la/${number}.json`)
                .then( (body) =>{ 
                    return body.json();
                })
                .then( (datas) => {
                    this.setState({surahName: surah})
                    this.setState({loading:false})
                    this.setState({ayahs: datas.chapter, number: datas.chapter[0].chapter})
                    
                })

            }, 500);

        }
            
       
    }

    render(){

        
        return <div>
                
            {this.state.loading ? <p className="loading"><img src={imgLoading} alt="logo de chargement" width="80px"/> </p>: ""}
            <h2>{this.state.surahName}</h2>
            {this.state.ayahs.map((result) => {
                
                return <p key={result.verse}>{result.verse}. {result.text}</p>
            })}
        </div>
       

       
    }
}

export default Ayah;