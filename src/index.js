import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Profile from './components/Profile';
import ProtectedRoutes from './Services/ProtectedRoutes';
import EditPofile from './components/EditPofile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route path='/' element={<ProtectedRoutes />}>
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/editprofile" element={<EditPofile />}/>
        </Route>
        </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
