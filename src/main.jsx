import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import CreateNote from './assets/CreateNote';
import EditNote from './assets/EditNote';
import DeleteNote from './assets/DeleteNote';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/create",
    element: <div><CreateNote/></div>,
  },
  {
    path: "/edit",
    element: <div><EditNote/></div>,
  },
  {
    path: "/delete",
    element: <div><DeleteNote/></div>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
