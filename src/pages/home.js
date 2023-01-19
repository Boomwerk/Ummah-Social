import {Link} from 'react-router-dom';
import AleatoirAyah from '../components/AleatoirAyah';
import bgHome from "../img/bghome.png"
export default function home(){


    return (
        <>
            <main>
                
                <img src={bgHome} alt="image de fond" className='bghome'/>

                <div className="coran-and-hadith ">
                    <Link to="/coran" className="coran animate__animated animate__fadeInLeft">
                        
                        <p>lire le coran</p>
                      
                    </Link>
                    
                    <AleatoirAyah/>
                </div>

            </main>
            <div className="message">

                <p>As salam aleikoum wa rahmatoulahi wa barakatouh, <br /><br /> Ce site a pour but de vous permettre de lire le coran et recevoir des notifications de verset chaque jour, afin d’être meilleur pour notre créateur aza wajel . Il y aura de nombreuses mises à jour tous au long de la vie de ce site web et plus de possibilités.
                    
                <br /><br />Qu’Allah vous préserve Amin</p>

            </div>
        </>
    );
}