// VendorDashboard.jsx
import React from 'react';
import Layout from '../common/Layout';
import SlidingPage from './SlidingPage';

function VendorDashboard({ userInfo }) {
  return (
    <Layout>
      <SlidingPage userInfo={userInfo} />
    </Layout>
  );
}

export default VendorDashboard;
