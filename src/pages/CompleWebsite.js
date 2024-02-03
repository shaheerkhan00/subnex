import React from 'react'
import Layout from '../common/Layout'
import Banner from '../components/Banner/Banner'
import ChooseOpts from '../components/ChooseOpts/ChooseOpts'
import VendorMarketing from '../components/VendorMarketing'
import ConnectVendors from '../components/ConnectVendors'
import Footer from '../components/Footer'
import VendorsSignupComponent from '../components/VendorsSignup'
import SlidingTabs from '../components/SlidingTabs'
import PlaceBid from '../components/PlaceBid'

function CompleWebsite() {
  return (
    <Layout>
        <Banner/>
        <ChooseOpts/>
        <VendorMarketing/>
        <ConnectVendors/>
        <PlaceBid/>
        <SlidingTabs />
        <VendorsSignupComponent/>
    </Layout>
  )
}

export default CompleWebsite