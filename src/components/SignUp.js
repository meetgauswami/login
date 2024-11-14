import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        dpurl : ""
    });

    // to store a value in localstorage

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login")
        alert('Your Account Successfully Created, Login And Go in Your Profile')
    }


    return (
        <div>
            <div className="App">
                <div className="full-screen screenVw" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(13, 13, 40)" }}>
                    <div className="mader-name">
                        <h2>Made by @meet_gauswamii</h2>
                    </div>
                    <div className="card mb-3 containerSignUp">
                        <div className="row g-0 container2nd">
                            <div className="col-md-4" style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 btn-box" style={{ padding: "1rem" }}>
                                <form onSubmit={handleSubmit} class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Name</label>
                                        <input name='name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="name" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="email" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="password" class="form-control" id="inputPassword4" />
                                    </div>
                                    {/* <div class="col-md-6">
                                        <label for="myfile">Upload Profile Photo:</label>
                                        <input value={input.dpurl} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="file" id="myfile" name="dpurl" />
                                    </div> */}
                                    <div class="col-12" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                                        <button type="submit" class="btn btn-primary" style={{ width: '10rem', backgroundColor: 'rgb(13, 13, 88)' }}>Sign Up</button>
                                    </div>
                                    <div className="info" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <p>Already have an account?</p> <Link to="/login">Log in</Link>
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

export default SignUp
