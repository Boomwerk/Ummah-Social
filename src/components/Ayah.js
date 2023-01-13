import React from "react";

class Ayah extends React.Component
{

    constructor(props){

        super(props);
        
        this.state = {
            ayahs: [],
            number: 0
        }
        
    }
    
    componentDidMount(){

        this.getAyah(1)
    }

    componentDidUpdate(){
        this.getAyah(this.props.number);
    }


    getAyah(number){

        
        if(this.props.number !== this.state.number){

            fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fra-shahnazsaidiben/${number}.json`)
            .then( (body) =>{ 
                return body.json() 
            })
            .then( (datas) => {
                
                this.setState({ayahs: datas.chapter, number: datas.chapter[0].chapter})
                
            })
        }
            
       
    }

    render(){

        
        return <div>
            {this.state.ayahs.map((result) => {
                
                return <p key={result.verse}>{result.verse}. {result.text}</p>
            })}
        </div>
       

       
    }
}

export default Ayah;