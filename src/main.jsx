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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);