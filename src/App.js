import React from "react";
import "./App.css"
import "./Layout/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singin from "./Component/Singin";
import Singup from "./Component/Singup";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Dashboard from "./Component/Dashboard";


const App = () => {
  const gettoken=localStorage.getItem("token")
  return (
    <div>
        <ToastContainer/>
      <Router>
        {
          gettoken ?
          <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        :
        <>
         <Routes>
          <Route path="/" element={<Singin />} />
          <Route path="/singup" element={<Singup/>} />
        </Routes>
        </>
        }
        
      </Router>
    </div>
  );
};

export default App;
