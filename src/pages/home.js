import {Link} from 'react-router-dom';
import AleatoirAyah from '../components/AleatoirAyah';
export default function home(){


    return (
        <>
            <main>

                <img src="img/bghome.png" alt="" />

                <div className="coran-and-hadith ">
                    <Link to="/coran" className="coran animate__animated animate__fadeInLeft">
                        
                        <p>lire le coran</p>
                      
                    </Link>
                    
                    <AleatoirAyah/>
                </div>

            </main>
            <div className="message">

                <p>As salam aleikoum wa rahmatoulahi wa barakatouh, <br /><br /> ce site a pour but de vous permettre de lire le coran et recevoir des notification de verset chaque jours afin d’etre meilleur pour notre créateur aza wajel , il y aura de nombreuse mise a jours tous au long de la vie , et plus de possibilités, les pubs dans le site me permet d’etre rémunéré pour le travail effectué,
                    
                <br /><br /> merci de votre compréhension. qu’Allah vous préserve Amin</p>

            </div>
        </>
    );
}