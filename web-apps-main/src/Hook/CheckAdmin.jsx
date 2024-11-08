import React, { useState, useEffect } from 'react';
import useAdmin from './useAdmin';

export const CheckAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { userType, loading: adminLoading } = useAdmin();

  useEffect(() => {
    if (userType == 1) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setLoading(false);
  }, [userType]);

  if (adminLoading || loading) {
    return <div>Loading...</div>;
  }

  return isAdmin;
};

export default CheckAdmin;