import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditPofile = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        dpurl : ""
    });
    const userName = JSON.parse(localStorage.getItem("user"))


    const  handleSubmit = (e) => {
              
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
                                <form onSubmit={handleSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                                        <input name='name' value={userName.name} onChange={(e) => {setInput({[e.target.name]: e.target.value})}} type="name" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input name='email' value={userName.email} onChange={(e) => {setInput({ email: userName.email })}}  type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input name='password' value={userName.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="password" className="form-control" id="inputPassword4" />
                                    </div>
                                    {/* <div className="col-md-6">
                                        <label htmlFor="myfile">Upload Profile Photo:</label>
                                        <input value={input.dpurl} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}  type="file" id="myfile" name="dpurl" />
                                    </div> */}
                                    <p style={{color:'red'}}>sorry, you can't update your profile right now</p>
                                    <div className="col-12" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '4rem', gap: '2rem' }}>
                                        <button type="button" onClick={  () => {navigate('/profile')}} className="btn btn-primary" style={{ width: '10rem', backgroundColor: 'rgb(13, 13, 88)' }}>Cancel</button>
                                        <button disabled type="submit" className="btn btn-primary" style={{ width: '10rem', backgroundColor: 'rgb(13, 13, 88)' }}>Update</button>
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

export default EditPofile
