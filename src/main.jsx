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
import NewUser from './pages/NewUser.jsx'
import AdminMemberDetails from './pages/AdminMemberDetails.jsx';
import AdminVicarsMessage from './pages/AdminVicarsMessage.jsx'
import Missions from './pages/Missions.jsx';
import EditUser from './pages/EditUser.jsx';
import ChhattisgarhMission from './pages/ChhattisgarhMission.jsx';
import NewEvent from './pages/NewEvent.jsx';


const addUser = async (newUser) => {
  const res = await fetch('http://localhost:5000/users', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  return;
}

const addMessage = async (newMessage) => {
  const res = await fetch('http://localhost:5000/message/1', {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  });
  return;
}

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
    path: "/missions-projects",
    element: <Missions/>,
  },
  {
    path: "/chhattisgarh-mission",
    element: <ChhattisgarhMission/>,
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
    element: <NewUser addUserSubmit={addUser}/>,
    
  },
  {
    path: "/admin-dashboard/members",
    element: <AdminMemberDetails/>,

  },
  {
    path: "/admin-dashboard/edit-user/:id",
    element: <EditUser/>,

  },
  {
    path: "/admin-dashboard/vicar-message",
    element: <AdminVicarsMessage addMessageSubmit={addMessage}/>,

  },
  {
    path: "/admin-dashboard/events",
    element: <NewEvent/>

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);