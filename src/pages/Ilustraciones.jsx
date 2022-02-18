import Flechas from '../components/dobleflecha';
import './styles/Ilustraciones.css'

import mano from '../img/img-proyectos/ilustraciones/morfo-manos.png'
import logoro1 from '../img/img-proyectos/ilustraciones/yo-logo2.jpg'
import lobo from '../img/img-proyectos/ilustraciones/lobo.png'
import dedos from '../img/img-proyectos/ilustraciones/dedos.png'
import abeja from '../img/img-proyectos/ilustraciones/abeja.png'
import cerdo from '../img/img-proyectos/ilustraciones/cerdo.png'
import manostecno from '../img/img-proyectos/ilustraciones/tecnologia.png'
import logoro2 from '../img/img-proyectos/ilustraciones/yo-logo1.jpg'
import potato from '../img/img-proyectos/ilustraciones/potato.png'
import rologo from '../img/ro-logo-blanco.png'

export default function ilustraciones(){
    return(
        <div>
            <section id='ilustraciones'>
                <Flechas page='ilustraciones' up='publicidades' down='logos'/>
                <div></div>
                <div className='container-ilustraciones'>
                    <img id='mano' src={mano} alt='morfologia de manos'/>
                    <img id='logoro1' src={logoro1} alt='logo rocio'/>
                    <img id='lobo' src={lobo} alt='ilsytracion perro'/>
                    <img id='dedos' src={dedos} alt='dedos bailando'/>
                    <img id='abeja' src={abeja} alt='abeja art'/>
                    <img id='cerdo' src={cerdo} alt='diseño de cerdo humanoide'/>
                    <img id='manostecno' src={manostecno} alt='ilustracion manos y universo'/>
                    <img id='logoro2' src={logoro2} alt='logo rocio'/>
                    <img id='potato' src={potato} alt='potato art'/>
                </div>
                <img src={rologo} className='rologo'/>
            </section>
        </div>
    )
}