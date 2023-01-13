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

        fetch("http://api.alquran.cloud/v1/surah")
        .then( (body) => {
            return body.json();
        })
        .then((datas) => {
            this.setState({surat: datas.data})
        })
    }

    suratNumber(number){
      this.props.getAyah(number);
      this.props.openSurat();
    }

    render(){
        return <div>{this.state.surat.map( result => <p key={result.number} onClick={() => this.suratNumber(result.number)} number={result.number}>{result.number}. {result.englishName}</p>)}</div>
    }
}

export default Surah;