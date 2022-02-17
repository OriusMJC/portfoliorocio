import Flechas from '../components/dobleflecha';
import './styles/Publicidades.css'

import queratina from '../img/img-proyectos/publicidades/tdq1.png'
import promoot from '../img/img-proyectos/publicidades/proyectomoot.png'
import revista from '../img/img-proyectos/publicidades/revista-barrial.png'
import sonrisas from '../img/img-proyectos/publicidades/sonrisas.png'
import queratina2 from '../img/img-proyectos/publicidades/tdq2.png'
import tango from '../img/img-proyectos/publicidades/tango.jpg'
import panel from '../img/img-proyectos/publicidades/panel.png'
import moot from '../img/img-proyectos/publicidades/moot2019.png'

export default function Publicidades(){
    return(
        <div>
            <section id='publicidades'>
                <Flechas page='publicidades' up='logos' down='ilustraciones'/>
                <div></div>
                <div className='container-publicidades'>
                    <img id='queratina' src={queratina} alt='tratamiento de queratina'/>
                    <img id='promoot' src={promoot} alt='proyecto moot'/>
                    <img id='revista' src={revista} alt=' revista barrial nueva pompeya'/>
                    <img id='sonrisas' src={sonrisas} alt='publicida scouts'/>
                    <img id='queratina2' src={queratina2} alt='tratamiento queratina verano 2020'/>
                    <img id='tango' src={tango} alt='argentina tango tour'/>
                    <img id='panel' src={panel} alt='panel envase de leche'/>
                    <img id='moot' src={moot} alt='scouts moot 2019'/>
                </div>
            </section>
        </div>
    )
}