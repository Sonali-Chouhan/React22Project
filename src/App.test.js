import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// import React, { Suspense,useEffect } from "react";
// import "./App.css";
// import "./Layout/Home.css";
// import { BrowserRouter as Router, Routes, Route,useLocation,useNavigate ,Navigate} from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import ReactLoading from "react-loading";
// import PagenotFound from "./Component/PagenotFound";
// import Usertable from "./Component/Usertable";
// import About from "./Component/About";
// import { useDispatch, useSelector } from "react-redux";
// const Singin = React.lazy(() => import("./Component/Singin"));
// const Singup = React.lazy(() => import("./Component/Singup"));
// const Dashboard = React.lazy(() => import("./Component/Dashboard"));

// function PrivateRoute({ children }) {
//   const isAuth = useSelector((state) => state?.Reducer?.isAuth);
//   return isAuth ? children : <Navigate to="/" />;
// }
// const App = () => {
 

//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const isAuth = useSelector((state) => state?.Reducer?.isAuth);
//   useEffect(() => {
//     if(pathname==='/dashboard'){
//       navigate('/')
//     }
//     else{
//       navigate(pathname)
//     }
    
//     // if (isAuth && pathname === "/") {
//     //   navigate("/dashboard");
//     // } else if(!isAuth && pathname === "/dashboard") {
//     //   navigate('/');
//     // }
//     // else if(!isAuth && pathname === "/userlist") {
//     //   navigate('/');
//     // }
//     // else{
//     //   navigate(pathname);
//     // }
//   }, [isAuth]);
//   return (
//     <div>
//       <ToastContainer />
//       <Suspense
//         fallback={
//           <ReactLoading type="spin" color="#7e0000" height="20px" width="20px" />
//         }
//       ><Routes>
//           {isAuth ? (
//              <Route
//              authed={true}
//                path="/dashboard/*"
//                element={
//                  <PrivateRoute>
//                    <Dashboard />
//                  </PrivateRoute>
//                }
//              />
//           ) : (
//             <>
//               <Routes>
//                 <Route path="/" element={<Singin />} />
//                 <Route path="/singup" element={<Singup />} />
//                 <Route path="*" element={<PagenotFound />} />
//               </Routes>
//             </>
//           )}
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default App;

