//Shivakan codeee
// import {
//     BrowserRouter, Route, Routes, Navigate,useNavigate,useLocation
//     } from 'react-router-dom';
//     import 'bootstrap/dist/css/bootstrap.min.css';
//     // import Navbar from '../components/Navbar';
//     // import Signup from '../pages/Signup';
//     import Login from '../pages/Login';
//     import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
//     import SignupLayout from '../containers/Layout/SignupLayout';
//     import AdminLayout from './Layout/AdminLayout/AdminLayout';
//     import AdminDashboardTable from '../components/AdminDashboardTable';
//     import PageNotFound from '../pages/pageNotFound';
//     import Signup from '../pages/Signup';
//     import { useSelector } from 'react-redux';
//     import { useEffect } from 'react';
    
    
//     function PrivateRoute({ children }) {
//     const auth = useSelector((state)=>state?.auth?.isAuth)
//     return auth ? children : <Navigate to="/" />;
//     }
    
    
//     function App() {
//     const navigate=useNavigate()
//     const { pathname } = useLocation()
//     const auth = useSelector((state)=>state?.auth?.isAuth)
    
//     useEffect(()=>{
//     if(pathname=='/login'){
//     navigate('/')
//     }
//     else{
//     navigate(pathname)
//     }
    
//     },[auth])
//     console.log(222222222,auth)
//     let token = localStorage.getItem("user");
//     return (
//     <Routes>
//     {auth ?
//     <Route
//     authed={true}
//     path="/admin/*"
//     element={
//     <PrivateRoute>
//     <AdminLayout />
//     </PrivateRoute>
//     }
//     />
//     :
//     <Route path="/*" element={<SignupLayout />} />
//     }
//     <Route path="/" exact={true} element={<DefaultLayout />} />
//     <Route path="*" element={< PageNotFound />} />
//     </Routes>
//     );
//     }
    
//     export default App;