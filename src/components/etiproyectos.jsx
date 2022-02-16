import {Link} from 'react-router-dom';
import './etiqueta.css'

export default function Etiqueta(props){
    return(
        <Link className={`etiqueta-contenedor etiqueta${props.id}`} to={`proyectos/${props.page}`}>
            <div className='etiqueta-h1'>
                <h1>{props.page.toUpperCase()}</h1>
            </div>
            <div className='etiqueta-img'>
                <img src={props.image}/>
            </div>
        </Link>

    )
}