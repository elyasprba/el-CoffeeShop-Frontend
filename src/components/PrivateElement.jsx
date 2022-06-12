import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateElement({ children, allowedRole, redirectedTo = '/', isRouteReplaced = true, extraData = undefined }) {
   const { token } = useSelector((state) => state.auth.userInfo.info);

   if (!token) {
      return <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />;
   }

   return children;
}

export default PrivateElement;
