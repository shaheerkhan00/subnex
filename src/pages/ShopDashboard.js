// ShopDashboard.jsx
import React from 'react';
import Layout from '../common/Layout';
import SecondSlidingPage from './SecondSlidingPage';

function ShopDashboard({ userInfo }) {
  return (
    <Layout>
      <SecondSlidingPage userInfo={userInfo} />
    </Layout>
  );
}

export default ShopDashboard;
