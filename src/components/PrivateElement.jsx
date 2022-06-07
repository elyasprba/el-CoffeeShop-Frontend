import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateElement({ children, allowedRole, redirectedTo = '/', isRouteReplaced = true, extraData = undefined }) {
   const token = localStorage.getItem('token') || '';
   console.log(token);
   if (!token) {
      return <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />;
   }

   return children;
}

export default PrivateElement;
