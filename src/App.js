import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="full-screen" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "rgb(13, 13, 40)" }}>
        <div className="mader-name">
        <h2>Made by @meet_gauswamii</h2>
        </div>
        <div className="card mb-3" style={{ width: "70%"}}>
          <div className="row g-0 container">
            <div className="col-md-4">
              <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 btn-box">
                <div className="buttons">
                  <Link to="/login">Log In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
