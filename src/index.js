import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
// import Navbar from './components/Home/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
