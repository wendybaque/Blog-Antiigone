import React from 'react'
import "../pages/write.css";
import ranglivres from "../assets/ranglivres.webp"

export default function Write() {
  return (
    <div className='Write'>
        <img className="WriteImg" src={ranglivres} alt="Rangée de livres anciens sur des marches de pierre" />
        <form className='WriteForm'>
            <div className="WriteFormGroup">
                <label htmlFor='fileinput'><i className="WriteIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileinput" style={{display:"none"}}></input>
                <input type="text" id="title" placeholder='Titre' className='WriteInput' autoFocus={true}></input>
            </div>
            <div className="WriteFormGroup">
                <textarea type="text" placeholder='Ecris ta chronique' className='WriteInput WriteText'></textarea>
            </div>
            <button className="WriteSubmit">
                Publier
            </button>
        </form>
    </div>
  )
}
