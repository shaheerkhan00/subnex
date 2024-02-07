// SlidingPage.jsx

import React from 'react';
import SlidingTabs from '../components/SlidingTabs';

function SlidingPage({ userInfo }) {
  return (
    <div>
      <div style={{ marginTop: '50px' }} /> 
      <SlidingTabs userInfo={userInfo} />
    </div>
  );
}

export default SlidingPage;
