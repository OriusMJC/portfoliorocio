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
import rologo from '../img/ro-logo-blanco.png'

export default function Logos(){
    return(
        <div>
            <section id='logos'>
                <Flechas page='logos' up='ilustraciones' down='publicidades'/>
                <div></div>
                <div className='container-logos'>
                    <img src={logoperro} alt='logo pet shop prieto'/>
                    <img src={caja} alt='logo caja de envio'/>
                    <img src={bagguette} alt='bolsa bagguette catarsis'/>
                    <img src={disenogods} alt='logo de gods'/>
                    <img src={titologo} alt='logo pizzas tito´s'/>
                    <img src={camion} alt='logo camioneta de envio'/>
                    <img src={mochila} alt='mochila catarsis'/>
                    <img src={oriusgods} alt='logo oriusgods'/>
                </div>
                <img src={rologo} className='rologo'/>
            </section>
        </div>
    )
}