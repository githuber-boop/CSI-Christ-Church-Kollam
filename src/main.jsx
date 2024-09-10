import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Milestones from './pages/Milestones.jsx';
import OurBishop from './pages/OurBishop.jsx';
import VicarsMessage from './pages/VicarsMessage.jsx';
import Login from './pages/Login.jsx';
import MemberDashboard from './pages/MemberDashboard.jsx';
import NewUser from './pages/NewUser.jsx';
import AdminMemberDetails from './pages/AdminMemberDetails.jsx';
import AdminVicarsMessage from './pages/AdminVicarsMessage.jsx';
import Missions from './pages/Missions.jsx';
import EditUser from './pages/EditUser.jsx';
import ChhattisgarhMission from './pages/ChhattisgarhMission.jsx';
import NewEvent from './pages/NewEvent.jsx';
import OfficeBearers from './pages/OfficeBearers.jsx';
import Events from './pages/Events.jsx';
import PastVicars from './pages/PastVicars.jsx';
import ServiceTimings from './pages/ServiceTimings.jsx';
import BalikaBalabha from './pages/BalikaBalabha.jsx';
import ConventionCenter from './pages/ConventionCenter.jsx';
import AdminChurchHerald from './pages/AdminChurchHerald.jsx';
import AdminChurchAlmanac from './pages/AdminChurchAlmanac.jsx';
import ChurchHistory from './pages/ChurchHistory.jsx';
import { BreadcrumbProvider } from './components/BreadCrumsContext.jsx';
import EditEvent from './pages/EditEvent.jsx';
import Archives from './pages/Archives.jsx';
import FamilyMembers from './pages/FamilyMembers.jsx';



const addEvent = async (newEvent) => {
  const res = await fetch('https://church-kollam-backend.onrender.com/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEvent)
  });
  return;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/milestones",
    element: <Milestones />,
  },
  {
    path: "/archives",
    element: <Archives/>,
  },
  {
    path: "/church-history",
    element: <ChurchHistory />,
  },
  {
    path: "/our-bishops",
    element: <OurBishop />,
  },
  {
    path: "/vicars-message",
    element: <VicarsMessage />,
  },
  {
    path: "/missions-projects",
    element: <Missions />,
  },
  {
    path: "/chhattisgarh-mission",
    element: <ChhattisgarhMission />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/member-dashboard",
    element: <MemberDashboard />,
  },
  {
    path: "/member-dashboard/family-members",
    element: <FamilyMembers/>,
  },
  {
    path: "/admin-dashboard",
    element: <NewUser/>,
  },
  {
    path: "/admin-dashboard/members",
    element: <AdminMemberDetails />,
  },
  {
    path: "/admin-dashboard/edit-user/:id",
    element: <EditUser />,
  },
  {
    path: "/admin-dasboard/edit-event",
    element: <EditEvent />,
  },
  {
    path: "/admin-dashboard/vicar-message",
    element: <AdminVicarsMessage/>,
  },
  {
    path: "/admin-dashboard/events",
    element: <NewEvent addEventSubmit={addEvent} />,
  },
  {
    path: "/admin-dashboard/herald",
    element: <AdminChurchHerald/> 
  },
  {
    path: "/admin-dashboard/almanac",
    element: <AdminChurchAlmanac/> 
  },
  {
    path: "/admin-dashboard/edit-events/:id",
    element: <EditEvent/> 
  },
  {
    path: "/office-bearers",
    element: <OfficeBearers />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/past-vicars",
    element: <PastVicars/>,
  },
  {
    path: "/service-timings",
    element: <ServiceTimings/>,
  },
  {
    path: "/balikamandhiram-balabhavan",
    element: <BalikaBalabha/>,
  },
  {
    path: "/csi-convention-center",
    element: <ConventionCenter/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BreadcrumbProvider>
    <RouterProvider router={router} />
    </BreadcrumbProvider>
  </React.StrictMode>
);
