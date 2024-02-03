import React from 'react';
import Layout from '../common/Layout';
import SlidingTabs from '../components/SlidingTabs';

function SlidingPage() {
  return (
    <Layout>    
      <SlidingTabs />
      <div style={{ marginBottom: '20px' }} /> {/* Add some margin after SlidingTabs */}
    </Layout>
  );
}

export default SlidingPage;
