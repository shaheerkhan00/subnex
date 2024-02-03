import React from 'react'
import Layout from '../common/Layout'
import Banner from '../components/Banner/Banner'
import ChooseOpts from '../components/ChooseOpts/ChooseOpts'
import VendorMarketing from '../components/VendorMarketing'
import ConnectVendors from '../components/ConnectVendors'
import Footer from '../components/Footer'
function LandingPage() {
  return (
    <Layout>
        <Banner/>
        <ChooseOpts/>
        <VendorMarketing/>
        <ConnectVendors/>
    </Layout>
  )
}

export default LandingPage