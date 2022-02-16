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
                    <img id='queratina' src={queratina}/>
                    <img id='promoot' src={promoot}/>
                    <img id='revista' src={revista}/>
                    <img id='sonrisas' src={sonrisas}/>
                    <img id='queratina2' src={queratina2}/>
                    <img id='tango' src={tango}/>
                    <img id='panel' src={panel}/>
                    <img id='moot' src={moot}/>
                </div>
            </section>
        </div>
    )
}