import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBreadcrumb } from './BreadCrumsContext';
import '../styles/BreadCrumbs.css'
const Breadcrumbs = () => {
  const location = useLocation();
  const { breadcrumbs, addBreadcrumb, resetBreadcrumbs} = useBreadcrumb();
  const breadcrumbLabels = {
    "/milestones": "Milestones",
    "/church-history": "Church History",
    "/our-bishops": "Our Bishop",
    "/vicars-message": "Vicar's Message",
    "/missions-projects": "Missions & Projects",
    "/chhattisgarh-mission": "Chhattisgarh Mission",
    "/login": "Login",
    "/member-dashboard": "Member Dashboard",
    "/admin-dashboard": "Admin Dashboard",
    "/admin-dashboard/members": "Member Details",
    "/admin-dashboard/edit-user": "Edit User",
    "/admin-dashboard/vicar-message": "Vicar's Message",
    "/admin-dashboard/events": "Events",
    "/admin-dashboard/herald": "Church Herald",
    "/admin-dashboard/almanac": "Church Almanac",
    "/office-bearers": "Office Bearers",
    "/events": "Events",
    "/past-vicars": "Past Vicars",
    "/service-timings": "Service Timings",
    "/balikamandhiram-balabhavan": "Balikamandhiram Balabhavanam",
    "/csi-convention-center": "CSI Convention Center",
  };
  

  useEffect(() => {
    // Check if the user is on the home page
    if (location.pathname == "/") {
      resetBreadcrumbs(); // Clear breadcrumb memory
    } else {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const currentLabel = breadcrumbLabels[`/${pathSegments.join('/')}`] || "Home";

      const currentBreadcrumb = {
        path: location.pathname,
        label: currentLabel,
      };

      addBreadcrumb(currentBreadcrumb);
    }
  }, [location, addBreadcrumb, resetBreadcrumbs]);

  return (
    <nav>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
          <span className="separator">{`>`}</span>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path}>
            <Link to={crumb.path}>{crumb.label}</Link>
            {index < breadcrumbs.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
