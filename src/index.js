import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AssignmentFirst from './Components/AssignmentFirst';
import AssignmentTwo from './Components/AssignmentTwo';
import AssignmentThree from './Components/AssignmentThree';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : '/first' ,
    element : <AssignmentFirst/>
  },
  {
    path : '/second' ,
    element : <AssignmentTwo/>
  },
  {
    path : '/third' ,
    element : <AssignmentThree/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
