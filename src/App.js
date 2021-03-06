 import React, { Suspense,useEffect } from "react";
import "./App.css";
import "./Layout/Home.css";
import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import PagenotFound from "./Component/PagenotFound";
import Usertable from "./Component/Usertable";
import About from "./Component/About";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./Component/UserProfile";
const Singin = React.lazy(() => import("./Component/Singin"));
const Singup = React.lazy(() => import("./Component/Singup"));
const Dashboard = React.lazy(() => import("./Component/Dashboard"));
const App = () => {
  // const gettoken = localStorage.getItem("token");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = useSelector((state) => state?.Reducer?.isAuth);
  useEffect(() => {
    if (isAuth && pathname === "/") {
      navigate("/dashboard");
    } else if(!isAuth && pathname === "/dashboard") {
      navigate('/');
    }
    else if(!isAuth && pathname === "/userlist") {
      navigate('/');
    }
    else{
      navigate(pathname);
    }
  }, [isAuth]);
  return (
    <div>
      <ToastContainer />
      <Suspense
        fallback={
          <ReactLoading type="spin" color="#7e0000" height="20px" width="20px" />
        }
      >
          {isAuth ? (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/userlist" element={<Usertable />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<UserProfile/>} />
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
          
      </Suspense>
    </div>
  );
};

export default App;


