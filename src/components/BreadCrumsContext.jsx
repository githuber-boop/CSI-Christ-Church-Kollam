import React, { createContext, useContext, useState } from 'react';

const BreadcrumbContext = createContext();

export const useBreadcrumb = () => {
  return useContext(BreadcrumbContext);
};

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const addBreadcrumb = (breadcrumb) => {
    setBreadcrumbs((prevBreadcrumbs) => {
      const isDuplicate = prevBreadcrumbs.some(
        (b) => b.path === breadcrumb.path
      );
      if (isDuplicate) return prevBreadcrumbs;

      return [...prevBreadcrumbs, breadcrumb];
    });
  };

  const resetBreadcrumbs = () => {
    setBreadcrumbs([]);
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, addBreadcrumb, resetBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
