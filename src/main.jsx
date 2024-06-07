import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Milestones from './pages/Milestones.jsx';
import OurBishop from './pages/OurBishop.jsx';
import VicarsMessage from './pages/VicarsMessage.jsx';
import Login from './pages/Login.jsx';
import MemberDashboard from './pages/MemberDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/milestones",
    element: <Milestones/>,
  },
  {
    path: "/our-bishops",
    element: <OurBishop/>,
  },
  {
    path: "/vicars-message",
    element: <VicarsMessage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/member-dashboard",
    element: <MemberDashboard/>,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);