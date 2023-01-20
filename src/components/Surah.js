import React from "react";
import Ayah from "./Ayah";

class Surah extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            surat : []
        }

    }

    componentDidMount(){

        fetch("https://api.alquran.cloud/v1/surah")
        .then( (body) => {
            return body.json();
        })
        .then((datas) => {
            console.log(datas)
            this.setState({surat: datas.data})
        })
    }

    suratNumber(number,surah){
      this.props.getAyah(number,surah);
      this.props.openSurat();
    }

    render(){
        
        return <div>{this.state.surat.map( result => <p key={result.number} onClick={() => this.suratNumber(result.number,result.englishName)} number={result.number}>{result.number}. {result.englishName}</p>)}</div>
    }
}

export default Surah;