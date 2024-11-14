import React from 'react'
import './Profile.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    const userName = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("loggedin")
        navigate('/')
    }

    const EditProfile = () => {
         navigate('/editprofile')
    }

    return (
        <div>
            <div className="full-screen" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "rgb(13, 13, 40)" }}>
        <div className="mader-name">
        <h2>Made by @meet_gauswamii</h2>
        </div>
        <div class="card1" style={{padding: '1rem'}}>
                <img src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png" alt={userName.name} style={{width:"100%"}} />
                <p>Welcome, {userName.name}</p>
                <h1>{userName.name}</h1>
                <p class="title">{userName.email}</p>
                <div className="as">
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-facebook"></i></a>
                </div>
                <p><button type='button' onClick={EditProfile} >Edit Profile</button></p>
                <p><button type='button' onClick={handleLogout}>Logout</button></p>
            </div>
      </div>
        </div>
    )
}

export default Profile
