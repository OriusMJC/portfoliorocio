import React,{useEffect} from 'react';
import Scrollbar from '../components/scrollbar'
import Navbar from '../components/navbar.jsx'
import './styles/HomePage.css';
import rociohome from '../img/rociohome.png';
import rociosobremi from '../img/rociosobremi.png';
import logoher from '../img/logos-herramientas.png'
import logointer from '../img/logos-intereses.png'
import logos from '../img/logo-perro.png'
import publicidades from '../img/Tratamientos-de-queratina.png'
import ilustraciones from '../img/cerdo.png'
import logoinsta from '../img/insta-logo.png'
import logolinkedin from '../img/linke-logo.png'
import rologo from '../img/ro-logo.png'

import Etiqueta from '../components/etiproyectos.jsx'

export default function Homepage(){
    useEffect(()=>{
        const etiqueta = document.querySelector('.write-name')

        const writename = (name)=>{
            const arrayName = name.split('')
            etiqueta.innerHTML = ''
            let cont = -13

            let write = setInterval(()=>{
                if (cont >= 0){
                    etiqueta.innerHTML += arrayName[cont]
                }
                cont++
                if (cont === name.length){
                    clearInterval(write)
                }
            },200)
        }
        writename('Rocío.')
    },[])

    return (
        <div className='p-contenedor'>
            <Navbar/>
            <Scrollbar/>
            <section id='home'>
                <div className='container-left'>
                    <div className='contain-circle'>
                        <div className='circle'>
                            <h1>¡Hola!<br/>Mi nombre es</h1>
                        </div>
                    </div>
                    <div className='name'>
                        <h1 className='write-name'></h1>
                    </div>
                    <div className='contain-button'>
                        <button className='button-explorar'>EXPLORAR</button>
                        <div className='o-dark'></div>
                    </div>
                </div>
                <div className='container-right'>
                    <div className="div-image">
                        <img src={rociohome} alt='Foto Rocio Olivera'></img>
                    </div>
                </div>
          </section>
          <section id='sobremi'>
                <div className='div-imgsobremi'>
                    <img src={rociosobremi} alt='rocio foto sobre mi'/>
                </div>
                <div className='container-sobremi'>
                    <div className='text-sobremi'>
                        <h1>Sobre mi.</h1>
                    </div>
                    <div className='text-data'>
                        <h2>ROCÍO OLIVERA | 05 Noviembre 1999</h2>
                    </div>
                    <div className='text-description'>
                        <h3>Soy Rocío, una diseñadora e ilustradora 
                            independiente que reside en la ciudad de
                            Buenos Aires, Argentina. <br/> Soy muy persistente, 
                            centrada y extremadamente organizada. 
                            Me propongo siempre dar mi 100% y sorprenderme
                            al final de cada proyecto.
                        </h3>
                    </div>
                    <div className='text-desing'>
                        <h2>DISEÑO DIGITAL</h2>
                    </div>
                </div>
                <h1 className='pais'>ARGENTINA</h1>
                <div className='container-intereses'>
                    <div className='herramientas'>
                        <img src={logoher} alt='logos de herramientas'/>
                    </div>
                    <div className='intereses'>
                        <h1>INTERESES</h1>
                        <img src={logointer} alt='logos de herramientas'/>
                    </div>
                </div>
          </section>
          <section id='proyectos'>
                <div className='div-tittle-proyectos'>
                    <h1>Proye ctos.</h1>
                </div>
                <Etiqueta page='logos' image={logos} id='1'></Etiqueta>
                <Etiqueta page='publicidades' image={publicidades} id='2'></Etiqueta>
                <Etiqueta page='ilustraciones' image={ilustraciones} id='3'></Etiqueta>
                <img src={rologo} className='rologo'/>
          </section>
          <section id='contacto'>
                <div className='tittle-contact'>
                    <h1>Contacto.</h1>
                    <div className='contain-links-contact'>
                        <a href='https://www.instagram.com/roc_oliv/' target='_blank'>
                            <img src={logoinsta}/>
                            <h2>@roc_oliv</h2>
                        </a>
                        <a href='' target='_blank'>
                            <img src={logolinkedin}/>
                            <h2>Rocío Olivera</h2>
                        </a>
                    </div>
                </div>
                <div className='div-form'>
                    <form className='form'
                    action="https://formspree.io/f/xlezbjwa"
                    method="POST"
                    >
                        <input className='input-data' type='text' placeholder='Tú nombre' required/>
                        <input className='input-data' type='email' placeholder='Email' name="email" required/>
                        <textarea type='' placeholder='Tú mensaje' name="message" required/>
                        <input className='button-enviar' type='submit' value='Enviar'/>
                    </form>
                </div>
                <img src={rologo} className='rologo'/>  
          </section>
        </div>
    )
}