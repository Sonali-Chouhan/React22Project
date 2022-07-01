import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// ar npo = localStorage.getItem("test");
//     var obj = JSON.parse(npo);
//     console.log(555, obj)
    
   
//     obj.filter((e) => {
//       if (e.name === data.name && (e.email === data.email))
//      { 
//        var msg = "login"
       
//        localStorage.setItem("msg",JSON.stringify(msg));

//         navigate("/basic-table.html")}
//       else {
//         console.log("983894")
//       }
//     })
//   }