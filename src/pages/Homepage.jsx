import React,{useEffect} from 'react';
import './styles/HomePage.css';
import rociohome from '../img/rociohome.png';
import rociosobremi from '../img/rociosobremi.png';
import logoher from '../img/logos-herramientas.png'
import logointer from '../img/logos-intereses.png'

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
        <div className='contenedor'>
            <section id='home'>
                <div className='container-left'>
                    <div className='contain-circle'>
                        <div className='circle'>
                            <h1>¡Hola!<br/>Mi nombre es</h1>
                        </div>
                    </div>
                    <div className='name'>
                        <h1 className='write-name'>Rocío.</h1>
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
                    
                </div>
                <h1 className='pais'>ARGENTINA.</h1>
                <div className='container-intereses'>
                    <div className='herramientas'>
                        <img src={logoher} alt='logos de herramientas'/>
                    </div>
                    <div className='intereses'>
                        <h1>INTERESES.</h1>
                        <img src={logointer} alt='logos de herramientas'/>
                    </div>
                </div>
          </section>
          <section id='proyectos'>

          </section>
          <section id='contacto'>

          </section>
        </div>
    )
}