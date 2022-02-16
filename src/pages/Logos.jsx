import Flechas from '../components/dobleflecha';
import './styles/Logos.css'
import camion from '../img/img-proyectos/logos/6.png'
import caja from '../img/img-proyectos/logos/8.png'
import bagguette from '../img/img-proyectos/logos/bagguette.png'
import disenogods from '../img/img-proyectos/logos/diseño-gods.png'
import logoperro from '../img/img-proyectos/logos/logo-perro.png'
import mochila from '../img/img-proyectos/logos/mochila.png'
import oriusgods from '../img/img-proyectos/logos/oriusgods.png'
import titologo from '../img/img-proyectos/logos/titologo.png'

export default function Logos(){
    return(
        <div>
            <section id='logos'>
                <Flechas page='logos' up='ilustraciones' down='publicidades'/>
                <div></div>
                <div className='container-logos'>
                    <img src={logoperro}/>
                    <img src={caja}/>
                    <img src={bagguette}/>
                    <img src={disenogods}/>
                    <img src={titologo}/>
                    <img src={camion}/>
                    <img src={mochila}/>
                    <img src={oriusgods}/>
                </div>
            </section>
        </div>
    )
}