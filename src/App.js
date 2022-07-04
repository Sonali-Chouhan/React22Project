import React, { Suspense } from "react";
import "./App.css";
import "./Layout/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PagenotFound from "./Component/PagenotFound";
const Singin = React.lazy(() => import("./Component/Singin"));
const Singup = React.lazy(() => import("./Component/Singup"));
const Dashboard = React.lazy(() => import("./Component/Dashboard"));


const App = () => {
  const gettoken = localStorage.getItem("token");
  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<div>Loading</div>}>
      <Router>
        {gettoken ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
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
        {/* <Routes>
        
        </Routes> */}
      </Router>
      </Suspense>
    </div>
  );
};

export default App;
