import React from 'react'
import "../components/singlepost.css"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        }
        getPost()
    }, [path]);
  return (
    <div className='SinglePost'>
        <div className="SinglePostWrapper">
            {post.photo && (
            <img src={post.photo} alt="Livre au bord de la mer" className="SinglePostImg" /> )}
            <h1 className="SinglePostTitle">{post.title}
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="SinglePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="SinglePostInfo">
                <span className='SinglePostAuthor'>Auteur : <b>{post.username}</b></span>
                <span className='SinglePostDate'> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='SinglePostDescr'>{post.desc}</p>
        </div>
    </div>
  )
}
