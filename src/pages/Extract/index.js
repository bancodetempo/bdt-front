import React, { useEffect } from 'react';
import './index.css';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

const Extract = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: location.pathname });
  }, [location, dispatch]);

  return (
    <div>
      <p>Extrato</p>
    </div>
  );
};

export default Extract;
