import React, { Suspense } from "react";
import "./App.css";
import "./Layout/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import PagenotFound from "./Component/PagenotFound";
import Usertable from "./Component/Usertable";
import About from "./Component/About";
const Singin = React.lazy(() => import("./Component/Singin"));
const Singup = React.lazy(() => import("./Component/Singup"));
const Dashboard = React.lazy(() => import("./Component/Dashboard"));
const App = () => {
  const gettoken = localStorage.getItem("token");
  return (
    <div>
      <ToastContainer />
      <Suspense
        fallback={
          <ReactLoading type="spin" color="#e09b9b" height="20px" width="20px" />
        }
      >
        <Router>
          {gettoken ? (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/userlist" element={<Usertable />} />
              <Route path="/about" element={<About />} />
             <Route path="*" element={<PagenotFound />} />
            </Routes>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Singin />} />
                <Route path="/singup" element={<Singup />} />
                <Route path="*" element={<PagenotFound />} />
              </Routes>
            </>
          )}
          
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
