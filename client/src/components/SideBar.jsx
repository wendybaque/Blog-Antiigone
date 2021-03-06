import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import "../components/sidebar.css";
import wendy from "../assets/wendy2.jpg";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async() => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
    <div className='Sidebar'>
      <div className="SideBarItem">
        <span className='SideBarTitle'>A PROPOS DE WENDY BAQUE</span>
        <img src={wendy} alt="A propos de Wendy Baqué" className='SideBarImg'/>
        <p>Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui adore jouer avec les mots.</p>
​        <p>Auteure autodidacte et créative de 4 romans dans des genres différents, elle est aussi une grande lectrice ! </p> 
        <p>Ses préférences s'orientent vers des romans contemporains et réalistes, avec une préférence pour les romans feel-good et sur la musique, avec des thématiques fortes et actuelles... tout comme ses propres romans !</p>
        <p>C'est tout naturellement qu'en 2019, elle commence à écrire des chroniques de ses coups de cœur littéraires sur <a href="https://www.facebook.com/AntiigoneWB" alt="redirection page Facebook" target="_blank" rel="noreferrer" className='link'> <b>sa page Facebook</b></a>, puis sur ce blog. A travers ses avis, elle souhaite aider les auteurs auto-édités et les maisons d'éditions indépendantes à se faire connaître. </p>
        <p>Dans ses lectures, elle apprécie particulièrement les émotions transmises au lecteur, des personnages atypiques aux valeurs fortes et des sujets originaux. </p>
        <p>Vous êtes auteur et vous pensez que votre roman pourrait lui plaire ? rendez-vous sur la page <a href="/Contact" alt="redirection page contact" className='link'> <b>"contact"</b> </a> pour lui en parler ! </p>
      </div>

      <div className="SideBarItem">
      <span className='SideBarTitle'>CATEGORIES</span>
        <ul className="SideBarList">
        {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
            <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      
      <div className="SideBarItem">
        <span className='SideBarTitle'>FOLLOW HER ON</span>
        <div className="SideBarSocial">
            <a href="https://www.facebook.com/AntiigoneWB" alt="redirection vers Facebook" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/wendybqe/" alt="redirection vers Instagram" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-instagram-square"></i></a>
            <a href="https://site-auteure.vercel.app/" alt="redirection vers le site internet de Wendy Baqué" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-book-atlas"></i></a>
            <a href="/Contact" alt="redirection vers la page contact" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </div>
  )
}
