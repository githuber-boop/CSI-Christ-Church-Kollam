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
    "/our-bishops": "Our Bishops",
    "/vicars-message": "Vicar's Message",
    "/missions-projects": "Missions & Projects",
    "/chhattisgarh-mission": "Chhattisgarh Mission",
    "/office-bearers": "Office Bearers",
    "/events": "Events",
    "/past-vicars": "Past Vicars",
    "/service-timings": "Service Timings",
    "/balikamandhiram-balabhavan": "Balikamandhiram Balabhavanam",
    "/csi-convention-center": "CSI Convention Center",
    "/archives" : "Archives"
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

  const limitedBreadcrumbs = breadcrumbs.slice(-3);

  return (
    <nav>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
          <span className="separator">{`>`}</span>
        </li>
        {limitedBreadcrumbs.map((crumb, index) => (
          <li key={crumb.path}>
            <Link to={crumb.path}>{crumb.label}</Link>
            {index < limitedBreadcrumbs.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
