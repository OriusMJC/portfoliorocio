import React,{useEffect} from 'react'
import './scrollbar.css'

export default function Scrollbar(){
    useEffect(()=>{
        const scrollbar = document.querySelector('.scrollbar-circle');
        const tcontact = document.querySelector('.contain-links-contact');
        let pos = 7; //position scroll-circle
        window.addEventListener('scroll', ()=>{
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop <= 600){
                pos = 7;
                scrollbar.style.top = `${pos}%`;
                tcontact.classList.remove('contact-animation');
            }else if (scrollTop >= 600 && scrollTop < 1600){
                pos = 33;
                scrollbar.style.top = `${pos}%`;
                tcontact.classList.remove('contact-animation');
            }else if(scrollTop >= 1600 && scrollTop < 2600){
                pos = 59;
                scrollbar.style.top = `${pos}%`;
                tcontact.classList.remove('contact-animation');
            }else if(scrollTop >= 2600){
                pos = 88;
                scrollbar.style.top = `${pos}%`;
                tcontact.classList.add('contact-animation');
            }
        })

    },[])
    return (
        <div className="container-scrollbar">
            <nav className="scrollbar">
                <div className="scrollbar-circle"></div>
            </nav>
        </div>
    )
}