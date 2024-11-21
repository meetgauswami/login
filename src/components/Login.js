import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem("loggedin", true)
                navigate('/profile')
        }
        else{
            alert("Wrong Email Or Password")
        }
    };

    return (
        <div>
            <div className="App">
                <div className="full-screen screenVw" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(13, 13, 40)" }}>
                    <div className="mader-name">
                        <h2>Made by @meet_gauswamii</h2>
                    </div>
                    <div className="card mb-3 containerLogin">
                        <div className="row g-0 container2nd">
                            <div className="col-md-4" style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 btn-box" style={{padding: "1rem"}}>
                                <form onSubmit={handleLogin} className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlhtmlFor="inputEmail4" className="form-label">Email</label>
                                        <input name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlhtmlFor="inputPassword4" className="form-label">Password</label>
                                        <input name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="password" className="form-control" id="inputPassword4"/>
                                    </div>
                                    <div className="col-12" style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '4rem'}}>
                                        <button type="submit" className="btn btn-primary" style={{width: '10rem', backgroundColor: 'rgb(13, 13, 88)'}}>Log in</button>
                                    </div>
                                    <div className="info" style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <p>Don't have an account?</p> <Link to="/signup">Register New Account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login