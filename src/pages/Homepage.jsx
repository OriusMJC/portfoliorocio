import React,{useEffect} from 'react'
import rociohome from '../img/rociohome.png'

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
        <div className='containerr'>
            <section id='section1'>
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
                        <img src={rociohome}></img>
                    </div>
                </div>
          </section>
          <section id='section2'>
                <div className=''>
                </div>
          </section>
          <section id='section3'>

          </section>
          <section id='section4'>

          </section>
        </div>
    )
}