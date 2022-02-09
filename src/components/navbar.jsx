import React,{useEffect} from 'react'
import './navbar.css'

export default function Navbar(){
    useEffect(()=>{
        const bgbtn = document.querySelector('.contain-button')
        const button = document.querySelector('.button-explorar')
        const btnc = document.querySelector('.o-dark')
        const navbar = document.querySelector('.container-nav')
        const nav = document.querySelector('.nav')

        
        button.addEventListener('click', ()=>{
            btnc.classList.toggle('o-light')
            bgbtn.classList.toggle('btn-activate')
            bgbtn.classList.toggle('contain-button')
            navbar.classList.toggle('activate')
            nav.classList.toggle('activate')
        })
        
        
        document.querySelectorAll('.link-section').forEach(link_sections =>
            link_sections.addEventListener('click',()=>{
                navbar.classList.toggle('activate')
                nav.classList.toggle('activate')
                btnc.classList.toggle('o-light')
                bgbtn.classList.toggle('contain-button')
                bgbtn.classList.toggle('btn-activate')
            })
        )

    },[])


    return (
        <div className="container-nav">
            <nav className="nav">
                <ul>
                    <li>
                        <a className='link-section' href='#sobremi'>Sobre Mi</a>
                    </li>
                    <li>
                        <a className='link-section' href='#proyectos'>Proyectos</a>
                    </li>
                    <li>
                        <a className='link-section' href='#contacto'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}