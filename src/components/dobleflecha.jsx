import {Link} from 'react-router-dom'
import './dflecha.css'

export default function Dobleflecha(props){
    const {up,down} = props
    return(
        <div>
            <div className="container-dflecha">
                <Link className='flechas' to={`/proyectos/${up}`}>
                    <div className='flecha'><h3>{up.toUpperCase()}</h3></div>
                </Link>
                <h1>{props.page.toUpperCase()}</h1>
                <Link className='flechas' to={`/proyectos/${down}`}>
                    <div className='flecha'><h3>{down.toUpperCase()}</h3></div> 
                </Link>
            </div>
            <Link id='button-home' to='/'><h1>HOME<div></div></h1></Link>
        </div>
    )
}