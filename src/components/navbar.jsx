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
    },[])
    return (
        <div className="container-nav">
            <nav className="nav">
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Sobre Mi</a>
                    </li>
                    <li>
                        <a href='#'>Proyectos</a>
                    </li>
                    <li>
                        <a href='#'>Contactame</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}